import type { Metadata } from "next"
import CaseStudyHero from "@/components/work/CaseStudyHero"
import CaseStudyNext from "@/components/work/CaseStudyNext"
import CaseStudySection from "@/components/work/CaseStudySection"
import EvidenceMetric from "@/components/work/EvidenceMetric"
import SystemDiagram from "@/components/work/SystemDiagram"
import SystemNote from "@/components/work/SystemNote"

export const metadata: Metadata = {
  title: "Dash NG Shop case study",
  description: "A concise source-audited case study on inventory, payment verification, order state, and role-aware commerce operations.",
  alternates: { canonical: "/work/dash" },
}

const orderFlow = [
  { label: "Cart", detail: "Validate product and requested quantity" },
  { label: "Order", detail: "Keep fulfilment and payment state separate" },
  { label: "Payment", detail: "Verify Paystack reference and expected amount" },
  { label: "Inventory", detail: "Deduct stock and emit an update" },
  { label: "Operations", detail: "Notify staff and surface the new order" },
] as const

export default function DashCaseStudy() {
  return (
    <main id="main-content" className="case-study-page page-shell">
      <CaseStudyHero
        index="A1"
        category="Commerce operations / realtime system"
        status="Archive / source audited"
        title="Dash NG Shop"
        headline="A storefront is only trustworthy when payment, stock, and staff state agree."
        summary="Dash NG Shop connects the customer order path to role-aware inventory and fulfilment operations, with payment verification and realtime updates treated as system state rather than checkout decoration."
        ownership="Full-stack commerce implementation across ordering, Paystack verification, inventory state, role-aware workflows, realtime events, and operational notifications."
      />

      <div className="case-evidence-grid">
        <EvidenceMetric value="4 ROLES" label="Operational access" detail="Customer, storekeeper, sales rep, admin" />
        <EvidenceMetric value="PAYSTACK" label="Payment verification" detail="Reference, status, and amount checked" />
        <EvidenceMetric value="2 STATES" label="Order truth" detail="Payment and fulfilment tracked separately" />
        <EvidenceMetric value="REALTIME" label="Staff coordination" detail="Order and inventory events" />
      </div>

      <CaseStudySection index="01" title="The hard part happens after add to cart." eyebrow="Operational problem">
        <div className="prose-grid">
          <p>The customer sees one purchase. The system has to reconcile product availability, payment evidence, order status, inventory movement, staff ownership, and notifications without collapsing them into one optimistic success state.</p>
          <p>The implementation gives each concern an explicit boundary. Roles control operational access, payment verification checks the expected transaction, and order status remains distinct from payment status.</p>
        </div>
      </CaseStudySection>

      <CaseStudySection index="02" title="One order, several coordinated truths." eyebrow="Verified architecture">
        <SystemDiagram label="Order and operations flow, simplified from source" nodes={orderFlow} />
        <SystemNote code="PAY-01" title="A payment callback is evidence, not authority by itself.">
          <p>The verification path checks the provider reference, successful status, and expected amount before the order can trust the payment result.</p>
        </SystemNote>
      </CaseStudySection>

      <CaseStudySection index="03" title="What this archive proves." eyebrow="Outcome">
        <div className="outcome-list">
          <p>A role-aware commerce model can serve customers and operations without duplicating the underlying order truth.</p>
          <p>Inventory deductions and realtime events connect checkout to staff-facing work.</p>
          <p>Payment and fulfilment remain separately inspectable, which makes partial and failed states easier to reason about.</p>
        </div>
        <p className="source-note">Claims on this page were limited to behavior verified in the source repository. No revenue, order-volume, or performance claims are inferred.</p>
      </CaseStudySection>

      <CaseStudyNext label="Next / archive" title="Rasman" href="/work/rasman" />
    </main>
  )
}
