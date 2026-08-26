import Link from "next/link"
import ArrowIcon from "@/components/site/ArrowIcon"

type CaseStudyNextProps = {
  label: string
  title: string
  href: string
}

export default function CaseStudyNext({ label, title, href }: CaseStudyNextProps) {
  return (
    <nav className="case-study-next" aria-label="Next case study">
      <span>{label}</span>
      <Link href={href}>{title} <ArrowIcon /></Link>
    </nav>
  )
}
