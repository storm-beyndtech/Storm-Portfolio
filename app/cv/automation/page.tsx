import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Victor Nwachukwu — AI, Data & Business Automation CV",
  description: "Printable CV for Victor Nwachukwu, software engineer specializing in AI, data and business automation.",
  robots: { index: false, follow: false },
}

const roles = [
  { title: "Founder & Lead Engineer", org: "RugBurn (Beyndtech Arc Ltd)", date: "2025–Present", points: [
    "Built and operate a production risk-intelligence platform using a Go processing worker, PostgreSQL evidence storage, TypeScript/Next.js interfaces, APIs and messaging integrations.",
    "Processed 32,000+ forensic scans; developed pipelines to examine transaction patterns, funding relationships and behavioral anomalies across noisy datasets.",
    "Revised the risk-assessment methodology after evaluating weaknesses in an earlier model, improving how evidence, uncertainty and incomplete data are represented.",
    "Designed inspectable case records and reporting workflows to support investigation and review."
  ]},
  { title: "Founding Product Lead / Product Engineer", org: "Nakupenda", date: "Dec 2025–Present", points: [
    "Lead product and frontend implementation for a public-beta social platform, including messaging, live-room, publishing, governance and monetization workflows.",
    "Build responsive Next.js/React interfaces with shared component systems and real-time interaction states."
  ]},
  { title: "Technical Instructor & Software Engineer", org: "Pearlcity Hub", date: "2024–2025", points: [
    "Developed web applications with TypeScript, React and Node.js and instructed learners in practical, end-to-end software development."
  ]},
  { title: "Software Engineer", org: "Spyder Dev (Freelance)", date: "2021–2023", points: [
    "Delivered frontend and backend features for client applications, primarily a healthcare platform, using TypeScript-based technologies."
  ]}
]

export default function ResumePage() {
  return (
    <main id="main-content" style={{maxWidth: "850px", margin: "0 auto", padding: "42px 24px 70px", color: "var(--text-primary)"}}>
      <style>{`@media print { @page { size: A4; margin: 15mm; } .cv-print-hide, .site-header, .site-footer, footer { display: none !important; } html, body, main { background: white !important; color: #151515 !important; } main { max-width: none !important; padding: 0 !important; font-size: 10pt !important; } section { break-inside: avoid; } h1 { font-size: 22pt !important; } h2 { margin-top: 15px !important; } a { color: inherit !important; } } .cv-resume h2 { font-size: 0.85rem; letter-spacing: .12em; text-transform: uppercase; border-bottom: 1px solid currentColor; padding-bottom: 6px; margin: 25px 0 12px; } .cv-resume p, .cv-resume li { line-height: 1.55; font-size: .9rem; } .cv-resume ul { padding-left: 1.2rem; margin: 7px 0 0; } .cv-resume li { margin-bottom: 4px; } .cv-resume article { margin-bottom: 15px; } .cv-resume strong { font-weight: 700; }`}</style>
      <div className="cv-print-hide" style={{display:"flex", justifyContent:"space-between", gap:"12px", flexWrap:"wrap", marginBottom:"34px", alignItems:"center"}}>
        <p className="eyebrow">Public CV / printable version</p>
        <button type="button" className="secondary-button" onClick={undefined} style={{display:"none"}}>Print</button>
        <a className="primary-button" href="javascript:window.print()" style={{display:"none"}}>Print</a>
        <p style={{fontSize:".8rem",color:"var(--text-secondary)"}}>Use your browser’s Share → Print → Save to Files to export as PDF.</p>
      </div>
      <div className="cv-resume">
        <header style={{textAlign:"center"}}>
          <h1 style={{fontSize:"2rem",letterSpacing:"-.035em"}}>VICTOR NWACHUKWU</h1>
          <p style={{marginTop:"6px",fontWeight:650}}>Software Engineer | AI, Data & Business Automation</p>
          <p style={{marginTop:"7px"}}>Nigeria · Open to on-site opportunities · storm@beyndtech.com · +234 808 694 1101</p>
          <p><a href="https://storm.beyndtech.com">storm.beyndtech.com</a> · <a href="https://github.com/storm-beyndtech">github.com/storm-beyndtech</a></p>
        </header>
        <section><h2>Profile</h2><p>Software engineer experienced in backend systems, data processing, API integrations and operational software. Builds tools that turn complex data and business workflows into reliable applications, with experience in risk analysis, transaction validation, real-time systems and product delivery. Works across Go, TypeScript, SQL, PostgreSQL and React/Next.js.</p></section>
        <section><h2>Technical Skills</h2>
          <p><strong>Languages & data:</strong> Go, TypeScript, JavaScript, SQL, PostgreSQL, MongoDB</p>
          <p><strong>Backend & integration:</strong> Node.js, NestJS, Express, REST APIs, WebSockets, batch and real-time pipelines</p>
          <p><strong>Product & delivery:</strong> React, Next.js, Tailwind CSS, responsive interfaces, design systems, Docker, CI/CD, testing</p>
          <p><strong>Automation & analysis:</strong> API-based workflows, data validation, transaction analysis, evidence pipelines, MCP and agent integrations</p>
        </section>
        <section><h2>Professional Experience</h2>{roles.map(role=><article key={role.org}>
          <p><strong>{role.title} | {role.org}</strong> <span style={{whiteSpace:"nowrap"}}> | {role.date}</span></p>
          <ul>{role.points.map(point=><li key={point}>{point}</li>)}</ul>
        </article>)}</section>
        <section><h2>Relevant Contributions & Recognition</h2>
          <p>Contributed merged backend changes in the Stellar ecosystem involving transaction idempotency and SEP-6 anchor-response validation/reconciliation; also contributed merged real-time escrow event infrastructure to Trustless-OSS.</p>
          <p>Built an open-source Solana risk and compliance analysis skill with reproducible workflows and QuickNode x402 integration; received QuickNode startup credits.</p>
          <p>Received a Superteam Agentic Grant for Augur, a pre-outcome assessment and verification layer; placed fourth twice in the BirdEye On-Chain Intelligence Hackathon.</p>
          <p>Delivered a paid product-design engagement for Trustless Work through GrantFox.</p>
        </section>
        <section><h2>Selected Additional Systems</h2>
          <p><strong>Dash NG Shop</strong> — Developed multi-role commerce operations for inventory, orders, payments, staff workflows and real-time updates.</p>
          <p><strong>Rasman</strong> — Built music-commerce workflows for authentication, purchase, playback, entitlement, downloads and artist administration.</p>
          <p><strong>SangoLabs</strong> — Built a Nigerian-language data pipeline (Yoruba, Igbo, Hausa and Pidgin) with inter-annotator agreement scoring, a Go backend and Next.js frontend.</p>
          <p><strong>Seametry</strong> — Built Solana devnet creation/redemption infrastructure and a Go issuer-evidence layer; integrated direct-wallet tokenized-equity allocations on mainnet.</p>
        </section>
      </div>
    </main>
  )
}
