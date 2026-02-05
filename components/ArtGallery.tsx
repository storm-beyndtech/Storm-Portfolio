'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const artworks = [
  {
    id: 1,
    title: 'Observation Protocol',
    src: '/art/art-1.jpg',
    alt: 'Abstract surveillance visualization',
    year: '2025',
  },
  {
    id: 2,
    title: 'Sleep Registry Entry 047',
    src: '/art/art-2.jpg',
    alt: 'Dream monitoring interface',
    year: '2024',
  },
  {
    id: 3,
    title: 'The Listening Device',
    src: '/art/art-3.jpg',
    alt: 'Audio surveillance mechanism',
    year: '2024',
  },
  {
    id: 4,
    title: 'System Memory',
    src: '/art/art-4.jpg',
    alt: 'Data retention visualization',
    year: '2025',
  },
  {
    id: 5,
    title: 'Control Surface',
    src: '/art/art-5.jpg',
    alt: 'Interface manipulation study',
    year: '2023',
  },
  {
    id: 6,
    title: 'Signal Decay',
    src: '/art/art-6.jpg',
    alt: 'Communication breakdown',
    year: '2024',
  },
]

function ArtworkCard({ artwork, index }: { artwork: typeof artworks[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [100 + index * 20, 0, -100 - index * 20]
  )
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  // Staggered positions - create alienated, floating layout
  const positions = [
    'col-span-5 row-span-2 mt-0',
    'col-span-4 row-span-1 mt-32',
    'col-span-3 row-span-2 -mt-16',
    'col-span-6 row-span-1 mt-48',
    'col-span-4 row-span-2 -mt-24',
    'col-span-5 row-span-1 mt-16',
  ]

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className={`relative ${positions[index % positions.length]} group cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative w-full aspect-[4/5] overflow-hidden glass-heavy">
        {/* Placeholder for actual images */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-ink to-charcoal flex items-center justify-center">
          <span className="font-distorted text-6xl text-bone/10">{artwork.id}</span>
        </div>

        {/* Uncomment when you add actual images to /public/art/ */}
        {/* <Image
          src={artwork.src}
          alt={artwork.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        /> */}

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-accent/20 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="text-center space-y-2 px-6">
            <h3 className="font-serif text-2xl md:text-3xl text-bone tracking-tight">
              {artwork.title}
            </h3>
            <p className="font-grotesk text-sm text-bone/60">{artwork.year}</p>
          </div>
        </motion.div>

        {/* Corner markers */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-bone/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-bone/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
      </div>

      {/* Floating label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="mt-4 space-y-1"
      >
        <p className="font-grotesk text-xs text-accent opacity-60 tracking-wider">
          {String(artwork.id).padStart(3, '0')}
        </p>
        <h4 className="font-serif text-lg text-bone/80 tracking-tight">
          {artwork.title}
        </h4>
      </motion.div>

      {/* Subtle connection line */}
      <motion.div
        className="absolute -bottom-8 left-1/2 w-px h-8 bg-bone/10 origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
      />
    </motion.div>
  )
}

export default function ArtGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-spacing px-6 md:px-12 lg:px-24 relative grain overflow-hidden"
    >
      {/* Background layered elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bone rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Section title */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mb-24 md:mb-32"
        >
          <h2 className="font-distorted text-xs tracking-[0.3em] text-accent mb-4 opacity-60">
            VISUAL ARCHIVE
          </h2>
          <p className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-bone/90 max-w-4xl leading-tight">
            Art as evidence.
            <br />
            <span className="text-bone/40">Each piece observed, catalogued, preserved.</span>
          </p>
        </motion.div>

        {/* Alienated grid layout */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 auto-rows-auto">
          {artworks.map((artwork, index) => (
            <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
          ))}
        </div>

        {/* Bottom fade */}
        <div className="h-32 bg-gradient-to-t from-ink to-transparent mt-16" />
      </div>
    </section>
  )
}
