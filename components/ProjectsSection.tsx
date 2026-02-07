'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type Project = {
  id: string
  title: string
  type: string
  year: string
  status?: string
  symbol?: 'eye' | 'heart'
  aura?: string
  description: string
  tags: string[]
  url?: string
  details?: string[]
  actions?: string[]
}

const projects: Project[] = [
  {
    id: '001',
    title: 'Nakupenda',
    type: 'Design Exploration',
    year: '2026',
    status: 'In progress',
    symbol: 'heart',
    description:
      'Human-first social infrastructure built around presence, boundaries, and intentional connection.',
    tags: ['Emotional UI', 'Typography-Led', 'System Tone'],
    url: '/case-studies/nakupenda',
    details: [
      'Currents filter attention before harm begins.',
      'Community Control replaces opaque moderation.',
      'TEXTin turns messaging into emotional infrastructure.',
    ],
  },
  {
    id: '002',
    title: 'Rasman',
    type: 'Music Portfolio',
    year: '2025',
    status: 'Live',
    description:
      'Audio-led layout with harmonic pacing and responsive emphasis.',
    tags: ['Motion', 'Audio UI', 'Rhythm'],
    url: '/case-studies/rasman',
    details: [
      'Motion tuned to breath cycles.',
      'Sound-forward layout hierarchy.',
      'Quiet transitions for emotional pacing.',
    ],
  },
  {
    id: '003',
    title: 'Bleenk',
    type: 'Active System',
    year: '2026',
    status: 'In progress',
    symbol: 'eye',
    aura: 'Aura: Blink / Instant settlement / Quiet escalation',
    description:
      'A payment system that treats trust as a living signal. Blink-state validation, global latency awareness.',
    tags: ['Financial UX', 'Real-Time Systems', 'Constraint-Led'],
    url: '/case-studies/bleenk',
    details: [
      'Blink-state verification for instant payment trust.',
      'Latency-aware handoff across regions.',
      'Degrades gracefully under load without panic.',
    ],
  },
  {
    id: '004',
    title: 'Dash NG Shop',
    type: 'Live System',
    year: '2025',
    status: 'Live',
    description:
      'Multi-role e-commerce command system engineered for real-time certainty.',
    tags: ['Real-Time', 'Inventory', 'Payment Verification'],
    url: '/case-studies/dash',
    details: [
      'Sub-100ms inventory sync across roles.',
      'Currency conversion cache to reduce load.',
      'Automated payment verification with fraud checks.',
    ],
  },
  {
    id: '005',
    title: 'Pearl',
    type: 'System Suite',
    year: '2025',
    status: 'Live',
    description:
      'Cohesive interface lattice for high-trust environments.',
    tags: ['Design System', 'Tokens', 'Accessibility'],
    url: '/case-studies/pearl',
    details: [
      'Monochrome hierarchy with micro-contrast.',
      'Tokenized spacing and durable rhythm.',
      'Ceremonial flows to reduce error states.',
    ],
  },
  {
    id: '006',
    title: 'Sleep Surveillance',
    type: 'Pending Build',
    year: '2026',
    status: 'In progress',
    description:
      'A system that treats sleep as a monitored signal, not a passive state.',
    tags: ['Bio Systems', 'Memory', 'Signal Integrity'],
    url: '/case-studies/sleep-surveillance',
    details: [
      'Dream-state indexing with temporal drift.',
      'Soft alerts without dopamine triggers.',
      'Consent-first telemetry capture.',
    ],
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group relative"
    >
      {/* Offset layout */}
      <div
        className={`grid grid-cols-12 gap-4 ${
          index % 2 === 0 ? 'ml-0' : 'ml-8 md:ml-16'
        }`}
      >
        {/* ID Column */}
        <div className="col-span-2 md:col-span-1">
          <span className="font-distorted text-xs text-accent opacity-60">
            {project.id}
          </span>
        </div>

        {/* Content */}
        <div className="col-span-10 md:col-span-11 space-y-4 pb-12 md:pb-16 border-b border-bone/5 group-hover:border-bone/10 transition-colors duration-700">
          {/* Title and type */}
          <div className="space-y-1">
            {project.url ? (
              <motion.a
                href={project.url}
                target={project.url.startsWith('http') ? '_blank' : undefined}
                rel={project.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-bone group-hover:text-bone/90 transition-colors duration-500 flex items-center gap-3">
                  {project.title}
                  {project.symbol === 'eye' ? (
                    <motion.span
                      className="inline-flex items-center justify-center"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
                        <path
                          d="M1 7 C 5 1, 10 1, 14 1 C 18 1, 23 1, 27 7 C 23 13, 18 13, 14 13 C 10 13, 5 13, 1 7 Z"
                          stroke="rgba(244,244,240,0.6)"
                          strokeWidth="1"
                        />
                        <circle cx="14" cy="7" r="3" fill="rgba(139,0,0,0.6)" />
                      </svg>
                    </motion.span>
                  ) : null}
                  {project.symbol === 'heart' ? (
                    <span className="text-bone/50 text-2xl">♡</span>
                  ) : null}
                </h3>
              </motion.a>
            ) : (
              <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-bone/90 flex items-center gap-3">
                {project.title}
                {project.symbol === 'eye' ? (
                  <motion.span
                    className="inline-flex items-center justify-center"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
                      <path
                        d="M1 7 C 5 1, 10 1, 14 1 C 18 1, 23 1, 27 7 C 23 13, 18 13, 14 13 C 10 13, 5 13, 1 7 Z"
                        stroke="rgba(244,244,240,0.6)"
                        strokeWidth="1"
                      />
                      <circle cx="14" cy="7" r="3" fill="rgba(139,0,0,0.6)" />
                    </svg>
                  </motion.span>
                ) : null}
                {project.symbol === 'heart' ? (
                  <span className="text-bone/50 text-2xl">♡</span>
                ) : null}
              </h3>
            )}
            <div className="flex items-center gap-4 text-sm text-bone/50">
              <span className="font-grotesk">{project.type}</span>
              <span className="w-1 h-1 bg-bone/30 rounded-full" />
              <span className="font-grotesk">{project.year}</span>
              {project.status ? (
                <>
                  <span className="w-1 h-1 bg-bone/30 rounded-full" />
                  <span className="font-grotesk text-bone/40 uppercase tracking-wider">
                    {project.status}
                  </span>
                </>
              ) : null}
            </div>
          </div>

          {/* Description */}
          <p className="font-grotesk text-base md:text-lg text-bone/70 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          {project.details ? (
            <details className="group/details max-w-2xl">
              <summary className="cursor-pointer list-none font-grotesk text-xs uppercase tracking-[0.3em] text-bone/40 hover:text-bone/60 transition-colors">
                More
              </summary>
              <div className="mt-3 space-y-2 text-sm text-bone/60">
                {project.details.map((detail) => (
                  <p key={detail} className="font-grotesk leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </details>
          ) : null}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-grotesk text-bone/50 border border-bone/10 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.actions ? (
            <div className="flex flex-wrap gap-3 pt-2 text-xs font-grotesk text-bone/40 uppercase tracking-wider">
              {project.actions.map((action) => (
                <span key={action}>{action}</span>
              ))}
            </div>
          ) : null}

          {project.aura ? (
            <div className="pt-2 font-mono text-xs text-bone/40 uppercase tracking-[0.3em]">
              {project.aura}
            </div>
          ) : null}

          {/* Hover indicator - minimal red accent */}
          <motion.div
            className="h-px bg-accent/30 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 0 }}
            whileHover={{ scaleX: 0.2 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-spacing px-6 md:px-12 lg:px-24 relative grain"
    >
      {/* Section title */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="mb-24 md:mb-32"
      >
        <h2 className="font-distorted text-xs tracking-[0.3em] text-accent mb-4 opacity-60">
          ARCHIVE
        </h2>
        <p className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-bone/90 max-w-4xl leading-tight">
          Live systems and active builds.
          <br />
          <span className="text-bone/40">Operational, pending, or in motion.</span>
        </p>
      </motion.div>

      {/* Projects list */}
      <div className="space-y-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
