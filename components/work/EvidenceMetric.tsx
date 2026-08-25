type EvidenceMetricProps = {
  value: string
  label: string
  detail?: string
}
export default function EvidenceMetric({ value, label, detail }: EvidenceMetricProps) {
  return (
    <div className="evidence-metric">
      <strong>{value}</strong>
      <span>{label}</span>
      {detail ? <small>{detail}</small> : null}
    </div>
  )
}
