import Link from "next/link"
import ArrowIcon from "@/components/site/ArrowIcon"

type CaseStudyHeroProps = {
  index: string
  category: string
  status: string
  title: string
  headline: string
  summary: string
  ownership: string
  liveUrl?: string
  liveLabel?: string
}
export default function CaseStudyHero({
  index,
  category,
  status,
  title,
  headline,
  summary,
  ownership,
  liveUrl,
  liveLabel = "Open live product",
}: CaseStudyHeroProps) {
  return (
    <header className="case-study-hero">
      <div className="case-study-breadcrumb">
        <Link href="/work">Work</Link>
        <span aria-hidden="true">/</span>
        <span>{index}</span>
      </div>
      <div className="case-study-title-row">
        <div>
          <p className="eyebrow">{category}</p>
          <h1>{title}</h1>
        </div>
        <span className="case-status">{status}</span>
      </div>
      <div className="case-study-intro">
        <p className="case-headline">{headline}</p>
        <div>
          <p>{summary}</p>
          <p className="ownership-line"><strong>Ownership</strong>{ownership}</p>
          {liveUrl ? <a className="text-link" href={liveUrl} target="_blank" rel="noreferrer">{liveLabel} <ArrowIcon /></a> : null}
        </div>
      </div>
    </header>
  )
}
