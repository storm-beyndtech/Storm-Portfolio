export type Project = {
  id: string
  index: string
  name: string
  displayName: string
  category: string
  status: string
  href: string
  problem: string
  thesis: string
  ownership: string
  proof: readonly string[]
  technologies: readonly string[]
  liveUrl?: string
  liveLabel?: string
}

export const flagshipProjects: readonly Project[] = [
  {
    id: "rugburn",
    index: "01",
    name: "Rugburn",
    displayName: "Rugburn",
    category: "Behavioral / forensic intelligence",
    status: "Live product",
    href: "/work/rugburn",
    liveUrl: "https://rugburn.io",
    liveLabel: "Open live product",
    problem:
      "Token structure changes quickly, while the operator relationships behind risky activity are harder to erase.",
    thesis:
      "Behavioral risk infrastructure that turns attribution, funding topology, market evidence, and uncertainty into an inspectable decision surface.",
    ownership: "Solo product, architecture, Go worker, frontend, data, API/MCP, bots, and operations.",
    proof: [
      "32K+ scan corpus; 15K current deployer cohort records",
      "Attribution, funding topology, Atlas, and public Augury records",
      "Dashboard, API, MCP, Telegram, and Discord surfaces",
    ],
    technologies: ["Go", "Next.js", "PostgreSQL", "Solana", "MCP"],
  },
  {
    id: "void",
    index: "02",
    name: "VOID",
    displayName: "VŒID",
    category: "Financial decision infrastructure",
    status: "Active build",
    href: "/work/void",
    problem:
      "The cheapest route across fragmented money rails can still be slow, unreliable, illiquid, or operationally wrong.",
    thesis:
      "A risk-aware route intelligence layer that ranks paths under explicit cost, timing, posture, and policy context.",
    ownership: "Product model, route-engine prototype, operational UX, workspace architecture, and system direction.",
    proof: ["Deterministic Go ranking prototype", "Live-reference and mock-state separation"],
    technologies: ["Go", "Next.js", "Supabase", "TypeScript", "Data systems"],
  },
  {
    id: "nakupenda",
    index: "03",
    name: "Nakupenda",
    displayName: "Nakupenda",
    category: "Social product systems / product design",
    status: "Product system",
    href: "/work/nakupenda",
    problem:
      "Social products must support expression and discovery without treating attention, access, and relationships as consequence-free.",
    thesis:
      "An interest-graph social system where feeds, messaging, moderation, long-form work, and live voice each carry explicit human boundaries.",
    ownership: "Product design, interaction systems, state models, responsive UI, and implementation direction.",
    proof: ["Role-aware live audio states", "Boundary-aware messaging and governance"],
    technologies: ["Next.js", "React", "TypeScript", "Realtime", "Product design"],
  },
] as const
export const archiveProjects = [
  {
    id: "dash",
    name: "Dash NG Shop",
    type: "Commerce operations",
    summary: "Multi-role inventory, payment, and staff coordination system.",
    href: "/work/dash",
  },
  {
    id: "rasman",
    name: "Rasman",
    type: "Music commerce",
    summary: "Direct-to-listener publishing, playback, payments, and controlled delivery.",
    href: "/work/rasman",
  },
  {
    id: "pearlcity",
    name: "Pearlcity",
    type: "Education platform",
    summary: "Learning and opportunity surfaces for a practical technology community.",
    href: "/work/pearlcity",
  },
] as const

export const earlyProjects = [
  {
    id: "bleenk",
    name: "Bleenk",
    type: "Payment concept",
    summary: "An earlier exploration of legible transaction state and payment trust.",
  },
] as const

export const principles = [
  {
    index: "01",
    title: "Evidence before confidence",
    body: "A system should expose what it knows, what it inferred, and what remains unknown.",
  },
  {
    index: "02",
    title: "Failure modes are requirements",
    body: "I design degraded and partial states before pretending the happy path is complete.",
  },
  {
    index: "03",
    title: "Semantics scale",
    body: "Color, depth, motion, and hierarchy should represent roles, not one-off component styling.",
  },
  {
    index: "04",
    title: "Performance is UX",
    body: "Every persistent animation, dependency, and render boundary has to justify its cost.",
  },
  {
    index: "05",
    title: "Automation needs boundaries",
    body: "Probabilistic systems can explain and recommend. Irreversible actions need explicit policy and control.",
  },
  {
    index: "06",
    title: "Interfaces reduce uncertainty",
    body: "A useful dashboard changes the quality of the next decision, not merely the amount of data on screen.",
  },
] as const
