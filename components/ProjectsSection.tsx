'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    id: '001',
    title: 'Vesper Protocol',
    type: 'Design System',
    year: '2025',
    description: 'Modular interface architecture for surveillance platforms. Typography as control mechanism.',
    tags: ['Interface Design', 'Motion System', 'Dark Patterns'],
    url: '#', // Replace with actual project URL
  },
  {
    id: '002',
    title: 'The Listening',
    type: 'Product Engineering',
    year: '2024',
    description: 'Real-time audio processing infrastructure. Built for continuous monitoring, optimized for silence detection.',
    tags: ['React', 'WebAudio API', 'Node.js'],
    url: '#', // Replace with actual project URL
  },
  {
    id: '003',
    title: 'Signal/Noise',
    type: 'Experimental Interface',
    year: '2024',
    description: 'Data visualization for pattern recognition. Transforms chaos into legible threat.',
    tags: ['Three.js', 'WebGL', 'Generative Systems'],
    url: '#', // Replace with actual project URL
  },
  {
    id: '004',
    title: 'Sleep Registry',
    type: 'Full Stack Application',
    year: '2023',
    description: 'Dream logging system with temporal analysis. Memory as evidence. Rest as vulnerability.',
    tags: ['Next.js', 'PostgreSQL', 'Encryption'],
    url: '#', // Replace with actual project URL
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
            <div className="flex items-center gap-4 text-sm text-bone/50">
              <span className="font-grotesk">{project.type}</span>
              <span className="w-1 h-1 bg-bone/30 rounded-full" />
              <span className="font-grotesk">{project.year}</span>
            </div>
          </div>

          {/* Description */}
          <p className="font-grotesk text-base md:text-lg text-bone/70 max-w-2xl leading-relaxed">
            {project.description}
          </p>

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
