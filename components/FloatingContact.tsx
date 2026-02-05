'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface FloatingContactProps {
  onMailClick: () => void
}

const socialLinks = [
  {
    name: 'Behance',
    icon: 'Be',
    url: process.env.NEXT_PUBLIC_BEHANCE_URL || 'https://behance.net',
    angle: 0,
  },
  {
    name: 'GitHub',
    icon: 'Gh',
    url: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com',
    angle: 45,
  },
  {
    name: 'Mail',
    icon: '✉',
    url: null, // Special - triggers modal
    angle: 90,
  },
  {
    name: 'WhatsApp',
    icon: 'Wa',
    url: process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/1234567890',
    angle: 135,
  },
  {
    name: 'Twitter',
    icon: '𝕏',
    url: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com',
    angle: 180,
  },
]

export default function FloatingContact({ onMailClick }: FloatingContactProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (link: typeof socialLinks[0]) => {
    if (link.url === null) {
      onMailClick()
      setIsExpanded(false)
    } else {
      window.open(link.url, '_blank')
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-8 right-8 z-50"
        >
          {/* Main button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glass button */}
            <div className="w-16 h-16 glass-heavy border border-bone/20 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
              {/* Subtle scan line */}
              <motion.div
                className="absolute inset-0 bg-accent/10"
                animate={{
                  y: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Signal/Communication icon */}
              <motion.div
                className="relative z-10 w-6 h-6 flex items-center justify-center"
                animate={{
                  rotate: isExpanded ? 180 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                {/* Center dot */}
                <div className="absolute w-1.5 h-1.5 rounded-full bg-bone group-hover:bg-accent transition-colors duration-300" />

                {/* Signal waves - expanding circles */}
                <motion.div
                  className="absolute w-3 h-3 rounded-full border border-bone/70 group-hover:border-accent transition-colors duration-300"
                  animate={{
                    scale: isExpanded ? 0.8 : 1,
                    opacity: isExpanded ? 0.3 : 0.7,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute w-5 h-5 rounded-full border border-bone/50 group-hover:border-accent/70 transition-colors duration-300"
                  animate={{
                    scale: isExpanded ? 0.6 : 1,
                    opacity: isExpanded ? 0.2 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute w-7 h-7 rounded-full border border-bone/30 group-hover:border-accent/50 transition-colors duration-300"
                  animate={{
                    scale: isExpanded ? 0.4 : 1,
                    opacity: isExpanded ? 0.1 : 0.3,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-accent/40" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-accent/40" />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.button>

          {/* Radial menu */}
          <AnimatePresence>
            {isExpanded && (
              <>
                {/* Backdrop blur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-ink/20 backdrop-blur-sm -z-10"
                  onClick={() => setIsExpanded(false)}
                />

                {/* Social links */}
                {socialLinks.map((link, index) => {
                  const radius = 120
                  const angleInRadians = (link.angle * Math.PI) / 180
                  const x = Math.cos(angleInRadians) * radius
                  const y = Math.sin(angleInRadians) * radius

                  return (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x,
                        y,
                      }}
                      exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      }}
                      onClick={() => handleLinkClick(link)}
                      className="absolute top-8 left-8 w-12 h-12 glass border border-bone/10 backdrop-blur-xl flex items-center justify-center group/icon"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="font-grotesk text-sm text-bone/70 group-hover/icon:text-accent transition-colors duration-300">
                        {link.icon}
                      </span>

                      {/* Label on hover */}
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: -10 }}
                        className="absolute right-full mr-3 font-grotesk text-xs text-bone/50 whitespace-nowrap px-2 py-1 glass border border-bone/10 pointer-events-none"
                      >
                        {link.name}
                      </motion.span>

                      {/* Connector line */}
                      <motion.div
                        className="absolute w-px bg-bone/10 origin-right"
                        style={{
                          width: Math.sqrt(x * x + y * y),
                          rotate: `${Math.atan2(y, x)}rad`,
                          right: '50%',
                          top: '50%',
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                      />
                    </motion.button>
                  )
                })}
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
