'use client'

import { Canvas, useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'
import JellyEntity from './JellyEntity'

function SceneContent() {
  const { camera } = useThree()
  useEffect(() => {
    camera.position.set(0, 0, 9)
  }, [camera])

  return (
    <>
      <color attach="background" args={['#050608']} />
      <fog attach="fog" args={['#050608', 12, 35]} />
      <JellyEntity scale={1.8} position={[0, 0.2, 0]} />
    </>
  )
}

export default function AtmosphericBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 9], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}
