import { principles } from "@/content/projects"

export default function Principles() {
  return (
    <section className="section-shell principles" id="approach" aria-labelledby="principles-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">How I think</p>
          <h2 id="principles-title">Operating principles.</h2>
        </div>
        <p>The repeated decisions behind the work, from data collection to interface hierarchy.</p>
      </div>
      <div className="principle-grid">
        {principles.map((principle) => (
          <article key={principle.index}>
            <span>{principle.index}</span>
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
