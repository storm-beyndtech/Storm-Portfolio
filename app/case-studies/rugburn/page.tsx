'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const flyers = [
  {
    src: '/case-studies/rugburn/rugburn flyer.jpg',
    alt: 'RugBurn campaign banner for Solana token-risk intelligence',
    label: 'Launch Banner',
  },
  {
    src: '/case-studies/rugburn/rugburn flyer 3.jpg',
    alt: 'RugBurn campaign flyer focused on token safety intelligence',
    label: 'Risk Surface',
  },
  {
    src: '/case-studies/rugburn/rugburn flyer 4.jpg',
    alt: 'RugBurn campaign flyer showing the product intelligence identity',
    label: 'Signal Variant',
  },
]

const intelligenceRails = [
  'Mint and freeze authority',
  'Sellability and tax pressure',
  'Liquidity depth and venue risk',
  'Top holder concentration',
  'Deployer exposure',
  'Market stress and maturity',
  'Metadata coverage',
  'Hard score caps',
]

const systemFlow = [
  'User, bot, API client, or MCP client submits a Solana token mint.',
  'Authentication, tier, quota, and rate-limit checks run before expensive work starts.',
  'The Go worker gathers token evidence from market and Solana data providers.',
  'The scoring layer produces facets, hard caps, confidence notes, and final risk level.',
  'Results persist to Supabase for dashboard reads, cached API reads, and calibration review.',
  'Dashboard, Telegram, Discord, API, MCP, and admin surfaces read from the same evidence core.',
]

const shippedSurfaces = [
  'Dashboard scanner with evidence-rich token reports',
  'Wallet-risk surface',
  'API v1 with quotas and scopes',
  'MCP server for agentic clients',
  'Telegram and Discord scan workflows',
  'Admin subscription and usage controls',
  'Queued email infrastructure',
  'Birdeye-enriched scan path',
]

const metrics = [
  { label: 'v3.2.2 accuracy', shortLabel: 'v3.2.2', value: '90.4%' },
  { label: 'v3.3 shadow accuracy', shortLabel: 'v3.3 shadow', value: '90.9%' },
  { label: 'Calibration samples', shortLabel: 'samples', value: '177' },
  { label: 'Known failed tokens', shortLabel: 'failed tokens', value: '16' },
]

const roles = [
  'Product strategy',
  'Risk scoring doctrine',
  'Backend architecture',
  'Frontend implementation',
  'API and MCP design',
  'Admin operations',
]

