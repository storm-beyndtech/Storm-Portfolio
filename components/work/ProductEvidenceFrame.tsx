type EvidenceItem = {
  label: string
  value: string
  detail: string
  tone?: "positive" | "warning" | "unknown"
}

type ProductEvidenceFrameProps = {
  label: string
  title: string
  status: string
  items: readonly EvidenceItem[]
  note: string
}

export default function ProductEvidenceFrame({ label, title, status, items, note }: ProductEvidenceFrameProps) {
  return (
    <figure className="product-evidence-frame">
      <header>
        <div>
          <span>{label}</span>
          <strong>{title}</strong>
        </div>
        <small>{status}</small>
      </header>
      <div className="product-evidence-grid">
        {items.map((item) => (
          <article key={`${item.label}-${item.value}`} data-tone={item.tone ?? "unknown"}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
      <figcaption><span>Decision proved</span>{note}</figcaption>
    </figure>
  )
}
