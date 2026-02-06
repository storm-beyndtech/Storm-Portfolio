'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Threshold() {
  const [isVisible, setIsVisible] = useState(true)
  const [stage, setStage] = useState<'initial' | 'text' | 'fade'>('initial')

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setStage('text')
    }, 800)

    const textTimer = setTimeout(() => {
      setStage('fade')
    }, 3500)

    const fadeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => {
      clearTimeout(initialTimer)
      clearTimeout(textTimer)
      clearTimeout(fadeTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-ink grain"
      >
        {/* Background pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: stage === 'initial' ? 0.08 : 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute inset-0 bg-accent"
        />

        {/* Entry text */}
        <div className="relative z-10 px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: stage === 'text' ? 1 : 0,
              y: stage === 'text' ? 0 : 10,
            }}
            transition={{
              duration: 1.2,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="font-serif text-2xl md:text-4xl tracking-tight text-bone/90 max-w-2xl mx-auto leading-relaxed"
          >
            Nothing here is accidental.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === 'text' ? 0.5 : 0 }}
            transition={{
              duration: 1.4,
              delay: 0.4,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="mt-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-bone/40"
          >
            Signal accepted
          </motion.p>

          {/* Subtle line underneath */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: stage === 'text' ? 1 : 0,
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="h-px bg-bone/20 mt-8 max-w-md mx-auto origin-center"
          />
        </div>

        {/* Corner markers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: stage === 'fade' ? 0 : 0.3 }}
          transition={{ duration: 1 }}
          className="absolute top-8 left-8 w-16 h-16 border-l border-t border-bone/20"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: stage === 'fade' ? 0 : 0.3 }}
          transition={{ duration: 1 }}
          className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-bone/20"
        />

        {/* Minimal spaceship glyph */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: stage === 'text' ? 0.45 : 0, y: stage === 'text' ? 0 : 6 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute top-14 left-1/2 -translate-x-1/2 pointer-events-none"
        >
          <svg
            width="80"
            height="32"
            viewBox="0 0 80 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18 L40 6 L70 18 L40 22 Z"
              stroke="rgba(244,244,240,0.35)"
              strokeWidth="1"
            />
            <path
              d="M26 18 L40 12 L54 18"
              stroke="rgba(120,10,15,0.35)"
              strokeWidth="1"
            />
            <circle cx="40" cy="18" r="2" fill="rgba(244,244,240,0.3)" />
            <path
              d="M38 24 L40 28 L42 24"
              stroke="rgba(120,10,15,0.35)"
              strokeWidth="1"
            />
          </svg>
        </motion.div>

        {/* Eerie micro-glyphs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: stage === 'text' ? 0.25 : 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute top-10 right-12 font-mono text-[10px] text-bone/40 tracking-[0.35em]"
        >
          0x3A / 0x9F
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: stage === 'text' ? 0.2 : 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute bottom-12 left-14 font-mono text-[10px] text-bone/40 tracking-[0.35em]"
        >
          TRACE:ACTIVE
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
