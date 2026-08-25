import type { Metadata } from "next"
import CaseStudyHero from "@/components/work/CaseStudyHero"
import CaseStudyNext from "@/components/work/CaseStudyNext"
import CaseStudySection from "@/components/work/CaseStudySection"
import EvidenceMetric from "@/components/work/EvidenceMetric"
import SystemDiagram from "@/components/work/SystemDiagram"
import SystemNote from "@/components/work/SystemNote"

export const metadata: Metadata = {
  title: "VŒID case study",
  description: "VŒID is an active build exploring risk-aware route intelligence for fragmented financial rails.",
  alternates: { canonical: "/work/void" },
  openGraph: {
    title: "VŒID · Financial decision infrastructure",
    description: "A technically honest case study of deterministic route ranking, operational UX, and the boundary between prototype and execution.",
  },
}

const architecture = [
  { label: "Request", detail: "Amount, corridor, mode, markup", state: "implemented" as const },
  { label: "Candidates", detail: "Prototype rail set", state: "implemented" as const },
  { label: "Normalize", detail: "Latency, fee, and posture", state: "implemented" as const },
  { label: "Evaluate", detail: "Deterministic rank and fallbacks", state: "implemented" as const },
  { label: "Explain", detail: "Winner, reason, and alternatives", state: "implemented" as const },
  { label: "Handoff", detail: "Licensed execution boundary", state: "planned" as const },
] as const

