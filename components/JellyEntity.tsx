'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vWorldPos;
  varying float vNoise;

  uniform float uTime;
  uniform float uBreath;
  uniform float uWarp;

  // Simplex noise (3D)
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }
  float snoise(vec3 v) {
    const vec2  C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(
      permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0)
    );

    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.y;
    vec4 y = y_ * ns.x + ns.y;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec3 pos = position;

    float t = uTime * 0.25;
    float n1 = snoise(pos * 1.2 + vec3(t, t * 0.9, -t * 0.7));
    float n2 = snoise(pos.yzx * 1.4 + vec3(-t * 0.8, t * 0.6, t));

    // Curl-like organic distortion for a living surface without rigging
    vec3 curl = vec3(
      snoise(pos.yzx * 1.6 + t),
      snoise(pos.zxy * 1.6 - t * 0.8),
      snoise(pos.xyz * 1.6 + t * 0.6)
    );

    // Slow, frame-rate independent breathing
    float breath = sin(uTime * 0.35) * uBreath;
    float displacement = (n1 * 0.12 + n2 * 0.08 + breath) * uWarp;

    pos += normal * displacement;
    pos += curl * 0.08;

    vNoise = n1 * 0.5 + n2 * 0.5;
    vec4 world = modelMatrix * vec4(pos, 1.0);
    vWorldPos = world.xyz;

    gl_Position = projectionMatrix * viewMatrix * world;
  }
`

const fragmentShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vWorldPos;
  varying float vNoise;

  uniform vec3 uBaseColor;
  uniform vec3 uAccentColor;
  uniform float uOpacity;
  uniform float uFocus;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(cameraPosition - vWorldPos);

    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.5);
    float internal = pow(1.0 - abs(dot(normal, viewDir)), 1.4);

    vec3 base = mix(uBaseColor, uAccentColor, clamp(vNoise * 0.5 + 0.5, 0.0, 1.0) * 0.35);
    vec3 glow = uAccentColor * fresnel * (0.35 + uFocus * 0.35);

    vec3 color = base * (0.6 + internal * 0.35) + glow;
    float alpha = uOpacity + internal * 0.18 + fresnel * (0.22 + uFocus * 0.12);

    gl_FragColor = vec4(color, alpha);
  }
`

type JellyEntityProps = {
  scale?: number
  position?: [number, number, number]
  focus?: number
}

export default function JellyEntity({ scale = 1, position = [0, 0, 0], focus = 0 }: JellyEntityProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const meshRef = useRef<THREE.Mesh>(null)

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uBreath: { value: 0.08 },
        uWarp: { value: 1.0 },
        uOpacity: { value: 0.08 },
        uFocus: { value: focus },
        uBaseColor: { value: new THREE.Color('#0c1018') },
        uAccentColor: { value: new THREE.Color('#6f907e') },
      },
    })
  }, [])

  useFrame((state) => {
    if (!materialRef.current) return
    materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    materialRef.current.uniforms.uFocus.value = focus
    if (meshRef.current) {
      const t = state.clock.getElapsedTime()
      // Subtle, slow orientation drift to avoid static silhouette.
      meshRef.current.rotation.y = Math.sin(t * 0.08) * 0.15
      meshRef.current.rotation.x = Math.cos(t * 0.06) * 0.08
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1.35, 6]} />
      <primitive object={material} ref={materialRef} attach="material" />
    </mesh>
  )
}
