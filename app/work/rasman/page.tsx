import type { Metadata } from "next"
import CaseStudyHero from "@/components/work/CaseStudyHero"
import CaseStudyNext from "@/components/work/CaseStudyNext"
import CaseStudySection from "@/components/work/CaseStudySection"
import EvidenceMetric from "@/components/work/EvidenceMetric"
import MediaFrame from "@/components/work/MediaFrame"
import SystemDiagram from "@/components/work/SystemDiagram"

export const metadata: Metadata = {
  title: "Rasman case study",
  description: "A concise source-audited case study on direct music publishing, payment entitlement, playback, and controlled delivery.",
  alternates: { canonical: "/work/rasman" },
}

const listenerFlow = [
  { label: "Discover", detail: "Browse artist and release context" },
  { label: "Preview", detail: "Listen before the purchase boundary" },
  { label: "Purchase", detail: "Complete a Paystack transaction" },
  { label: "Entitlement", detail: "Webhook confirms access state" },
  { label: "Play / download", detail: "Signed media access follows purchase" },
] as const

const artistFlow = [
  { label: "Upload", detail: "Add the source media" },
  { label: "Metadata", detail: "Describe the artist and release" },
  { label: "Price", detail: "Set the purchase boundary" },
  { label: "Publish", detail: "Make the release discoverable" },
  { label: "Manage", detail: "Maintain catalogue and release state" },
] as const

export default function RasmanCaseStudy() {
  return (
    <main id="main-content" className="case-study-page page-shell">
      <CaseStudyHero
        index="A2"
        category="Music commerce"
        status="Archive / source audited"
        title="Rasman"
        headline="Direct music commerce needs a clean line from discovery to entitlement."
        summary="Rasman is a direct-to-listener publishing and commerce system that connects artist-managed releases, previews, Paystack payment state, purchase entitlement, persistent playback, and controlled media delivery."
        ownership="Full-stack product implementation across publishing, catalogue UX, authentication, payments, entitlements, storage, playback, and administration."
      />

      <div className="case-evidence-grid">
        <EvidenceMetric value="PUBLISH" label="Artist workflow" detail="Metadata, price, media, and release state" />
        <EvidenceMetric value="WEBHOOK" label="Payment truth" detail="Completed and failed purchase states" />
        <EvidenceMetric value="SIGNED" label="Controlled delivery" detail="Time-bounded stream and download URLs" />
        <EvidenceMetric value="PERSISTENT" label="Playback state" detail="Listening survives navigation" />
      </div>

      <CaseStudySection index="01" title="The purchase is a state transition, not a button." eyebrow="System decision">
        <p className="case-lede">A listener can discover and preview a release without access to the owned media. The product grants that access only after the payment event becomes a completed purchase entitlement.</p>
        <SystemDiagram label="Listener access flow, simplified from source" nodes={listenerFlow} />
        <SystemDiagram label="Artist publishing flow, simplified from source" nodes={artistFlow} />
      </CaseStudySection>

      <CaseStudySection index="02" title="Publishing and listening share one release truth." eyebrow="Product surface">
        <div className="prose-grid">
          <p>The artist path covers upload, metadata, pricing, publishing, and management. The listener path uses the same release context for discovery, preview, purchase, playback, and download.</p>
          <p>Media delivery sits behind generated stream or download URLs after entitlement. The case makes no claim about label-scale rights management or commercial traction.</p>
        </div>
        <div className="media-pair">
          <MediaFrame
            src="/case-studies/rasman/Rasman-hero.webp"
            alt="Rasman music storefront hero and discovery interface"
            width={1600}
            height={1139}
            label="Product evidence / discovery"
            note="The interface establishes the artist and release context before asking the listener to cross a purchase boundary."
          />
          <MediaFrame
            src="/case-studies/rasman/Rasman-ui.webp"
            alt="Long-form view of the Rasman music publishing and commerce interface"
            width={1800}
            height={4795}
            label="Product evidence / system range"
            note="The full interface shows discovery, catalogue, playback, and artist-facing product language in one system."
          />
        </div>
      </CaseStudySection>

      <CaseStudySection index="03" title="What this archive proves." eyebrow="Outcome">
        <div className="outcome-list">
          <p>A completed payment can become a durable product entitlement rather than a transient checkout response.</p>
          <p>Signed delivery links preserve a clear access boundary around purchased media.</p>
          <p>Artist publishing and listener playback can remain connected through one release model.</p>
        </div>
        <p className="source-note">Claims on this page were limited to source-verified flows. No sales, listener, catalogue-size, or artist-adoption figures are presented.</p>
      </CaseStudySection>

      <CaseStudyNext label="Next / archive" title="Pearlcity" href="/work/pearlcity" />
    </main>
  )
}
