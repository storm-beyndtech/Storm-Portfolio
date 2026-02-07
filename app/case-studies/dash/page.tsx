'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const systemHighlights = [
  'Real-time inventory updates under 100ms.',
  'Role-based dashboards with strict permissioning.',
  'Smart USD/NGN currency caching to reduce load.',
  'Automated payment verification with fraud checks.',
]

export default function DashCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-bone relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-12"
        style={{
          backgroundImage:
            'linear-gradient(transparent 92%, rgba(244,244,240,0.08) 100%), linear-gradient(90deg, transparent 92%, rgba(244,244,240,0.08) 100%)',
          backgroundSize: '28px 28px, 28px 28px',
        }}
      />
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-16 relative">
        <Link
          href="/"
          className="inline-block font-grotesk text-xs uppercase tracking-[0.3em] text-bone/50 hover:text-bone transition-colors mb-10"
        >
          ← Back
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="max-w-5xl"
        >
          <p className="font-distorted text-xs tracking-[0.4em] text-bone/40">
            REAL-TIME PLATFORM
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-bone/90 mt-4">
            Dash NG Shop
          </h1>
          <p className="font-grotesk text-lg md:text-xl text-bone/60 mt-6 max-w-3xl">
            A multi-role e-commerce command system engineered for real-time certainty.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl text-bone/90">
              System Overview
            </h2>
            <p className="font-grotesk text-bone/60 leading-relaxed">
              Dash NG Shop removes ambiguity from inventory, payments, and staff
              coordination. Every state is visible in real-time, every role has
              a defined surface, and every action broadcasts immediately.
            </p>
            <ul className="space-y-2 text-sm text-bone/50 font-grotesk">
              {systemHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-bone/10 bg-ink/40 p-6">
            <div className="h-56 md:h-64 border border-bone/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.2, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  backgroundImage:
                    'linear-gradient(transparent 92%, rgba(244,244,240,0.08) 100%), linear-gradient(90deg, transparent 92%, rgba(244,244,240,0.08) 100%)',
                  backgroundSize: '24px 24px, 24px 24px',
                }}
              />
              <motion.div
                className="absolute left-0 right-0 h-px bg-accent/40"
                animate={{ y: ['10%', '90%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-6 border border-bone/20" />
              <div className="absolute bottom-4 left-4 text-xs font-grotesk text-bone/40 uppercase tracking-[0.3em]">
                Live Inventory Bus
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-24 relative">
        <div className="max-w-4xl border-t border-bone/10 pt-8">
          <h3 className="font-serif text-xl text-bone/80">External Archive</h3>
          <p className="font-grotesk text-sm text-bone/50 mt-2">
            Live deployment and commerce stack.
          </p>
          <a
            href="https://www.dashshops.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 font-grotesk text-xs uppercase tracking-[0.3em] text-bone/60 hover:text-bone"
          >
            Visit Dash
          </a>
        </div>
      </section>
    </main>
  )
}
