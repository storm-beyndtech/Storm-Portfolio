import type { Metadata } from "next"
import CaseStudyHero from "@/components/work/CaseStudyHero"
import CaseStudyNext from "@/components/work/CaseStudyNext"
import CaseStudySection from "@/components/work/CaseStudySection"
import EvidenceMetric from "@/components/work/EvidenceMetric"
import MediaFrame from "@/components/work/MediaFrame"
import SystemDiagram from "@/components/work/SystemDiagram"
import SystemNote from "@/components/work/SystemNote"
import ArrowIcon from "@/components/site/ArrowIcon"

export const metadata: Metadata = {
  title: "Nakupenda case study",
  description: "A product systems case study on attention, messaging boundaries, community governance, live audio, and long-form expression in Nakupenda.",
  alternates: { canonical: "/work/nakupenda" },
  openGraph: {
    title: "Nakupenda · Social product systems",
    description: "How an interest-graph social product models attention, access, governance, and relationship state.",
  },
}

const attentionFlow = [
  { label: "Choose", detail: "Select up to five Currents" },
  { label: "Context", detail: "Current and subgroup shape creation" },
  { label: "Discover", detail: "Feed and explore follow explicit interests" },
  { label: "Participate", detail: "Post, blog, message, or join live audio" },
  { label: "Govern", detail: "Boundaries, roles, and community decisions" },
] as const

const whisperRoles = [
  { role: "Host", speak: "Yes", moderate: "Owns room", reward: "Can receive", retention: "Can end and download" },
  { role: "Co-host", speak: "Yes", moderate: "Stage support", reward: "Can receive", retention: "Policy-bound" },
  { role: "Speaker", speak: "On stage", moderate: "No", reward: "Can receive", retention: "Session-bound" },
  { role: "Listener", speak: "By request", moderate: "No", reward: "Can gift / react", retention: "Session-bound" },
] as const

