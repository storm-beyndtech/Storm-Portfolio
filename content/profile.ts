export const profile = {
  name: "Victor Nwachukwu",
  mark: "STORM",
  role: "Software Engineer & Product Designer",
  statement: "I build high-trust systems under uncertainty.",
  description:
    "I work across backend infrastructure, behavioral intelligence, financial systems, and product UX, turning noisy data, constraints, and failure modes into decisions people can act on.",
  availability: "Available for select remote engineering and product systems roles",
  location: "Lagos, Nigeria · Remote / global",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "storm@beyndtech.com",
  resume: "/Victor_Nwachukwu_CV_Senior.pdf",
  links: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || "https://github.com/storm-beyndtech",
    discord: process.env.NEXT_PUBLIC_DISCORD_URL?.trim() || "/contact?intent=other&channel=discord",
    x: process.env.NEXT_PUBLIC_TWITTER_URL?.trim() || "https://x.com/beyndtech",
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL?.trim() || "/contact?intent=other&channel=telegram",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim() || "/contact?intent=other&channel=whatsapp",
    behance: process.env.NEXT_PUBLIC_BEHANCE_URL?.trim() || "https://www.behance.net/bigstorm-beyndtech",
    writing: process.env.NEXT_PUBLIC_BLOG_URL?.trim() || "https://medium.com/@beyndtech",
  },
} as const

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "Approach", href: "/#approach" },
  { label: "Elsewhere", href: "/elsewhere" },
  { label: "About", href: "/about" },
] as const
export const evidence = [
  // Rounded down from live production aggregates verified on 2026-08-26.
  { value: "32K+", label: "Forensic scans" },
  { value: "15K", label: "Current deployer cohort records" },
  { value: "GO + TS", label: "Worker to product interface" },
  { value: "API · MCP · BOTS", label: "Human and agent surfaces" },
] as const
