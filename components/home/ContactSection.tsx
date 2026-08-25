import Link from "next/link"
import SocialLinks from "@/components/site/SocialLinks"

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
          <Link className="primary-button" href="/contact?intent=project">Start a conversation <span aria-hidden="true">↗</span></Link>
          <SocialLinks compact />
        </div>
      </div>
    </section>
  )
}
