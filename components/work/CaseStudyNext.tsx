import Link from "next/link"

type CaseStudyNextProps = {
  label: string
  title: string
  href: string
}

export default function CaseStudyNext({ label, title, href }: CaseStudyNextProps) {
  return (
    <nav className="case-study-next" aria-label="Next case study">
      <span>{label}</span>
      <Link href={href}>{title} <span aria-hidden="true">↗</span></Link>
    </nav>
  )
}
