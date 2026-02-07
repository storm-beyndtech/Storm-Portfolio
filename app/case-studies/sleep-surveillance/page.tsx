'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SleepSurveillanceCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-bone relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(transparent 92%, rgba(244,244,240,0.08) 100%), linear-gradient(90deg, transparent 92%, rgba(244,244,240,0.08) 100%)',
          backgroundSize: '32px 32px, 32px 32px',
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
            PENDING BUILD
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-bone/90 mt-4">
            Sleep Surveillance
          </h1>
          <p className="font-grotesk text-lg md:text-xl text-bone/60 mt-6 max-w-3xl">
            A system that treats sleep as a monitored signal, not a passive state.
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
              Sleep Surveillance is a consent-first telemetry system that captures
              dream-state drift without turning rest into performance.
            </p>
            <ul className="space-y-2 text-sm text-bone/50 font-grotesk">
              <li>Dream-state indexing with temporal decay.</li>
              <li>Soft alerts without dopamine pressure.</li>
              <li>Memory-safe signal storage and retrieval.</li>
            </ul>
          </div>
          <div className="border border-bone/10 bg-ink/40">
            <img
              src="/signals/Dreamlike Forest Rest.jpg"
              alt="Sleep surveillance trace"
              className="w-full h-[520px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
