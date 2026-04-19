'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
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
  feature?: {
    label: string
    caption: string
    images: {
      src: string
      alt: string
    }[]
  }
}

const projects: Project[] = [
  {
    id: '001',
    title: 'RugBurn',
    type: 'Live Risk Intelligence',
    year: '2026',
    status: 'Live',
    symbol: 'eye',
    aura: 'Aura: Mint evidence / Holder pressure / Agent guardrail',
    description:
      'Solana-native token-risk intelligence for traders, communities, developers, and agentic workflows.',
    tags: ['Solana', 'Risk Intelligence', 'API/MCP', 'Telegram'],
    url: '/case-studies/rugburn',
    details: [
      'Evidence-first scans expose liquidity, authority, holders, deployers, market stress, and confidence.',
      'Hard caps prevent false safety when concentration, maturity, or missing evidence makes a token structurally unsafe.',
      'Dashboard, API, Telegram, Discord, MCP, admin control, quota tracking, and calibration live around the scanner.',
    ],
    actions: ['Read case study', 'Live product surface', 'Built end to end'],
    feature: {
      label: 'Campaign evidence',
      caption: 'Flyers as launch artifacts, not decoration.',
      images: [
        {
          src: '/case-studies/rugburn/rugburn flyer.jpg',
          alt: 'RugBurn campaign banner with Solana token-risk intelligence messaging',
        },
        {
          src: '/case-studies/rugburn/rugburn flyer 3.jpg',
          alt: 'RugBurn product flyer focused on token safety intelligence',
        },
        {
          src: '/case-studies/rugburn/rugburn flyer 4.jpg',
          alt: 'RugBurn campaign flyer showing the live product identity',
        },
      ],
    },
  },
  {
    id: '002',
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
    id: '003',
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
    id: '004',
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
    id: '005',
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
    id: '006',
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
    id: '007',
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
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
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

          {project.feature ? (
            <div className="max-w-5xl pt-3">
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <p className="font-grotesk text-xs uppercase tracking-[0.3em] text-accent/80">
                  {project.feature.label}
                </p>
                <p className="font-grotesk text-xs text-bone/40">
                  {project.feature.caption}
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.35fr_0.65fr]">
                <a
                  href={project.url}
                  className="group/media relative block aspect-[16/9] overflow-hidden border border-bone/10 bg-charcoal/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                  aria-label={`Open ${project.title} case study`}
                >
                  <Image
                    src={project.feature.images[0].src}
                    alt={project.feature.images[0].alt}
                    width={4800}
                    height={2700}
                    loading="eager"
                    sizes="(min-width: 768px) 58vw, 88vw"
                    className="h-full w-full object-cover opacity-80 transition duration-500 group-hover/media:scale-[1.02] group-hover/media:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/70">
                    Live scan dossier
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                  {project.feature.images.slice(1).map((image, imageIndex) => (
                    <a
                      key={image.src}
                      href={project.url}
                      className="group/media relative block aspect-[16/9] overflow-hidden border border-bone/10 bg-charcoal/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                      aria-label={`Open ${project.title} case study artifact ${imageIndex + 2}`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={4800}
                        height={2700}
                        sizes="(min-width: 768px) 26vw, 44vw"
                        className="h-full w-full object-cover opacity-70 transition duration-500 group-hover/media:scale-[1.03] group-hover/media:opacity-100"
                      />
                      <div className="absolute inset-0 bg-ink/10" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {project.details ? (
            <details className="group/details max-w-2xl">
              <summary className="cursor-pointer list-none font-grotesk text-xs uppercase tracking-[0.3em] text-bone/40 transition-colors hover:text-bone/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink">
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
