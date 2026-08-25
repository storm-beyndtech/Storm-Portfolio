import ContactSection from "@/components/home/ContactSection"
import EvidenceRail from "@/components/home/EvidenceRail"
import HeroPanel from "@/components/home/HeroPanel"
import Principles from "@/components/home/Principles"
import Range from "@/components/home/Range"
import SelectedWork from "@/components/home/SelectedWork"
import SocialLinks from "@/components/site/SocialLinks"
import { profile } from "@/content/profile"

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Software engineer · Product designer</p>
          <h1 id="hero-title">Building high-trust systems under uncertainty.</h1>
          <p className="hero-description">{profile.description}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">See proof of work <span aria-hidden="true">↓</span></a>
            <a className="secondary-button" href={profile.resume} target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-connect">
            <SocialLinks channels={["github", "x"]} />
            <p className="availability"><span aria-hidden="true" />{profile.availability}</p>
          </div>
        </div>
        <HeroPanel />
      </section>

      <div className="section-shell"><EvidenceRail /></div>
      <SelectedWork />
      <aside className="literary-interruption" aria-label="Editorial note">
        <p>What cannot be known should still have a shape.</p>
        <span>Field note / 01</span>
      </aside>
      <Principles />
      <Range />
      <ContactSection />
    </main>
  )
}
