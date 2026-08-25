const nodes = [
  { label: "Observe", project: "RugBurn", note: "signal" },
  { label: "Infer", project: "RugBurn", note: "evidence" },
  { label: "Decide", project: "VŒID", note: "policy" },
  { label: "Interface", project: "Nakupenda", note: "behavior" },
  { label: "Outcome", project: "System", note: "feedback" },
] as const

export default function SystemMap() {
  return (
    <div className="system-map" aria-label="System map from observation to outcome">
      <div className="system-map-head">
        <span>Operating model</span>
        <span>SYS / 00</span>
      </div>
      <ol>
        {nodes.map((node, index) => (
          <li key={node.label}>
            <span className="map-index">0{index + 1}</span>
            <span className="map-node">
              <strong>{node.label}</strong>
              <small>{node.project} / {node.note}</small>
            </span>
            {index < nodes.length - 1 ? <span className="map-line" aria-hidden="true" /> : null}
          </li>
        ))}
      </ol>
      <p className="system-map-foot">Signals become useful only when the decision remains inspectable.</p>
    </div>
  )
}
