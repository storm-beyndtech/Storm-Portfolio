'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'projects', label: 'Archive' },
  { id: 'gallery', label: 'Visual' },
  { id: 'designs', label: 'Systems' },
  { id: 'techniques', label: 'Methods' },
  { id: 'about', label: 'Identity' },
  { id: 'contact', label: 'Signal' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, [0, 200], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      // Show nav after threshold
      setIsVisible(window.scrollY > 400)

      // Detect active section
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id)
            return
          }
        }
      }
      setActiveSection(null)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      style={{ opacity }}
      className={`fixed right-12 top-1/2 -translate-y-1/2 z-40 hidden lg:block transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-end space-y-8">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative text-right"
          >
            {/* Label */}
            <motion.span
              className={`font-grotesk text-sm tracking-wider transition-all duration-500 ${
                activeSection === section.id
                  ? 'text-bone opacity-100'
                  : 'text-bone/40 opacity-0 group-hover:opacity-100'
              }`}
              style={{
                marginRight: activeSection === section.id ? '1rem' : '0.5rem',
              }}
            >
              {section.label}
            </motion.span>

            {/* Dot indicator */}
            <span
              className={`inline-block w-2 h-2 rounded-full transition-all duration-500 ${
                activeSection === section.id
                  ? 'bg-accent scale-125'
                  : 'bg-bone/30 group-hover:bg-bone/60'
              }`}
            />

            {/* Hover line */}
            <motion.span
              className="absolute right-0 top-1/2 -translate-y-1/2 h-px bg-bone/20 origin-right"
              initial={{ width: 0 }}
              whileHover={{ width: '3rem' }}
              transition={{ duration: 0.3 }}
              style={{ marginRight: '0.75rem' }}
            />
          </motion.button>
        ))}
      </div>

      {/* Vertical indicator line */}
      <div className="absolute right-1 top-0 bottom-0 w-px bg-bone/10" />
    </motion.nav>
  )
}