export default function NakupendaCaseStudy() {
  return (
    <main id="main-content" className="case-study-page page-shell nakupenda-case">
      <CaseStudyHero
        index="03"
        category="Social product systems / product design"
        status="Product system"
        title="Nakupenda"
        headline="How do you build a social system when attention, access, and intimacy all need boundaries?"
        summary="Nakupenda is an interest-graph social platform organized around Currents, with product-specific systems for messaging, community governance, long-form work, live audio, onboarding, and creator relationships."
        ownership="Product design, interaction and state models, responsive UI systems, feature architecture, and implementation direction."
      />

      <div className="case-evidence-grid">
        <EvidenceMetric value="CURRENTS" label="Interest graph" detail="Explicit spaces shape discovery" />
        <EvidenceMetric value="TEXTin" label="Relationship state" detail="Messaging with receiver-controlled boundaries" />
        <EvidenceMetric value="WHISPERS" label="Role-aware live audio" detail="Host, co-host, speaker, listener" />
        <EvidenceMetric value="CONTROL" label="Governance" detail="Community voting and appeal surfaces" />
      </div>

      <CaseStudySection index="01" title="The product is organized around meaning, not only popularity." eyebrow="Context / attention">
        <div className="prose-grid">
          <p>Nakupenda’s product source defines Currents as an explicit interest graph. People choose the spaces they want to participate in, and those choices shape onboarding, discovery, feed context, creation, and community identity.</p>
          <p>This is a design decision about attention. Recommendation should be derivable from chosen context, not hidden behind a generic popularity loop.</p>
        </div>
        <SystemDiagram label="Attention and participation flow" nodes={attentionFlow} />
        <MediaFrame
          src="/case-studies/nakupenda/Onboarding-Screen-Currents.jpg"
          alt="Nakupenda Currents selection screen showing interest choices during onboarding"
          width={2880}
          height={2048}
          label="Decision evidence / Currents"
          note="The screen proves that interest selection is part of first-session product state, not a decorative topic picker."
        />
      </CaseStudySection>

      <CaseStudySection index="02" title="Messaging changes when the receiver controls access." eyebrow="TEXTin / boundaries">
        <p className="case-lede">TEXTin is designed as relationship infrastructure rather than a generic message list. Conversation identity, privacy, message type, and access state belong to the thread.</p>
        <div className="decision-list">
          <div><span>01</span><strong>Boundary mode</strong><p>After repeated unreplied messages, a receiver-configured boundary can make continued access explicit instead of allowing infinite social pressure.</p></div>
          <div><span>02</span><strong>Private state</strong><p>Secret inbox and whisper-style messages require protected entry, hidden notification behavior, and predictable expiry.</p></div>
          <div><span>03</span><strong>Emotional identity</strong><p>The conversation can carry theme and aura state without replacing the core clarity of sender, receiver, and message status.</p></div>
          <div><span>04</span><strong>Capability honesty</strong><p>Boundary charging, AI memory, and shared spaces remain active-testing areas until their backend contracts are complete.</p></div>
        </div>
        <MediaFrame
          src="/case-studies/nakupenda/Textin-Boundary.jpg"
          alt="Nakupenda TEXTin conversation showing a messaging boundary state"
          width={2880}
          height={2448}
          label="Decision evidence / TEXTin"
          note="The interface makes the relationship boundary visible at the point where the next message changes state."
        />
        <SystemNote code="UX-04" title="A boundary should appear before the user crosses it.">
          <p>Access rules fail when they arrive as a surprise error. The interface should show who controls the boundary, why it exists, and what the next valid action is.</p>
        </SystemNote>
      </CaseStudySection>

      <CaseStudySection index="03" title="Live audio is a role system, not a single screen." eyebrow="Whispers / realtime state">
        <p>Whispers models ephemeral live rooms with explicit transitions between host, co-host, speaker, and listener. The UI separates moderation, stage control, speaking requests, gifting, listener rewards, and session retention.</p>
        <figure className="state-flow">
          <figcaption>Whispers speaking-state transition</figcaption>
          <div>
            <span><small>Default</small><strong>Listener</strong></span>
            <i aria-hidden="true">request to speak <ArrowIcon direction="right" /></i>
            <span><small>Queue</small><strong>Pending review</strong></span>
            <i aria-hidden="true">host / co-host approves <ArrowIcon direction="right" /></i>
            <span data-tone="positive"><small>Stage</small><strong>Speaker</strong></span>
            <i aria-hidden="true">demote <ArrowIcon direction="right" /></i>
            <span><small>Return</small><strong>Listener</strong></span>
          </div>
          <p>Listeners can subscribe to room state, but publishing audio remains blocked until the role transition is approved.</p>
        </figure>
        <div className="table-shell" role="region" aria-label="Whispers role matrix" tabIndex={0}>
          <table>
            <thead><tr><th>Role</th><th>Voice</th><th>Moderation</th><th>Rewards</th><th>Retention</th></tr></thead>
            <tbody>
              {whisperRoles.map((item) => (
                <tr key={item.role}><th scope="row">{item.role}</th><td>{item.speak}</td><td>{item.moderate}</td><td>{item.reward}</td><td>{item.retention}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="source-note">The role-aware room UI is implemented. Some live payloads, gifting rules, snippet contracts, and retention mechanics remain incomplete backend work.</p>
        <MediaFrame
          src="/case-studies/nakupenda/Whisper.jpg"
          alt="Nakupenda Whisper live audio room interface"
          width={2880}
          height={2688}
          label="Decision evidence / Whispers"
          note="The screen is evidence of separate stage, listener, moderation, and participation states."
        />
      </CaseStudySection>

      <CaseStudySection index="04" title="Governance needs an inspectable decision trail." eyebrow="Community Control">
        <div className="prose-grid">
          <p>Community Control gives members a structured way to review reported content, vote to keep or remove it, inspect the consensus, and enter an appeal path.</p>
          <p>The product is intentionally more legible than opaque centralized moderation, but the current implementation is honest about contract gaps: the queue and skip flow are not fully backed, and appeal behavior still needs stable backend ownership.</p>
        </div>
        <SystemNote code="GOV-01" title="Participation is not the same thing as policy completeness.">
          <p>A voting surface can make a decision inspectable, but abuse prevention, eligibility, evidence handling, and appeal rules still need deterministic ownership behind the interface.</p>
        </SystemNote>
      </CaseStudySection>

      <CaseStudySection index="05" title="Long-form work needs a different social contract." eyebrow="Blogs / monetization">
        <div className="implementation-grid">
          <article><span>Context</span><h3>Every blog belongs somewhere.</h3><p>Current and subgroup linkage keeps long-form work inside the interest graph rather than detaching it into a separate publishing product.</p></article>
          <article><span>Access</span><h3>Preview and entitlement are separate states.</h3><p>Readers need a clear free boundary, locked continuation, and honest access state before monetization can feel fair.</p></article>
          <article><span>Reliability</span><h3>The article survives secondary failure.</h3><p>Comments or entitlement hints can degrade without preventing the main article from rendering.</p></article>
          <article><span>Direction</span><h3>Living work, not a frozen post.</h3><p>Versioning, collaboration, subscriptions, and voice comments remain planned until their APIs are verified.</p></article>
        </div>
        <MediaFrame
          src="/case-studies/nakupenda/Blog-Locked.jpg"
          alt="Nakupenda blog interface showing a locked continuation boundary"
          width={2880}
          height={3560}
          label="Decision evidence / Blogs"
          note="The screen demonstrates that preview content and full entitlement are distinct reader states."
        />
      </CaseStudySection>

      <CaseStudySection index="06" title="One visual system, different account intent." eyebrow="Design system">
        <div className="doctrine-grid">
          <div><strong>Urbanist</strong><p>A sharp operating typeface keeps dense social surfaces contemporary and compact.</p></div>
          <div><strong>Personal red</strong><p>The personal account accent identifies action and active state without spreading into every surface.</p></div>
          <div><strong>Business green</strong><p>Business accounts receive a separate accent while shared components retain the same architecture.</p></div>
          <div><strong>Theme layer</strong><p>Semantic background and text roles support dark mode without rebuilding the component system.</p></div>
        </div>
        <p className="source-note">The implementation uses a 4px/8px spacing grid, semantic background and text tokens, responsive layouts, and server components by default. Product-specific state is allowed to be expressive; navigation and action hierarchy stay familiar.</p>
      </CaseStudySection>

      <CaseStudySection index="07" title="What the work proves." eyebrow="Outcome / learning">
        <div className="outcome-list">
          <p>Attention can be modeled as explicit user context through Currents.</p>
          <p>Messaging UX improves when receiver-controlled boundaries and privacy states are first-class.</p>
          <p>Live audio requires a role matrix, realtime transitions, and degraded states, not only an attractive room.</p>
          <p>Community governance needs visible consensus and appeal paths, plus honest acknowledgment of incomplete policy contracts.</p>
          <p>Screens are useful evidence only after the decision they prove is clear.</p>
        </div>
      </CaseStudySection>

      <CaseStudyNext label="Next / archive" title="Dash NG Shop" href="/work/dash" />
    </main>
  )
}
