import type { Metadata } from "next"
import CaseStudyHero from "@/components/work/CaseStudyHero"
import CaseStudyNext from "@/components/work/CaseStudyNext"
import CaseStudySection from "@/components/work/CaseStudySection"
import EvidenceMetric from "@/components/work/EvidenceMetric"
import SystemDiagram from "@/components/work/SystemDiagram"
import SystemNote from "@/components/work/SystemNote"

export const metadata: Metadata = {
  title: "RugBurn case study",
  description: "How RugBurn evolved from structural token checks into behavioral and forensic risk infrastructure for Solana.",
  alternates: { canonical: "/work/rugburn" },
  openGraph: {
    title: "RugBurn · Behavioral risk infrastructure",
    description: "Attribution, evidence, and uncertainty in a production forensic intelligence system.",
  },
}

const architecture = [
  { label: "Intake", detail: "Dashboard, API, MCP, bots" },
  { label: "Evidence", detail: "RPC, provider, and market facts" },
  { label: "Attribution", detail: "Creator, funding, and operator context" },
  { label: "Assessment", detail: "Evidence, confidence, and explicit limits" },
  { label: "Persistence", detail: "Postgres records and calibration data" },
  { label: "Surfaces", detail: "Reports, alerts, agents, and public records" },
] as const

