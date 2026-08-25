import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"

export const metadata: Metadata = {
  title: "About Victor Nwachukwu",
  description: "About Victor Nwachukwu, a software engineer and product designer working across complex data, product, and decision systems.",
  alternates: { canonical: "/about" },
}
export default function AboutPage() {
  return (
    <main id="main-content" className="page-shell about-page">
      <header className="page-intro">
        <p className="eyebrow">About / Victor Nwachukwu</p>
        <h1>Engineer in the system. Designer at the boundary.</h1>
        <p>I work best where the state is messy, the consequence is real, and the interface has to tell the truth.</p>
      </header>

      <section className="about-grid">
        <div className="about-prose">
          <p>My work crosses backend services, data pipelines, product interfaces, and operating doctrine. I am usually drawn to products where a clean happy path hides the real problem: missing evidence, provider failure, ambiguous identity, conflicting incentives, or complex human state.</p>
          <p>I build across the whole loop when the work requires it. That has meant owning Go workers, Next.js applications, database contracts, API and MCP surfaces, product language, design systems, bot workflows, and the boring operational controls that keep a system credible after launch.</p>
          <p>Writing, music, and visual work remain adjacent practices. They sharpen rhythm, composition, and the instinct to notice when an interface says more than its copy.</p>
        </div>
        <aside className="about-facts" aria-label="Professional facts">
          <div><span>Role</span><strong>{profile.role}</strong></div>
          <div><span>Base</span><strong>{profile.location}</strong></div>
          <div><span>Focus</span><strong>Backend · Product · Data · UX</strong></div>
          <div><span>Status</span><strong>{profile.availability}</strong></div>
        </aside>
      </section>

      <section className="about-cta">
        <p className="eyebrow">Next step</p>
        <h2>Inspect the work, then inspect the résumé.</h2>
        <div className="inline-actions">
          <Link className="primary-button" href="/work">Selected work <span aria-hidden="true">↗</span></Link>
          <a className="secondary-button" href={profile.resume} target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↗</span></a>
          <a className="quiet-link" href={`mailto:${profile.email}`}>Email Victor</a>
        </div>
      </section>
    </main>
  )
}
