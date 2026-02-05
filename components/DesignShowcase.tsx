'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const designs = [
  {
    id: 1,
    title: 'Surveillance Dashboard',
    category: 'Interface Design',
    description: 'Real-time monitoring interface with predictive threat visualization',
    year: '2025',
    tools: ['Figma', 'Principle', 'After Effects'],
  },
  {
    id: 2,
    title: 'Neural Pattern Library',
    category: 'Design System',
    description: 'Comprehensive component library for biometric authentication platforms',
    year: '2024',
    tools: ['Figma', 'Storybook', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Sleep Analysis Protocol',
    category: 'Data Visualization',
    description: 'Dream state mapping with temporal pattern recognition',
    year: '2024',
    tools: ['D3.js', 'Observable', 'Python'],
  },
]

function DesignCard({ design, index }: { design: typeof designs[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className={`group relative ${
        index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
      }`}
    >
      <div className="relative overflow-hidden glass-heavy p-8 md:p-12 border border-bone/10 group-hover:border-bone/20 transition-colors duration-700">
        {/* Subtle scan line on hover */}
        <motion.div
          className="absolute inset-x-0 h-px bg-accent/10"
          initial={{ y: 0, opacity: 0 }}
          whileHover={{ opacity: 1 }}
          animate={{ y: ['0%', '100%'] }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: 'linear' },
            opacity: { duration: 0.3 },
          }}
        />

        {/* Content */}
        <div className="relative z-10 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <span className="font-distorted text-xs tracking-[0.3em] text-accent opacity-60">
                {String(design.id).padStart(2, '0')} / {design.category}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-bone group-hover:text-bone/90 transition-colors duration-500">
                {design.title}
              </h3>
            </div>
            <span className="font-grotesk text-sm text-bone/40">{design.year}</span>
          </div>

          {/* Description */}
          <p className="font-grotesk text-base md:text-lg text-bone/70 leading-relaxed max-w-2xl">
            {design.description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 pt-4">
            {design.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs font-grotesk text-bone/50 border border-bone/10 bg-charcoal/30 backdrop-blur-sm"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Placeholder for design preview */}
          <div className="mt-8 aspect-video bg-gradient-to-br from-charcoal to-ink border border-bone/10 flex items-center justify-center group-hover:border-bone/20 transition-colors duration-700">
            <span className="font-distorted text-6xl text-bone/5 group-hover:text-bone/10 transition-colors duration-700">
              {design.id}
            </span>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-bone/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-bone/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Connecting line */}
      <motion.div
        className={`absolute ${
          index % 2 === 0 ? 'right-0' : 'left-0'
        } top-1/2 w-12 h-px bg-bone/10`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, duration: 0.8 }}
      />
    </motion.div>
  )
}

export default function DesignShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section
      id="designs"
      ref={sectionRef}
      className="section-spacing px-6 md:px-12 lg:px-24 relative grain"
    >
      {/* Section title */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="mb-24 md:mb-32 max-w-5xl"
      >
        <h2 className="font-distorted text-xs tracking-[0.3em] text-accent mb-4 opacity-60">
          DESIGN SYSTEMS
        </h2>
        <p className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-bone/90 leading-tight">
          Interfaces as instruments.
          <br />
          <span className="text-bone/40">Each pixel calculated. Each flow mapped.</span>
        </p>
      </motion.div>

      {/* Design cards */}
      <div className="space-y-24 md:space-y-32 max-w-6xl mx-auto">
        {designs.map((design, index) => (
          <DesignCard key={design.id} design={design} index={index} />
        ))}
      </div>
    </section>
  )
}
