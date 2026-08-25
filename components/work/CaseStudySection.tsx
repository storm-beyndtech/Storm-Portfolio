type CaseStudySectionProps = {
  index: string
  title: string
  eyebrow?: string
  children: React.ReactNode
  className?: string
}
export default function CaseStudySection({ index, title, eyebrow, children, className = "" }: CaseStudySectionProps) {
  return (
    <section className={`case-section ${className}`} aria-labelledby={`section-${index}`}>
      <div className="case-section-label">
        <span>{index}</span>
        <p>{eyebrow ?? "System record"}</p>
      </div>
      <div className="case-section-content">
        <h2 id={`section-${index}`}>{title}</h2>
        {children}
      </div>
    </section>
  )
}
