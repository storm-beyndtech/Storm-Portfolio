'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FloatingActionsProps {
  onContactClick: () => void
}

export default function FloatingActions({ onContactClick }: FloatingActionsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBehanceClick = () => {
    window.open(process.env.NEXT_PUBLIC_BEHANCE_URL || 'https://behance.net', '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-40 flex flex-col gap-3"
        >
          {/* Behance button */}
          <motion.button
            onClick={handleBehanceClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
            title="View Behance"
          >
            <div className="w-14 h-14 glass-heavy border border-bone/20 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
              {/* Scan line */}
              <motion.div
                className="absolute inset-0 bg-accent/10"
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              {/* Behance icon */}
              <span className="relative z-10 font-grotesk font-bold text-lg text-bone group-hover:text-accent transition-colors duration-300">
                Bē
              </span>

              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-accent/40" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-accent/40" />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.button>

          {/* Quick Contact button */}
          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
            title="Quick Contact"
          >
            <div className="w-14 h-14 glass-heavy border border-bone/20 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
              {/* Scan line */}
              <motion.div
                className="absolute inset-0 bg-accent/10"
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 0.5 }}
              />

              {/* Mail icon */}
              <svg
                className="relative z-10 w-5 h-5 stroke-bone group-hover:stroke-accent transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>

              {/* Corner markers */}
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-bone/20" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-bone/20" />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
