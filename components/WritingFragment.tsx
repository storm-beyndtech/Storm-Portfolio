'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface WritingFragmentProps {
  text: string
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
}

export default function WritingFragment({
  text,
  align = 'center',
  size = 'md',
}: WritingFragmentProps) {
  const fragmentRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: fragmentRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const sizeClasses = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl lg:text-3xl',
    lg: 'text-2xl md:text-4xl lg:text-5xl',
  }

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <motion.div
      ref={fragmentRef}
      style={{ y, opacity }}
      className={`section-spacing-sm px-6 md:px-12 lg:px-24 ${alignClasses[align]}`}
    >
      <div className="relative inline-block">
        {/* Quote marks or brackets */}
        <span className="absolute -left-6 top-0 text-accent/30 font-distorted text-sm">
          [
        </span>
        <p
          className={`font-serif ${sizeClasses[size]} tracking-tight text-bone/70 italic max-w-4xl mx-auto leading-tight`}
        >
          {text}
        </p>
        <span className="absolute -right-6 bottom-0 text-accent/30 font-distorted text-sm">
          ]
        </span>

        {/* Subtle underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="h-px bg-accent/20 mt-8 origin-center"
        />
      </div>
    </motion.div>
  )
}
