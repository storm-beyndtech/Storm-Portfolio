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
          animate={{ opacity: stage === 'initial' ? 0.1 : 0 }}
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
      </motion.div>
    </AnimatePresence>
  )
}