export default function RugBurnCaseStudy() {
  return (
    <main id="main-content" className="case-study-page page-shell">
      <CaseStudyHero
        index="01"
        category="Behavioral / forensic intelligence"
        status="Live product"
        title="RugBurn"
        headline="Disposable addresses and tokens can change. Operator behavior leaves patterns."
        summary="RugBurn is risk infrastructure for inspecting token structure, operator relationships, funding topology, holder concentration, liquidity movement, and historical outcomes before a person or autonomous system acts."
        ownership="Solo product direction, architecture, Go worker, frontend, data systems, risk doctrine, API/MCP, bot surfaces, and operations."
        liveUrl="https://rugburn.io"
      />

      <div className="case-evidence-grid">
        <EvidenceMetric value="LIVE" label="Production product" detail="Human and machine-facing surfaces" />
        <EvidenceMetric value="GO" label="Scanning engine" detail="Provider orchestration and evidence collection" />
        <EvidenceMetric value="API + MCP" label="Public read surfaces" detail="Read-only agent access with scoped keys" />
        <EvidenceMetric value="BOTS" label="Community access" detail="Telegram and Discord scan workflows" />
      </div>

      <CaseStudySection index="01" title="The first model was too structural." eyebrow="Context / failure">
        <div className="prose-grid">
          <p>The initial product inherited a familiar scanner assumption: if enough contract, authority, liquidity, and holder checks look healthy, the resulting score should be dependable.</p>
          <p>Calibration showed the limitation. Overall accuracy could look respectable while failed-token separation remained weak. A clean score was not the same thing as a reliable account of the actor behind the launch.</p>
        </div>
        <SystemNote code="SYS-01" title="A model can be accurate and still miss the event that matters.">
          <p>Class imbalance can make aggregate accuracy flattering. RugBurn treats calibration as a reason to narrow claims, inspect failure classes, and keep evidence visible rather than marketing a perfect predictor.</p>
        </SystemNote>
      </CaseStudySection>

      <CaseStudySection index="02" title="The reframe: follow behavior, not costume." eyebrow="System thesis">
        <p className="case-lede">On Solana, a launchpad, program account, fee payer, authority, and true operator can be different entities. The hard problem is attribution.</p>
        <div className="decision-list">
          <div><span>01</span><strong>Resolve the subject</strong><p>Separate program infrastructure from the human-controlled identity the evidence actually supports.</p></div>
          <div><span>02</span><strong>Preserve provenance</strong><p>Keep provider facts, on-chain evidence, and inferred relationships distinguishable.</p></div>
          <div><span>03</span><strong>Represent absence</strong><p>A failed measurement must not silently become a zero, a clean result, or a confident label.</p></div>
          <div><span>04</span><strong>Expose why</strong><p>The interface should show the evidence class behind the assessment, not only a final score.</p></div>
        </div>
      </CaseStudySection>

      <CaseStudySection index="03" title="A layered forensic system." eyebrow="Architecture">
        <SystemDiagram label="Current public architecture, simplified" nodes={architecture} />
        <p className="diagram-caveat">This diagram deliberately omits proprietary scoring policy, calibration thresholds, and private operational controls.</p>
      </CaseStudySection>

      <CaseStudySection index="04" title="Attribution is where the system earns trust." eyebrow="Key decisions">
        <div className="two-column-list">
          <article><span>Launchpad ambiguity</span><h3>Infrastructure can look like an operator.</h3><p>Known programs and shared services must be excluded or contextualized before they contaminate deployer history.</p></article>
          <article><span>Burner rotation</span><h3>The visible wallet may be disposable.</h3><p>Funding relationships and repeated behavior matter because the address that pressed the button may never appear again.</p></article>
          <article><span>False clustering</span><h3>Shared rails are not automatic coordination.</h3><p>Exchange and provider infrastructure can connect unrelated users. Edges need evidence and confidence, not a visual coincidence.</p></article>
          <article><span>Provider failure</span><h3>Unknown must remain unknown.</h3><p>Missing history, immature market data, or a timed-out provider should degrade the claim instead of laundering uncertainty into safety.</p></article>
        </div>
        <SystemNote code="ATTR-02" title="Wrong data is quieter than no data.">
          <p>A visible degraded state creates friction, but a fabricated zero creates false certainty. The system prefers a bounded non-answer over a clean lie.</p>
        </SystemNote>
      </CaseStudySection>

      <CaseStudySection index="05" title="Evidence before confidence." eyebrow="Product doctrine">
        <div className="doctrine-grid">
          <div><strong>Evidence</strong><p>Show the holder, liquidity, authority, market, deployer, and funding facts the assessment can defend.</p></div>
          <div><strong>Confidence</strong><p>Keep the strength of the evidence separate from the severity of the risk.</p></div>
          <div><strong>Unassessed</strong><p>Missing coverage is a distinct state. It is not safe, risky, or zero.</p></div>
          <div><strong>Boundaries</strong><p>High-risk evidence can constrain the final presentation without exposing private scoring mechanics.</p></div>
        </div>
      </CaseStudySection>

      <CaseStudySection index="06" title="The interface uses contrast as an information budget." eyebrow="Design system">
        <div className="prose-grid">
          <p>RugBurn’s current design system separates recessed instrument panels from raised objects, quiet chrome from semantic status, and known values from degraded or unassessed data.</p>
          <p>Risk color is reserved for risk. Unknown has its own semantics. A decorative accent cannot borrow the same visual language as a critical finding without weakening the whole forensic hierarchy.</p>
        </div>
        <SystemNote code="DS-03" title="Semantic status cannot become decoration.">
          <p>If a color means critical risk in a forensic interface, reusing it as casual brand chrome makes every future signal harder to read.</p>
        </SystemNote>
      </CaseStudySection>

      <CaseStudySection index="07" title="Verifiability means preserving the misses." eyebrow="Augury / operating doctrine">
        <p className="case-lede">The Augury direction records selected claims before outcomes resolve, then keeps the result attached. The point is not mystique. It is making it harder for a system to quietly delete a wrong prediction and remember only its wins.</p>
        <p className="source-note">The verification surface exists in the product direction; the public record is still an emerging corpus, so no accuracy claim is presented here.</p>
      </CaseStudySection>

      <CaseStudySection index="08" title="What shipped, and what changed." eyebrow="Outcome">
        <div className="outcome-list">
          <p>Production Go worker and Next.js product surfaces.</p>
          <p>Token, wallet, and deployer evidence exposed through dashboard, API, and read-only MCP.</p>
          <p>Telegram and Discord scan access for community workflows.</p>
          <p>Calibration, provenance, and explicit unknown states became product requirements, not internal implementation details.</p>
          <p>The product thesis moved from “scan the token” toward “inspect the operator and the evidence around the action.”</p>
        </div>
      </CaseStudySection>

      <CaseStudyNext label="Next / 02" title="VŒID" href="/work/void" />
    </main>
  )
}
