'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const quotes = [
  'The system remembered first.',
  'Sleep was rehearsal.',
  'Observation precedes understanding.',
  'Every pattern tells a story.',
  'Silence is data.',
  'Control through design.',
]

export default function DigitalClock() {
  const [time, setTime] = useState('')
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const timeInterval = setInterval(updateTime, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)

    return () => clearInterval(quoteInterval)
  }, [])

  return (
    <div className="relative">
      {/* Digital clock display */}
      <div className="relative inline-block">
        {/* Background glow */}
        <div className="absolute inset-0 bg-accent/5 blur-2xl" />

        {/* Clock container */}
        <div className="relative glass border border-bone/10 px-8 py-6 mb-8">
          {/* Corner tech details */}
          <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-accent/60" />
          <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-accent/60" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-accent/60" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-accent/60" />

          {/* Time display with 3D effect */}
          <div className="relative">
            {/* Shadow layers for 3D depth */}
            <div
              className="absolute inset-0 text-accent/20 blur-sm"
              style={{
                transform: 'translate(2px, 2px)',
              }}
            >
              <span className="font-mono text-4xl md:text-5xl tracking-[0.2em]">
                {time}
              </span>
            </div>
            <div
              className="absolute inset-0 text-accent/30"
              style={{
                transform: 'translate(1px, 1px)',
              }}
            >
              <span className="font-mono text-4xl md:text-5xl tracking-[0.2em]">
                {time}
              </span>
            </div>

            {/* Main time */}
            <motion.span
              className="relative z-10 font-mono text-4xl md:text-5xl tracking-[0.2em] text-bone"
              animate={{
                textShadow: [
                  '0 0 10px rgba(139, 0, 0, 0.3)',
                  '0 0 20px rgba(139, 0, 0, 0.5)',
                  '0 0 10px rgba(139, 0, 0, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {time}
            </motion.span>
          </div>

          {/* Scan line */}
          <motion.div
            className="absolute inset-x-0 h-px bg-accent/30"
            animate={{ y: [0, 60, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </div>

      {/* Rotating quotes below clock */}
      <div className="relative h-20 md:h-16 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentQuote}
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: 90 }}
            transition={{
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="absolute inset-0 font-serif text-lg md:text-xl text-bone/60 italic tracking-tight leading-relaxed"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            {quotes[currentQuote]}
          </motion.p>
        </AnimatePresence>

        {/* Quote indicator dots */}
        <div className="absolute -bottom-8 left-0 flex gap-1">
          {quotes.map((_, index) => (
            <motion.div
              key={index}
              className="w-1 h-1 bg-bone/20"
              animate={{
                backgroundColor:
                  index === currentQuote
                    ? 'rgba(139, 0, 0, 0.6)'
                    : 'rgba(244, 244, 240, 0.2)',
                scale: index === currentQuote ? 1.5 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
