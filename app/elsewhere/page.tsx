import type { Metadata } from "next"
import Image from "next/image"
import { profile } from "@/content/profile"
import ArrowIcon from "@/components/site/ArrowIcon"

export const metadata: Metadata = {
  title: "Elsewhere",
  description: "Writing, music, and visual experiments by Victor Nwachukwu.",
  alternates: { canonical: "/elsewhere" },
}

const art = [
  { src: "/art/Lifeless-Edge.jpg", alt: "A dark red and black abstract landscape titled Lifeless Edge", width: 3088, height: 2056 },
  { src: "/art/art-2.jpg", alt: "A surreal visual study from Storm's art archive", width: 1800, height: 2298 },
  { src: "/art/art-4.jpg", alt: "An atmospheric visual experiment from Storm's art archive", width: 2880, height: 4366 },
] as const

export default function ElsewherePage() {
  return (
    <main id="main-content" className="page-shell elsewhere-page">
      <header className="page-intro elsewhere-intro">
        <p className="eyebrow">Elsewhere / off-axis work</p>
        <h1>The stranger material lives here.</h1>
        <p>Writing, sound, and visual studies. More atmosphere is allowed, but nothing autoplays and nothing blocks the exit.</p>
      </header>

      <section className="elsewhere-channels" aria-label="Creative channels">
        <a href={profile.links.writing} target="_blank" rel="noreferrer">
          <span>01 / Writing</span>
          <strong>Dystopian horror, systems, and field notes.</strong>
          <small>Open writing archive <ArrowIcon /></small>
        </a>
        <div>
          <span>02 / Music</span>
          <strong>Sound studies and independent experiments.</strong>
          <small>Archive in progress</small>
        </div>
        <a href={profile.links.behance} target="_blank" rel="noreferrer">
          <span>03 / Visual work</span>
          <strong>Product design, art direction, and image systems.</strong>
          <small>Open Behance <ArrowIcon /></small>
        </a>
      </section>

      <section className="art-strip" aria-label="Selected visual experiments">
        {art.map((item, index) => (
          <figure key={item.src}>
            <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 768px) 100vw, 33vw" />
            <figcaption>Visual study / 0{index + 1}</figcaption>
          </figure>
        ))}
      </section>

      <blockquote className="elsewhere-note">
        <p>Keep the unease. Remove the theatre.</p>
        <cite>Working rule</cite>
      </blockquote>
    </main>
  )
}
