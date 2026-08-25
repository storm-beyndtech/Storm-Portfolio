import type { Metadata } from "next"
import Link from "next/link"
import { archiveProjects, flagshipProjects } from "@/content/projects"

export const metadata: Metadata = {
  title: "Selected work",
  description: "Selected systems and product work by Victor Nwachukwu across behavioral intelligence, financial infrastructure, and social product systems.",
  alternates: { canonical: "/work" },
}
export default function WorkPage() {
  return (
    <main id="main-content" className="page-shell work-page">
      <header className="page-intro">
        <p className="eyebrow">Work / index</p>
        <h1>Systems built to make the next decision better.</h1>
        <p>Flagship case studies lead. Earlier product work remains available as range, not as equal-weight proof.</p>
      </header>

      <section className="work-index" aria-labelledby="flagship-index-title">
        <h2 id="flagship-index-title" className="visually-hidden">Flagship projects</h2>
        {flagshipProjects.map((project) => (
          <article key={project.id}>
            <span>{project.index}</span>
            <div>
              <p>{project.category} · {project.status}</p>
              <h2>{project.displayName}</h2>
            </div>
            <p>{project.thesis}</p>
            <Link href={project.href} aria-label={`Read ${project.name} case study`}>Open case study <span aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </section>

      <section className="archive-index" id="archive" aria-labelledby="archive-title">
        <div className="section-heading compact-heading">
          <div>
            <p className="eyebrow">Archive / range</p>
            <h2 id="archive-title">Earlier product work.</h2>
          </div>
          <p>Retained for breadth. Claims in older systems are intentionally kept modest until their source repositories are re-audited.</p>
        </div>
        <div className="archive-table">
          {archiveProjects.map((project, index) => (
            <div id={project.id} key={project.id}>
              <span>0{index + 1}</span>
              <strong>{project.name}</strong>
              <small>{project.type}</small>
              <p>{project.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
