'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import DigitalClock from './DigitalClock'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [glitchActive, setGlitchActive] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0.15])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Frequent glitch effect - every 3-5 seconds
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 100)
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden grain"
    >
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl w-full"
      >
        {/* Grid layout for asymmetric positioning */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left side - Name and Clock */}
          <div className="col-span-12 md:col-span-7 space-y-12 md:space-y-16">
            {/* Name with dollar sign */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="relative"
            >
              <div className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-bone/40">
                Victor Nwachukwu
              </div>
              <h1
                className="relative font-serif text-7xl md:text-8xl lg:text-[10rem] tracking-tight text-bone leading-none"
                style={{
                  textShadow:
                    '0 0 12px rgba(120, 10, 15, 0.22), 0 0 18px rgba(35, 160, 190, 0.12)',
                }}
              >
                <span className="relative inline-block">
                  {/* Base text with dollar sign */}
                  <span className={glitchActive ? 'opacity-90' : ''}>
                    <span className="text-accent">$</span>torm
                  </span>

                  {/* Glitch layers - whole word */}
                  {glitchActive && (
                    <>
                      {/* Red layer */}
                      <span
                        className="absolute inset-0 text-accent mix-blend-screen opacity-40"
                        style={{
                          transform: 'translate(3px, -2px)',
                        }}
                      >
                        <span className="text-accent">$</span>torm
                      </span>
                      {/* Cyan/white layer */}
                      <span
                        className="absolute inset-0 text-cyan-400 mix-blend-screen opacity-30"
                        style={{
                          transform: 'translate(-3px, 2px)',
                        }}
                      >
                        <span className="text-cyan-400">$</span>torm
                      </span>
                      {/* Additional offset for more chaos */}
                      <span
                        className="absolute inset-0 text-bone mix-blend-screen opacity-20"
                        style={{
                          transform: 'translate(-1px, -3px)',
                        }}
                      >
                        <span className="text-bone">$</span>torm
                      </span>
                    </>
                  )}
                </span>
              </h1>

              {/* Thin trace lines */}
              <motion.div
                className="absolute -bottom-3 left-0 h-px bg-accent origin-left w-36"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              />
              <motion.div
                className="absolute -bottom-4 left-0 h-px bg-cyan-400/20 origin-left w-16"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.7, duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              />
            </motion.div>

            {/* Digital clock with rotating quotes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 1.2,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="ml-0 md:ml-12"
            >
              <DigitalClock />
            </motion.div>
          </div>

          {/* Right side - Roles with old school dystopian style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="col-span-12 md:col-span-5 mt-8 md:mt-24"
          >
            {/* Retro terminal-style container */}
            <div className="relative glass border-l-2 border-accent/40 pl-6 py-6 space-y-6">
              {/* Top corner bracket */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent/40" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent/40" />

              {/* Roles with old school monospace feel */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="font-mono text-xs text-accent mt-1">&gt;</span>
                  <p className="font-mono text-sm md:text-base text-bone/70 tracking-wider uppercase leading-relaxed">
                    Product Designer
                    <br />× Software Engineer
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-mono text-xs text-accent mt-1">&gt;</span>
                  <p className="font-mono text-sm md:text-base text-bone/70 tracking-wider uppercase leading-relaxed">
                    Dystopian Horror
                    <br />Writer
                  </p>
                </div>
              </div>

              {/* Retro scan line effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 0, 0, 0.03) 2px, rgba(139, 0, 0, 0.03) 4px)',
                }}
              />

              {/* Old school status indicator */}
              <div className="flex items-center gap-2 pt-4 border-t border-bone/10">
                <motion.div
                  className="w-1.5 h-1.5 bg-accent rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <span className="font-mono text-xs text-bone/40 uppercase tracking-wider">
                  Online
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-12 flex flex-col items-start gap-3"
        >
          <span className="font-grotesk text-xs text-bone/30 tracking-widest">
            DESCEND
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-px h-12 bg-gradient-to-b from-bone/20 to-transparent"
          />
        </motion.div>
      </motion.div>

    </section>
  )
}
