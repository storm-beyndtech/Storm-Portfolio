'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BleenkCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-bone relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
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
            ACTIVE SYSTEM
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-bone/90 mt-4">
            Bleenk
          </h1>
          <p className="font-grotesk text-lg md:text-xl text-bone/60 mt-6 max-w-3xl">
            Instant payment validation through a blink-state signal. Trust is verified
            before it’s asked for.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl text-bone/90">
              System Intent
            </h2>
            <p className="font-grotesk text-bone/60 leading-relaxed">
              Bleenk treats payment trust as a living state. It compresses verification,
              settlement, and confirmation into a single blink signal.
            </p>
            <ul className="space-y-2 text-sm text-bone/50 font-grotesk">
              <li>Instant payment verification with global latency awareness.</li>
              <li>Trust states degrade gracefully instead of failing hard.</li>
              <li>Quiet escalation paths for sensitive transactions.</li>
            </ul>
          </div>
          <div className="border border-bone/10 bg-ink/40 p-6">
            <div className="relative h-56 md:h-64 border border-bone/10 overflow-hidden">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg width="160" height="80" viewBox="0 0 160 80" fill="none">
                  <motion.path
                    d="M10 40 C 30 15, 60 5, 80 5 C 100 5, 130 15, 150 40 C 130 65, 100 75, 80 75 C 60 75, 30 65, 10 40 Z"
                    stroke="rgba(244,244,240,0.5)"
                    strokeWidth="2"
                    animate={{ opacity: [0.4, 1, 0.5] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    cx="80"
                    cy="40"
                    r="10"
                    fill="rgba(139,0,0,0.6)"
                    animate={{ r: [8, 12, 8], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </svg>
              </motion.div>
              <div className="absolute bottom-4 left-4 text-xs font-grotesk text-bone/40 uppercase tracking-[0.3em]">
                Blink Signal
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
