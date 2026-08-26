import type { Metadata } from "next"
import Link from "next/link"
import ArrowIcon from "@/components/site/ArrowIcon"
import { archiveProjects, earlyProjects, flagshipProjects } from "@/content/projects"

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
        <div className="work-tier-heading">
          <p className="eyebrow">Flagship / deep case studies</p>
          <h2 id="flagship-index-title">Production systems and active product work.</h2>
        </div>
        {flagshipProjects.map((project) => (
          <article key={project.id}>
            <span>{project.index}</span>
            <div>
              <p>{project.category} · {project.status}</p>
              <h2>{project.displayName}</h2>
            </div>
            <p>{project.thesis}</p>
            <Link href={project.href} aria-label={`Read ${project.name} case study`}>Open case study <ArrowIcon /></Link>
          </article>
        ))}
      </section>

      <section className="archive-index" id="archive" aria-labelledby="archive-title">
        <div className="section-heading compact-heading">
          <div>
            <p className="eyebrow">Selected archive / short case studies</p>
            <h2 id="archive-title">Earlier systems, source-audited.</h2>
          </div>
          <p>Retained for breadth. Claims stay modest and are tied to behavior verified in the corresponding source repositories.</p>
        </div>
        <div className="archive-table">
          {archiveProjects.map((project, index) => (
            <Link id={project.id} key={project.id} href={project.href}>
              <span>0{index + 1}</span>
              <strong>{project.name}</strong>
              <small>{project.type}</small>
              <p>{project.summary} <ArrowIcon /></p>
            </Link>
          ))}
        </div>
      </section>

      <section className="archive-index early-index" aria-labelledby="early-title">
        <div className="section-heading compact-heading">
          <div>
            <p className="eyebrow">Early exploration</p>
            <h2 id="early-title">Concept work, kept in context.</h2>
          </div>
          <p>Useful as a record of range, not presented as current production proof.</p>
        </div>
        <div className="archive-table archive-table-muted">
          {earlyProjects.map((project, index) => (
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
