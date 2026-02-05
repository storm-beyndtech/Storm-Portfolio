'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const particleCount = 800
  const { positions, geometry } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))

    return { positions: pos, geometry: geo }
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return

    const time = state.clock.getElapsedTime()

    // Slow rotation
    pointsRef.current.rotation.y = time * 0.02
    pointsRef.current.rotation.x = Math.sin(time * 0.01) * 0.1

    // Gentle mouse tracking
    const targetX = mouseRef.current.x * 0.3
    const targetY = mouseRef.current.y * 0.3
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.01
    pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.01
  })

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    })
  }

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        color="#f4f4f0"
        transparent
        opacity={0.15}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FogLayer() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.z = time * 0.01
    const material = meshRef.current.material as THREE.MeshBasicMaterial
    if (material) {
      material.opacity = 0.03 + Math.sin(time * 0.5) * 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[100, 100, 32, 32]} />
      <meshBasicMaterial
        color="#8b0000"
        transparent
        opacity={0.03}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

export default function AtmosphericBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <color attach="background" args={['#0a0a0a']} />
        <fog attach="fog" args={['#0a0a0a', 10, 50]} />
        <ParticleField />
        <FogLayer />
      </Canvas>
    </div>
  )
}
