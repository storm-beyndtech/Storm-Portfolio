import type { Metadata } from "next"
import CaseStudyHero from "@/components/work/CaseStudyHero"
import CaseStudySection from "@/components/work/CaseStudySection"
import EvidenceMetric from "@/components/work/EvidenceMetric"
import CaseStudyNext from "@/components/work/CaseStudyNext"

export const metadata: Metadata = {
  title: "Seametry case study",
  description: "Open ETF-style creation and redemption infrastructure for tokenized equities on Solana, with issuer evidence and mainnet direct-wallet allocations.",
  alternates: { canonical: "/work/seametry" },
}

export default function SeametryCaseStudy() {
  return (
    <main id="main-content" className="case-study-page page-shell">
      <CaseStudyHero
        index="01"
        category="Onchain ETF-style market infrastructure"
        status="Devnet protocol · Mainnet allocations"
        title="Seametry"
        headline="A basket of stocks is not yet an ETF."
        summary="Seametry explores the creation and redemption mechanism behind ETFs for tokenized equities on Solana. The Hall creates fungible Alloy shares against fixed constituent formulas and redeems them into independently withdrawable claims."
        ownership="Solo founder: protocol architecture, Rust/Anchor, Go evidence core, interface, execution integration and testing."
        liveUrl="https://seametry.xyz"
      />
      <div className="case-evidence-grid">
        <EvidenceMetric value="DEVNET" label="Hall protocol" detail="Deployed Anchor program and signed demo transactions" />
        <EvidenceMetric value="MAINNET" label="Allocations" detail="Direct-wallet tokenized equity purchases through Jupiter" />
        <EvidenceMetric value="TOKEN-2022" label="Issuer evidence" detail="Authorities and admission conditions decoded" />
        <EvidenceMetric value="GO · RUST · TS" label="Validation" detail="Shared conformance vectors and tests" />
      </div>
      <CaseStudySection index="01" title="The ETF is a mechanism, not a shopping list." eyebrow="Thesis">
        <div className="prose-grid">
          <p>Buying several tokenized stocks creates an allocation, not an ETF. In an ETF, primary-market creation and redemption exchange fund shares for a defined set of underlying assets. That loop helps market participants connect share prices to the underlying portfolio.</p>
          <p>Onchain equities introduce issuer-specific authorities, different transfer conditions, and fragmented execution. Seametry is designed to make those conditions inspectable while exploring an open creation/redemption path—not to depend on issuer failures.</p>
        </div>
      </CaseStudySection>
      <CaseStudySection index="02" title="Strike, Melt, claim." eyebrow="Protocol / implemented on devnet">
        <div className="decision-list">
          <div><span>01</span><strong>Formula</strong><p>An Alloy defines exact constituent quantities; no price oracle is needed to determine the exchange amounts.</p></div>
          <div><span>02</span><strong>Strike</strong><p>Deposit the formula constituents to mint fungible Alloy shares, subject to the underlying assets' transfer rules.</p></div>
          <div><span>03</span><strong>Melt</strong><p>Redeem shares into separately recorded claims on the underlying constituents.</p></div>
          <div><span>04</span><strong>Withdraw</strong><p>Each claim can be delivered independently. A restricted constituent can remain pending without automatically blocking the others.</p></div>
        </div>
      </CaseStudySection>
      <CaseStudySection index="03" title="Issuer powers are part of the instrument." eyebrow="Evidence / execution">
        <div className="prose-grid">
          <p>The Go evidence core inspects SPL/Token-2022 mint state, issuer authorities and admission conditions. The goal is to show the rules surrounding a constituent before it becomes part of a financial product.</p>
          <p>On mainnet, Allocations are a separate product: they quote, simulate and purchase admitted tokenized equities directly into a user's wallet via Jupiter. They do not issue Alloy shares.</p>
        </div>
      </CaseStudySection>
      <CaseStudySection index="04" title="What has been demonstrated—and what has not." eyebrow="Proof / boundaries">
        <div className="outcome-list">
          <p>The Hall is deployed on Solana devnet, with public transaction signatures for creation, redemption and mock-issuer restriction scenarios.</p>
          <p>The monorepo includes Rust/Anchor tests, Go policy and arithmetic, and shared cross-runtime conformance vectors.</p>
          <p>Direct-wallet Allocations operate on Solana mainnet through Jupiter routes.</p>
          <p>The Hall is not audited or deployed to mainnet; there is no live Alloy secondary market. Legal review, security audit, issuer integrations and liquidity partnerships remain next steps.</p>
        </div>
        <div className="inline-actions">
          <a className="primary-button" href="https://seametry.xyz" target="_blank" rel="noreferrer">Explore product ↗</a>
          <a className="secondary-button" href="https://github.com/BeyndtechArc/Seametry" target="_blank" rel="noreferrer">Inspect source ↗</a>
          <a className="secondary-button" href="https://github.com/BeyndtechArc/Seametry/blob/main/shared/evidence/hall-demo/transcript-devnet.json" target="_blank" rel="noreferrer">Devnet evidence ↗</a>
        </div>
      </CaseStudySection>
      <CaseStudyNext label="Next / 02" title="Rugburn" href="/work/rugburn" />
    </main>
  )
}
