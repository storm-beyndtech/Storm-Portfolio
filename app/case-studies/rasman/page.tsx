'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RasmanCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-bone relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
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
            MUSIC PORTFOLIO
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-bone/90 mt-4">
            Rasman
          </h1>
          <p className="font-grotesk text-lg md:text-xl text-bone/60 mt-6 max-w-3xl">
            A harmonic interface system that balances audio presence with visual restraint.
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
              Rasman treats music as a living signal. The layout breathes, the
              rhythm is paced, and the interface holds silence as much as sound.
            </p>
            <ul className="space-y-2 text-sm text-bone/50 font-grotesk">
              <li>Audio-led layout hierarchy.</li>
              <li>Motion tuned to breath cycles.</li>
              <li>Ambient textures instead of hard UI frames.</li>
            </ul>
          </div>
          <div className="border border-bone/10 bg-ink/40">
            <video
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
              poster="/case-studies/rasman/Rasman-hero.jpg"
            >
              <source src="/case-studies/rasman/rasman-ambient-1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-24 relative">
        <h2 className="font-serif text-2xl md:text-3xl text-bone/90 mb-6">
          Interface Frames
        </h2>
        <div className="border border-bone/10 bg-ink/40">
          <video
            className="w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
            poster="/case-studies/rasman/Rasman-ui.jpg"
          >
            <source src="/case-studies/rasman/rasman-ambient-1.mp4" type="video/mp4" />
          </video>
          <div className="p-3 text-xs font-grotesk text-bone/50 uppercase tracking-wider">
            Interface Frame
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-4xl border-t border-bone/10 pt-8">
          <h3 className="font-serif text-xl text-bone/80">External Archive</h3>
          <p className="font-grotesk text-sm text-bone/50 mt-2">
            Full release at the live site.
          </p>
          <a
            href="https://www.rasmanpeter.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 font-grotesk text-xs uppercase tracking-[0.3em] text-bone/60 hover:text-bone"
          >
            Visit Rasman
          </a>
        </div>
      </section>
    </main>
  )
}
