'use client'

import { motion } from 'framer-motion'

const actions = [
  {
    label: 'Behance',
    href: process.env.NEXT_PUBLIC_BEHANCE_URL || 'https://behance.net',
    description: 'Visual archive',
  },
  {
    label: 'GitHub',
    href: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com',
    description: 'Code repository',
  },
  {
    label: 'Writing',
    href: process.env.NEXT_PUBLIC_BLOG_URL || '#',
    description: 'Horror fiction',
  },
  {
    label: 'Contact',
    href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@example.com'}`,
    description: 'Encrypted channel',
  },
]

export default function QuickActions() {
  return (
    <section className="section-spacing px-6 md:px-12 lg:px-24 relative grain">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-distorted text-xs tracking-[0.3em] text-accent mb-4 opacity-60">
            CHANNELS
          </h2>
          <p className="font-serif text-2xl md:text-3xl tracking-tight text-bone/60">
            Points of contact. Use with intention.
          </p>
        </div>

        {/* Actions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {actions.map((action, index) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              whileHover={{ x: 4 }}
              className="group relative p-8 md:p-10 glass border border-bone/10 hover:border-bone/20 transition-all duration-500"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-accent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-bone group-hover:text-accent transition-colors duration-500">
                    {action.label}
                  </h3>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="font-grotesk text-sm text-bone/40"
                  >
                    →
                  </motion.span>
                </div>

                <p className="font-grotesk text-sm text-bone/50">
                  {action.description}
                </p>
              </div>

              {/* Hover line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-accent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
