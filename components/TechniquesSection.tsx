'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const techniques = [
  {
    category: 'Typography Systems',
    items: [
      'Hierarchical tension through scale contrast',
      'Variable fonts for atmospheric weight shifts',
      'Monospace as data, serif as confession',
    ],
  },
  {
    category: 'Motion Principles',
    items: [
      'Slow easing functions (0.4s–2s minimum)',
      'Scroll-driven parallax layering',
      'Asymmetric timing for discomfort',
    ],
  },
  {
    category: 'Layout Logic',
    items: [
      'Broken grids with intentional misalignment',
      'Whitespace as pressure and silence',
      'Vertical rhythm that refuses comfort',
    ],
  },
  {
    category: 'Engineering Patterns',
    items: [
      'React Server Components for static isolation',
      'Optimistic UI with deliberate delay',
      'Edge rendering for geographic control',
    ],
  },
]

function TechniqueBlock({
  technique,
  index,
}: {
  technique: (typeof techniques)[0]
  index: number
}) {
  const blockRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [60, 0, -60]
  )
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.3]
  )

  return (
    <motion.div
      ref={blockRef}
      style={{ y, opacity }}
      className={`${
        index % 2 === 0 ? 'md:col-span-5' : 'md:col-span-7 md:col-start-6'
      } col-span-12 space-y-6`}
    >
      {/* Category label */}
      <div className="space-y-2">
        <span className="font-distorted text-xs tracking-[0.3em] text-accent opacity-60">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-bone">
          {technique.category}
        </h3>
      </div>

      {/* Items */}
      <ul className="space-y-4 pl-6 border-l border-bone/10">
        {technique.items.map((item, itemIndex) => (
          <motion.li
            key={itemIndex}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              delay: itemIndex * 0.1,
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="font-grotesk text-base md:text-lg text-bone/60 leading-relaxed"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function TechniquesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section
      id="techniques"
      ref={sectionRef}
      className="section-spacing px-6 md:px-12 lg:px-24 relative grain"
    >
      {/* Section title */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="mb-24 md:mb-32 max-w-5xl"
      >
        <h2 className="font-distorted text-xs tracking-[0.3em] text-accent mb-4 opacity-60">
          METHODS
        </h2>
        <p className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-bone/90 leading-tight">
          Principles are constraints.
          <br />
          <span className="text-bone/40">Systems remember what you forget.</span>
        </p>
      </motion.div>

      {/* Techniques grid */}
      <div className="offset-grid">
        {techniques.map((technique, index) => (
          <TechniqueBlock key={index} technique={technique} index={index} />
        ))}
      </div>
    </section>
  )
}