export default function VoidCaseStudy() {
  return (
    <main id="main-content" className="case-study-page page-shell void-case">
      <CaseStudyHero
        index="02"
        category="Financial decision infrastructure"
        status="Active build"
        title="VŒID"
        headline="The cheapest route is not necessarily the correct route."
        summary="VŒID explores a decision layer for cross-rail money movement, where cost competes with timing, reliability, liquidity, operational posture, policy, and confidence."
        ownership="Product model, deterministic Go prototype, builder and operator UX, workspace architecture, and system direction."
      />

      <div className="case-evidence-grid">
        <EvidenceMetric value="GO" label="Route prototype" detail="POST /v1/route with ranked fallbacks" />
        <EvidenceMetric value="RLS" label="Workspace boundary" detail="Supabase auth and row policies" />
        <EvidenceMetric value="LIVE / MOCK" label="Source honesty" detail="Runtime references separated from fallback data" />
        <EvidenceMetric value="NO CUSTODY" label="Explicit boundary" detail="No claim that VŒID holds customer funds" />
      </div>

      <CaseStudySection index="01" title="Routing is a decision problem." eyebrow="Context / stakes">
        <div className="prose-grid">
          <p>Cross-border and stablecoin workflows are fragmented across banks, mobile channels, treasury queues, OTC desks, and digital-asset rails. Each exposes a different fee, settlement time, failure surface, and operational dependency.</p>
          <p>A cost-only router hides the actual decision. A slightly cheaper path can be wrong when liquidity is thin, a provider is degraded, settlement is uncertain, or policy requires a different counterparty posture.</p>
        </div>
      </CaseStudySection>

      <CaseStudySection index="02" title="Normalize the route truth before ranking it." eyebrow="System model">
        <SystemDiagram label="Prototype decision flow" nodes={architecture} />
        <div className="diagram-legend" aria-label="Diagram legend">
          <span><i data-tone="implemented" />Implemented in the prototype</span>
          <span><i data-tone="planned" />Planned boundary</span>
        </div>
        <SystemNote code="SYS-02" title="The request shape is part of the product.">
          <p>Amount and corridor are not enough. A useful decision contract also carries mode, constraints, markup, policy context, and the explanation the downstream operator will need.</p>
        </SystemNote>
      </CaseStudySection>

      <CaseStudySection index="03" title="What is implemented now." eyebrow="Current system">
        <div className="implementation-grid">
          <article><span>Route worker</span><h3>Deterministic ranking in Go.</h3><p>The current worker accepts a route request, creates a prototype rail set, scores latency, fees, and rail posture, then returns a winner with ordered fallbacks.</p></article>
          <article><span>Product shell</span><h3>One workspace truth.</h3><p>Next.js provides the public and product shell. Supabase supplies sessions, workspace setup, memberships, and row-level access policies.</p></article>
          <article><span>Reference layer</span><h3>Live data with visible fallback.</h3><p>The dashboard can request FX and stablecoin references, but marks fallback values as mock when a provider is unavailable.</p></article>
          <article><span>Operational rooms</span><h3>Builder and operator views.</h3><p>Separate rooms share the same route vocabulary: request packet, ranking result, fallback posture, and proof envelope.</p></article>
        </div>
      </CaseStudySection>

      <CaseStudySection index="04" title="What remains direction, not traction." eyebrow="Planned / bounded">
        <div className="boundary-ledger">
          <div><span>Provider adapters</span><strong>Planned</strong><p>Production rail availability, provider health, and normalized quote contracts are not yet connected.</p></div>
          <div><span>Liquidity and reliability</span><strong>Planned</strong><p>The prototype does not yet ingest real corridor liquidity, settlement reliability, or counterparty telemetry.</p></div>
          <div><span>Policy engine</span><strong>Direction</strong><p>Policy-aware ranking is part of the thesis, but a production rule engine is not presented as complete.</p></div>
          <div><span>Execution</span><strong>Boundary</strong><p>Any eventual transfer belongs behind licensed partners, explicit controls, and an auditable handoff. VŒID is not presented as a custodian.</p></div>
        </div>
      </CaseStudySection>

      <CaseStudySection index="05" title="Determinism before irreversible action." eyebrow="Decision doctrine">
        <p className="case-lede">An AI layer can translate intent, investigate anomalies, and explain a recommendation. It should not become an unconstrained authority over a transfer.</p>
        <div className="doctrine-grid">
          <div><strong>Explicit inputs</strong><p>Keep corridor, amount, mode, and constraints inspectable.</p></div>
          <div><strong>Stable rank</strong><p>The same inputs and health snapshot should produce the same route order.</p></div>
          <div><strong>Fallbacks</strong><p>A decision should preserve a practical second path, not only celebrate a winner.</p></div>
          <div><strong>Operator control</strong><p>Overrides, holds, and execution handoff need durable policy and audit state.</p></div>
        </div>
        <SystemNote code="OPS-01" title="A fallback is part of the decision, not an error screen.">
          <p>Operational software should keep the next-best valid route visible before a provider fails. Recovery is designed into the normal state.</p>
        </SystemNote>
      </CaseStudySection>

      <CaseStudySection index="06" title="Compact, smoked, and operational." eyebrow="UX / design doctrine">
        <div className="prose-grid">
          <p>The current design direction uses compact chrome, smoked surfaces, restrained signal texture, and mono data treatment. Builder and operator rooms avoid oversized dashboard theatre because the route state is the product.</p>
          <p>Status color is sparse. Dither and ASCII fields stay illustrative and bounded. Dense values use tabular numerics, while source pills make live and mock references visibly different.</p>
        </div>
      </CaseStudySection>

      <CaseStudySection index="07" title="The honest outcome is a serious prototype." eyebrow="Outcome">
        <div className="outcome-list">
          <p>A tested Go route worker with deterministic ranking and fallback output.</p>
          <p>A Next.js product shell with Supabase-backed auth, workspace creation, and row policies.</p>
          <p>Builder and operator surfaces built around a shared route vocabulary.</p>
          <p>Live market references that degrade into clearly labeled mock state.</p>
          <p>No invented customers, transaction volume, production providers, or custody claims.</p>
        </div>
      </CaseStudySection>

      <CaseStudyNext label="Next / 03" title="Nakupenda" href="/work/nakupenda" />
    </main>
  )
}