export default function RugburnCaseStudy() {
  const reveal = { opacity: 1, y: 0 }
  const initial = { opacity: 0, y: 22 }
  const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] as const }

  return (
    <main className="min-h-screen bg-black text-bone relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(transparent 92%, rgba(244,244,240,0.08) 100%), linear-gradient(90deg, transparent 92%, rgba(244,244,240,0.08) 100%)',
          backgroundSize: '28px 28px, 28px 28px',
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-[520px] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(139,0,0,0.18) 0%, rgba(10,10,10,0) 76%)',
        }}
      />

      <section className="relative px-6 md:px-12 lg:px-24 pt-16 pb-16">
        <Link
          href="/"
          className="inline-flex min-h-10 items-center font-grotesk text-xs uppercase tracking-[0.3em] text-bone/60 transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
        >
          &lt;- Back
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div initial={initial} animate={reveal} transition={transition} className="max-w-4xl">
            <p className="font-distorted text-xs uppercase tracking-[0.4em] text-accent/80">
              Live Solana Risk Intelligence
            </p>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-bone">
              RugBurn
            </h1>
            <p className="mt-6 max-w-3xl font-grotesk text-lg md:text-xl leading-relaxed text-bone/70">
              Before a mint becomes a position, RugBurn asks what the chain already knows.
              It turns fragmented Solana token signals into evidence a trader, group,
              builder, or agent can act on.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://rugburn.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 border border-accent/60 bg-accent/20 px-5 py-2 font-grotesk text-xs uppercase tracking-[0.22em] text-bone transition-colors hover:bg-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" aria-hidden />
                View live — rugburn.io
              </a>
              <a
                href="#evidence"
                className="inline-flex min-h-10 items-center border border-bone/15 px-5 py-2 font-grotesk text-xs uppercase tracking-[0.22em] text-bone/70 transition-colors hover:border-bone/30 hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
              >
                Read evidence
              </a>
              <a
                href="#campaign"
                className="inline-flex min-h-10 items-center border border-bone/10 px-5 py-2 font-grotesk text-xs uppercase tracking-[0.22em] text-bone/60 transition-colors hover:border-bone/25 hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
              >
                View campaign
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={initial}
            animate={reveal}
            transition={{ ...transition, delay: 0.12 }}
            className="relative"
          >
            <div className="relative aspect-[16/9] overflow-hidden border border-bone/10 bg-charcoal/50">
              <Image
                src={flyers[0].src}
                alt={flyers[0].alt}
                width={4800}
                height={2700}
                loading="eager"
                sizes="(min-width: 1024px) 50vw, 88vw"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 sm:bottom-4 sm:left-4 sm:right-4 sm:gap-3">
                {metrics.slice(0, 3).map((metric) => (
                  <div key={metric.label} className="border border-bone/10 bg-ink/70 p-2 backdrop-blur-sm sm:p-3">
                    <p className="font-mono text-sm text-bone sm:text-lg">{metric.value}</p>
                    <p className="mt-1 font-grotesk text-[9px] uppercase leading-tight tracking-[0.16em] text-bone/50 sm:text-[11px] sm:tracking-[0.2em]">
                      {metric.shortLabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {flyers.slice(1).map((flyer) => (
                <div key={flyer.src} className="aspect-[16/9] overflow-hidden border border-bone/10 bg-charcoal/40">
                  <Image
                    src={flyer.src}
                    alt={flyer.alt}
                    width={4800}
                    height={2700}
                    sizes="(min-width: 1024px) 24vw, 44vw"
                    className="h-full w-full object-cover opacity-75"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 md:px-12 lg:px-24 pb-20">
        <div className="grid gap-4 border-y border-bone/10 py-6 md:grid-cols-3">
          <div>
            <p className="font-grotesk text-xs uppercase tracking-[0.3em] text-bone/40">Role</p>
            <p className="mt-2 font-grotesk text-sm leading-relaxed text-bone/60">
              Strategy, scoring, architecture, frontend, backend, API, bots, admin, launch.
            </p>
          </div>
          <div>
            <p className="font-grotesk text-xs uppercase tracking-[0.3em] text-bone/40">Stack</p>
            <p className="mt-2 font-grotesk text-sm leading-relaxed text-bone/60">
              Next.js, React, Go, Supabase, Better Auth, Birdeye, Helius, Telegram, Discord, MCP.
            </p>
          </div>
          <div>
            <p className="font-grotesk text-xs uppercase tracking-[0.3em] text-bone/40">Status</p>
            <p className="mt-2 font-grotesk text-sm leading-relaxed text-bone/60">
              Live product. Evidence-first scanner. Public claims kept honest while calibration matures.
            </p>
          </div>
        </div>
      </section>

      <section id="evidence" className="relative px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-xl">
            <p className="font-distorted text-xs uppercase tracking-[0.35em] text-accent/75">
              Intelligence Doctrine
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-bone/90">
              Evidence before confidence.
            </h2>
            <p className="mt-6 font-grotesk leading-relaxed text-bone/60">
              RugBurn does not hand users a naked score and ask for trust. It shows the
              pressure points: who can still change the token, where liquidity sits,
              how holders are distributed, whether the market is old enough to read,
              and when missing evidence should lower confidence.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {intelligenceRails.map((rail, index) => (
              <div key={rail} className="border border-bone/10 bg-charcoal/30 p-5">
                <p className="font-mono text-xs text-accent/75">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-4 font-grotesk text-sm leading-relaxed text-bone/70">{rail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="border border-bone/10 bg-ink/50 p-6 md:p-8">
            <h2 className="font-serif text-2xl md:text-4xl text-bone/90">
              The problem was speed.
            </h2>
            <p className="mt-5 font-grotesk leading-relaxed text-bone/60">
              Solana token decisions move faster than manual investigation. Traders
              jump between tools, moderators see suspicious mints before context is
              gathered, and agentic trading systems are starting to automate decisions
              without a reliable risk gate.
            </p>
            <p className="mt-5 font-grotesk leading-relaxed text-bone/60">
              RugBurn answers the moment before action: paste the mint, expose the
              evidence, cap false confidence, and make the next move harder to fake.
            </p>
          </div>

          <div className="border border-accent/25 bg-accent/10 p-6 md:p-8">
            <h2 className="font-serif text-2xl md:text-4xl text-bone/90">
              The product had to stay honest.
            </h2>
            <p className="mt-5 font-grotesk leading-relaxed text-bone/60">
              New-token data is incomplete by nature. Provider credits are real.
              Accuracy can hide weak failed-token separation. Public language cannot
              pretend the system is financial advice or complete AML coverage.
            </p>
            <p className="mt-5 font-grotesk leading-relaxed text-bone/60">
              The product language became stricter: risk evidence, workflow guardrails,
              confidence notes, and calibration truth.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-12 lg:px-24 pb-24">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-distorted text-xs uppercase tracking-[0.35em] text-accent/75">
              System Flow
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-bone/90">
              One evidence core. Many surfaces.
            </h2>
          </div>
          <p className="max-w-md font-grotesk text-sm leading-relaxed text-bone/50">
            Dashboard, bots, API, MCP, and admin tooling stay useful because they draw
            from the same scan doctrine.
          </p>
        </div>

        <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {systemFlow.map((step, index) => (
            <li key={step} className="min-h-40 border border-bone/10 bg-charcoal/20 p-5">
              <p className="font-mono text-xs text-accent/80">{String(index + 1).padStart(2, '0')}</p>
              <p className="mt-6 font-grotesk text-sm leading-relaxed text-bone/70">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="campaign" className="relative px-6 md:px-12 lg:px-24 pb-24">
        <div className="mb-8 max-w-3xl">
          <p className="font-distorted text-xs uppercase tracking-[0.35em] text-accent/75">
            Campaign Artifacts
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-bone/90">
            Flyers built like field intelligence.
          </h2>
          <p className="mt-5 font-grotesk leading-relaxed text-bone/60">
            The launch banners carry the product mood: heat, warning, and restraint.
            They make RugBurn feel active without turning the scanner into spectacle.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <figure className="overflow-hidden border border-bone/10 bg-charcoal/40">
            <Image
              src={flyers[0].src}
              alt={flyers[0].alt}
              width={4800}
              height={2700}
              loading="eager"
              sizes="(min-width: 1024px) 60vw, 88vw"
              className="h-full w-full object-cover"
            />
            <figcaption className="border-t border-bone/10 px-4 py-3 font-grotesk text-xs uppercase tracking-[0.25em] text-bone/50">
              {flyers[0].label}
            </figcaption>
          </figure>

          <div className="grid gap-4">
            {flyers.slice(1).map((flyer) => (
              <figure key={flyer.src} className="overflow-hidden border border-bone/10 bg-charcoal/40">
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  width={4800}
                  height={2700}
                  sizes="(min-width: 1024px) 35vw, 88vw"
                  className="h-full w-full object-cover"
                />
                <figcaption className="border-t border-bone/10 px-4 py-3 font-grotesk text-xs uppercase tracking-[0.25em] text-bone/50">
                  {flyer.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-distorted text-xs uppercase tracking-[0.35em] text-accent/75">
              Shipped Work
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-bone/90">
              Built as a product, not a demo.
            </h2>
            <p className="mt-6 font-grotesk leading-relaxed text-bone/60">
              RugBurn includes the operating system around the scanner: subscriptions,
              quotas, admin controls, API access, bot workflows, calibration review,
              provider-cost discipline, and launch strategy.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {shippedSurfaces.map((surface) => (
              <div key={surface} className="border border-bone/10 bg-charcoal/20 p-5">
                <p className="font-grotesk text-sm leading-relaxed text-bone/70">{surface}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-12 lg:px-24 pb-24">
        <div className="border-y border-bone/10 py-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-distorted text-xs uppercase tracking-[0.35em] text-accent/75">
                Calibration Truth
              </p>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl text-bone/90">
                The score is not allowed to lie.
              </h2>
              <p className="mt-6 font-grotesk leading-relaxed text-bone/60">
                A calibration snapshot showed strong overall accuracy, but weak failed-token
                separation. That changed the product posture: do not market perfect rug
                prediction. Market evidence, confidence, and pre-action guardrails.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="border border-bone/10 bg-charcoal/30 p-6">
                  <p className="font-mono text-3xl text-bone">{metric.value}</p>
                  <p className="mt-3 font-grotesk text-xs uppercase tracking-[0.22em] text-bone/50">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-distorted text-xs uppercase tracking-[0.35em] text-accent/75">
              My Role
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-bone/90">
              End to end ownership.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {roles.map((role) => (
              <div key={role} className="border border-bone/10 bg-charcoal/20 p-5">
                <p className="font-grotesk text-sm text-bone/70">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative px-6 md:px-12 lg:px-24 pb-16">
        <div className="border-t border-bone/10 pt-8">
          <p className="font-serif text-2xl md:text-4xl text-bone/80">
            RugBurn exposes token-risk evidence before you, your group, or your agent acts.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-10 items-center font-grotesk text-xs uppercase tracking-[0.3em] text-bone/60 transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          >
            &lt;- Return to archive
          </Link>
        </div>
      </footer>
    </main>
  )
}
