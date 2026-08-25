import type { Metadata } from "next"
import CaseStudyHero from "@/components/work/CaseStudyHero"
import CaseStudyNext from "@/components/work/CaseStudyNext"
import CaseStudySection from "@/components/work/CaseStudySection"
import EvidenceMetric from "@/components/work/EvidenceMetric"
import MediaFrame from "@/components/work/MediaFrame"
import SystemDiagram from "@/components/work/SystemDiagram"

export const metadata: Metadata = {
  title: "Pearlcity case study",
  description: "A concise source-audited case study on responsive course discovery, structured curricula, and registration context.",
  alternates: { canonical: "/work/pearlcity" },
}

const discoveryFlow = [
  { label: "Explore", detail: "Compare practical course paths" },
  { label: "Understand", detail: "Review duration, prerequisites, and highlights" },
  { label: "Inspect", detail: "Open modules and project expectations" },
  { label: "Register", detail: "Carry the selected course into the form" },
] as const

export default function PearlcityCaseStudy() {
  return (
    <main id="main-content" className="case-study-page page-shell">
      <CaseStudyHero
        index="A3"
        category="Education platform"
        status="Archive / source audited"
        title="Pearlcity"
        headline="Course discovery works better when the commitment is visible before registration."
        summary="Pearlcity organizes practical technology courses into comparable paths, then gives each course a detailed view of duration, prerequisites, highlights, modules, and projects before a learner enters registration."
        ownership="Frontend product implementation across course information architecture, responsive discovery, detailed routes, and registration flow."
      />

      <div className="case-evidence-grid">
        <EvidenceMetric value="6" label="Detailed course paths" detail="Defined in the current source" />
        <EvidenceMetric value="MODULES" label="Curriculum depth" detail="Visible before registration" />
        <EvidenceMetric value="PROJECTS" label="Practical expectation" detail="Course outcomes framed as work" />
        <EvidenceMetric value="RESPONSIVE" label="Discovery surface" detail="One hierarchy across viewports" />
      </div>

      <CaseStudySection index="01" title="Make the learning commitment legible." eyebrow="Information architecture">
        <div className="prose-grid">
          <p>A course card can create interest, but it cannot carry the whole decision. Each course route expands the promise into duration, prerequisites, highlights, modules, and project expectations.</p>
          <p>The registration flow preserves the selected course instead of forcing the learner to reconstruct context after choosing a path.</p>
        </div>
        <SystemDiagram label="Course decision flow, simplified from source" nodes={discoveryFlow} />
      </CaseStudySection>

      <CaseStudySection index="02" title="A broad catalogue still needs one visual hierarchy." eyebrow="Product surface">
        <MediaFrame
          src="/case-studies/pearl/pearl-ui.webp"
          alt="Long-form Pearlcity education platform interface showing course discovery and community sections"
          width={1800}
          height={6239}
          label="Product evidence / discovery"
          note="The full interface shows how course choices, programme detail, and registration prompts remain part of one responsive discovery sequence."
        />
      </CaseStudySection>

      <CaseStudySection index="03" title="What this archive proves." eyebrow="Outcome">
        <div className="outcome-list">
          <p>Structured course data can support both comparison and detailed decision-making without duplicating page logic.</p>
          <p>Prerequisites, modules, and projects make the cost of commitment clearer before registration.</p>
          <p>A responsive information hierarchy can carry a content-heavy education product across screen sizes.</p>
        </div>
        <p className="source-note">Claims on this page were limited to the current frontend source. No enrolment, completion, placement, or learner-outcome figures are inferred.</p>
      </CaseStudySection>

      <CaseStudyNext label="Return / index" title="All selected work" href="/work" />
    </main>
  )
}
