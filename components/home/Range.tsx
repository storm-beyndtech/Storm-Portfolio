import Link from "next/link"
import { archiveProjects } from "@/content/projects"

export default function Range() {
  return (
    <section className="section-shell range-section" aria-labelledby="range-title">
      <div className="range-copy">
        <p className="eyebrow">Range / archive</p>
        <h2 id="range-title">Different systems. Same care.</h2>
        <p>Commerce operations, music infrastructure, education products, writing, and visual work live here without competing with the flagship story.</p>
        <div className="inline-actions">
          <Link className="text-link" href="/work">View work archive <span aria-hidden="true">↗</span></Link>
          <Link className="quiet-link" href="/elsewhere">Enter elsewhere <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="range-list">
        {archiveProjects.map((project, index) => (
          <div key={project.id}>
            <span>0{index + 1}</span>
            <strong>{project.name}</strong>
            <small>{project.type}</small>
          </div>
        ))}
      </div>
    </section>
  )
}
