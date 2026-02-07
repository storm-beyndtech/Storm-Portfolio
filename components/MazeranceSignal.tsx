'use client'

import { motion } from 'framer-motion'

export default function MazeranceSignal() {
  return (
    <section
      id="internship"
      className="section-spacing px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(transparent 92%, rgba(244,244,240,0.08) 100%), linear-gradient(90deg, transparent 92%, rgba(244,244,240,0.08) 100%), radial-gradient(circle at 1px 1px, rgba(244,244,240,0.3) 1px, transparent 0)',
          backgroundSize: '26px 26px, 26px 26px, 46px 46px',
        }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
        animate={{ opacity: [0.15, 0.35, 0.2], scale: [0.9, 1.05, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-bone/10 blur-3xl"
        animate={{ opacity: [0.1, 0.25, 0.15], scale: [0.95, 1.08, 0.97] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.18, 0.45, 0.25], scale: [0.94, 1.05, 0.98] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(139,0,0,0.35) 0%, transparent 65%)',
        }}
      />
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-96 h-96">
          {[
            { d: 3.6, delay: 0 },
            { d: 4.4, delay: 0.8 },
            { d: 5.2, delay: 1.6 },
          ].map((pulse) => (
            <motion.div
              key={pulse.delay}
              className="absolute inset-0 rounded-full border border-accent/30"
              animate={{ scale: [0.1, 1.15], opacity: [0.6, 0] }}
              transition={{
                duration: pulse.d,
                repeat: Infinity,
                ease: 'easeOut',
                delay: pulse.delay,
              }}
              style={{
                boxShadow: '0 0 40px rgba(139,0,0,0.35)',
              }}
            />
          ))}
          <motion.div
            className="absolute inset-0 rounded-full hidden md:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            style={{
              background:
                'conic-gradient(from 0deg, rgba(139,0,0,0.0), rgba(139,0,0,0.22), rgba(139,0,0,0.0))',
              maskImage: 'radial-gradient(circle, transparent 45%, black 46%, black 100%)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div className="space-y-6">
          <p className="font-distorted text-xs tracking-[0.4em] text-accent/60">
            OUTBOUND SIGNAL
          </p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-bone/90">
            MAZERANCE
          </h2>
          <p className="font-grotesk text-bone/60 leading-relaxed max-w-2xl">
            I design and engineer systems where interface, narrative, and
            infrastructure meet. I move comfortably across disciplines and ship
            end-to-end — research to design to build, then refine until it holds.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-grotesk text-bone/50 uppercase tracking-[0.3em]">
            <span>System Design</span>
            <span>Frontend Engineering</span>
            <span>Motion & Interaction</span>
          </div>
          <a
            href="https://www.mazerance.com/winter-internship"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 mt-4 px-6 py-3 border border-bone/20 text-xs uppercase tracking-[0.3em] text-bone/70 hover:text-bone hover:border-bone/40 transition-colors"
          >
            Transmit Application Signal
            <span className="text-accent">→</span>
          </a>
        </div>

        <div className="relative border border-bone/10 bg-ink/60 p-6 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: [0.1, 0.35, 0.12] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background:
                'radial-gradient(circle at 30% 40%, rgba(139,0,0,0.2) 0%, transparent 60%)',
            }}
          />
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: [0.08, 0.18, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{
              background:
                'radial-gradient(circle at 70% 60%, rgba(35,160,190,0.15) 0%, transparent 55%)',
            }}
          />
          <div className="relative z-10 space-y-4">
            <div className="text-xs font-grotesk uppercase tracking-[0.3em] text-bone/40">
              Signal Queue
            </div>
            <div className="space-y-3">
            {['Signal Received', 'Track Alignment', 'Proof of Craft', 'Deployment Readiness'].map((item, idx) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-bone/10" />
                  <span className="text-xs font-grotesk text-bone/50 uppercase tracking-[0.3em]">
                    {String(idx + 1).padStart(2, '0')} / {item}
                  </span>
                </div>
              ))}
            </div>
            <motion.div
              className="h-px bg-accent/40"
              animate={{ scaleX: [0.2, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
            />
            <motion.div
              className="absolute right-6 top-6 text-[10px] font-mono text-bone/30 tracking-[0.4em]"
              animate={{ opacity: [0.2, 0.5, 0.25] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              0xA9 / 0x1F
            </motion.div>
            <div className="text-xs font-grotesk text-bone/40 uppercase tracking-[0.3em]">
              Status: Awaiting Transmission
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
