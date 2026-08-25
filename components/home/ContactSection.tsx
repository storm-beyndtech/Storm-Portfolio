import { profile } from "@/content/profile"

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-grid">
        <div>
          <p className="eyebrow">Open channel</p>
          <h2 id="contact-title">Building something where trust matters?</h2>
        </div>
        <div className="contact-copy">
          <p>I’m available for select remote engineering, product systems, and founding-team roles.</p>
          <a className="primary-button" href={`mailto:${profile.email}`}>Email Victor <span aria-hidden="true">↗</span></a>
          <div className="contact-links">
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>
            <a href={profile.links.behance} target="_blank" rel="noreferrer">Behance</a>
            <a href={profile.links.x} target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
      </div>
    </section>
  )
}
