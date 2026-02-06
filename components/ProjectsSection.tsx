'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    id: '000',
    title: 'Bleenk',
    type: 'Active System',
    year: '2026',
    status: 'In progress',
    description: 'Ongoing system with real constraints. Built to sustain attention without exploiting it.',
    tags: ['System Design', 'Operational UX', 'Constraint-Led'],
    details: [
      'Constraint-driven system design with measurable tradeoffs.',
      'Quiet UI states that reduce cognitive load.',
      'Operational insights surfaced without aggressive prompts.',
    ],
  },
  {
    id: '000B',
    title: 'Nakupenda',
    type: 'Design Exploration',
    year: '2026',
    status: 'In progress',
    description:
      'An exploration of emotional presence in digital interaction. Focused on calm, intimacy, and restraint rather than engagement metrics.',
    tags: ['Emotional UI', 'Typography-Led', 'Mood Theming', 'Narrative Interaction'],
    actions: ['Design process (Behance / Figma)', 'Notes (future)'],
    details: [
      'Conceptual system framing, not a shipped product.',
      'Typography-led hierarchy with ambient rhythm.',
      'Interaction tuned for restraint over response.',
    ],
  },
  {
    id: '001',
    title: 'Vesper Protocol',
    type: 'Design System',
    year: '2025',
    description: 'Modular interface architecture for surveillance platforms. Typography as control mechanism.',
    tags: ['Interface Design', 'Motion System', 'Dark Patterns'],
    url: '#', // Replace with actual project URL
    details: [
      'Tokenized layout and motion primitives.',
      'High-contrast data states for long-duration use.',
      'Guardrails for behavioral manipulation avoidance.',
    ],
  },
  {
    id: '002',
    title: 'The Listening',
    type: 'Product Engineering',
    year: '2024',
    description: 'Real-time audio processing infrastructure. Built for continuous monitoring, optimized for silence detection.',
    tags: ['React', 'WebAudio API', 'Node.js'],
    url: '#', // Replace with actual project URL
    details: [
      'Low-latency streaming pipeline.',
      'Silence-first heuristics to reduce noise.',
      'Edge-safe performance budget.',
    ],
  },
  {
    id: '003',
    title: 'Signal/Noise',
    type: 'Experimental Interface',
    year: '2024',
    description: 'Data visualization for pattern recognition. Transforms chaos into legible threat.',
    tags: ['Three.js', 'WebGL', 'Generative Systems'],
    url: '#', // Replace with actual project URL
    details: [
      'Procedural topology for shifting datasets.',
      'Sparse annotation system for cognitive focus.',
      'Motion tuned to prevent fatigue.',
    ],
  },
  {
    id: '004',
    title: 'Sleep Registry',
    type: 'Full Stack Application',
    year: '2023',
    description: 'Dream logging system with temporal analysis. Memory as evidence. Rest as vulnerability.',
    tags: ['Next.js', 'PostgreSQL', 'Encryption'],
    url: '#', // Replace with actual project URL
    details: [
      'Encrypted journaling and temporal tagging.',
      'Ambient recall prompts without pressure.',
      'Exportable timelines for pattern review.',
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
                <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-bone group-hover:text-bone/90 transition-colors duration-500">
                  {project.title}
                </h3>
              </motion.a>
            ) : (
              <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-bone/90">
                {project.title}
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
          Selected works.
          <br />
          <span className="text-bone/40">Each designed to observe.</span>
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
