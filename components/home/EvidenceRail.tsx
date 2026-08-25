import { evidence } from "@/content/profile"

export default function EvidenceRail() {
  return (
    <section className="evidence-rail" aria-label="Operating evidence">
      {evidence.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  )
}
