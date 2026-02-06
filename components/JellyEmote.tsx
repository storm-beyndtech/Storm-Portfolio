'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useState } from 'react'
import { motion } from 'framer-motion'
import JellyEntity from './JellyEntity'

function CameraBreath() {
  const { camera } = useThree()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const targetZ = 3.7 + Math.sin(t * 0.28) * 0.38
    const targetY = 0.08 + Math.cos(t * 0.22) * 0.12
    camera.position.z += (targetZ - camera.position.z) * 0.035
    camera.position.y += (targetY - camera.position.y) * 0.03
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function JellyEmote() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden grain">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-accent/40" />
          <h2 className="font-mono text-xs uppercase tracking-wider text-bone/40">
            Signature
          </h2>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="relative aspect-square glass border border-bone/10 overflow-hidden bg-ink"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Canvas
              dpr={[1, 2]}
              camera={{ position: [0, 0, 3.7], fov: 45 }}
              gl={{ alpha: true, antialias: true }}
            >
              <color attach="background" args={['#08090c']} />
              <CameraBreath />
              <JellyEntity scale={1.2} position={[0, -0.1, 0]} focus={isHovered ? 1 : 0} />
            </Canvas>

            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-accent/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-accent/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-accent/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-accent/40" />

            <motion.div
              className="absolute inset-x-0 h-px bg-accent/20"
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="font-grotesk text-4xl md:text-5xl text-bone">
                The Emote
              </h3>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-accent"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-mono text-xs text-bone/40 uppercase tracking-wider">
                  Alive / Calm / Eerie
                </span>
              </div>
            </div>

            <p className="font-grotesk text-lg text-bone/60 leading-relaxed">
              A translucent presence that breathes and listens. It does not imitate
              a jellyfish — it borrows the sensation of life suspended in silence.
            </p>

            <div className="pt-4 border-t border-bone/10 space-y-3">
              <div className="flex items-start gap-3">
                <span className="font-mono text-accent text-sm">&gt;</span>
                <p className="font-grotesk text-sm text-bone/50">
                  Shader-first form, no rigs or keyframes
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-accent text-sm">&gt;</span>
                <p className="font-grotesk text-sm text-bone/50">
                  Fresnel glow and internal depth for soft translucency
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-accent text-sm">&gt;</span>
                <p className="font-grotesk text-sm text-bone/50">
                  Responds to focus without breaking its calm
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
    </section>
  )
}
