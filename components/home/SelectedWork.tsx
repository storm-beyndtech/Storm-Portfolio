import Link from "next/link"
import { flagshipProjects } from "@/content/projects"

export default function SelectedWork() {
  return (
    <section className="section-shell selected-work" id="work" aria-labelledby="selected-work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected systems / 03</p>
          <h2 id="selected-work-title">Proof through systems.</h2>
        </div>
        <p>Three projects. Three forms of uncertainty: financial behavior, route judgment, and human attention.</p>
      </div>

      <div className="project-list">
        {flagshipProjects.map((project) => (
          <article className="project-row" id={project.id} key={project.id}>
            <div className="project-index" aria-hidden="true">{project.index}</div>
            <div className="project-primary">
              <div className="project-kicker">
                <span>{project.category}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <h3>{project.displayName}</h3>
              <p className="project-problem">{project.problem}</p>
              <p className="project-thesis">{project.thesis}</p>
              <div className="project-actions">
                <Link className="text-link" href={project.href}>Read system case study <span aria-hidden="true">↗</span></Link>
                {project.liveUrl ? (
                  <a className="quiet-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                    {project.liveLabel} <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </div>
            <div className="project-evidence">
              <p className="meta-label">Ownership</p>
              <p>{project.ownership}</p>
              <ul>
                {project.proof.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="technology-list" aria-label={`${project.name} technologies`}>
                {project.technologies.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
