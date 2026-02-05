'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [80, 0])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-spacing px-6 md:px-12 lg:px-24 relative grain"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mb-24 md:mb-32"
        >
          <h2 className="font-distorted text-xs tracking-[0.3em] text-accent mb-4 opacity-60">
            IDENTITY
          </h2>
        </motion.div>

        {/* Bio content - asymmetric layout */}
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Main bio */}
          <motion.div
            style={{ y: contentY }}
            className="col-span-12 md:col-span-8 md:col-start-3 space-y-8"
          >
            <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-bone leading-tight">
              Storm
            </h3>

            <div className="space-y-6 font-grotesk text-base md:text-lg text-bone/70 leading-relaxed border-l border-bone/10 pl-8">
              <p>
                I design interfaces that observe. I engineer systems that remember.
                I write stories about the space between control and collapse.
              </p>

              <p>
                My work exists at the intersection of product design, software engineering,
                and speculative fiction. Each discipline informs the others. Design teaches
                me about constraints. Code teaches me about systems. Writing teaches me
                about what we fear when we build.
              </p>

              <p>
                I have built surveillance dashboards, real-time monitoring tools, and
                decision-making platforms for organizations that prefer not to be named.
                I have designed typography systems that make data feel inevitable.
                I have written about worlds where sleep is regulated and dreams are
                evidence.
              </p>

              <p className="text-bone/50 italic">
                The work is not about horror. It is about clarity.
                The system was always watching. I just make it legible.
              </p>
            </div>

            {/* Role tags */}
            <div className="flex flex-wrap gap-3 pt-6">
              {[
                'Product Designer',
                'Software Engineer',
                'Dystopian Horror Writer',
                'Systems Thinker',
                'Interface Architect',
              ].map((role) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="px-4 py-2 text-sm font-grotesk text-bone/60 border border-bone/20 glass rounded-sm"
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Side element - minimal metadata */}
          <motion.div
            style={{ y: contentY }}
            className="col-span-12 md:col-span-3 md:col-start-1 md:row-start-1 space-y-6 text-sm font-grotesk text-bone/40"
          >
            <div>
              <span className="block text-bone/60 mb-2">Location</span>
              <span>Undisclosed</span>
            </div>
            <div>
              <span className="block text-bone/60 mb-2">Availability</span>
              <span>Selective</span>
            </div>
            <div>
              <span className="block text-bone/60 mb-2">Status</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
                Observing
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
