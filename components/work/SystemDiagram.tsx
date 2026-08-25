type DiagramNode = {
  label: string
  detail?: string
  state?: "implemented" | "planned" | "boundary"
}
type SystemDiagramProps = {
  label: string
  nodes: readonly DiagramNode[]
}

export default function SystemDiagram({ label, nodes }: SystemDiagramProps) {
  return (
    <figure className="system-diagram">
      <figcaption>{label}</figcaption>
      <ol>
        {nodes.map((node, index) => (
          <li key={`${node.label}-${index}`} data-state={node.state ?? "implemented"}>
            <span className="diagram-number">{String(index + 1).padStart(2, "0")}</span>
            <strong>{node.label}</strong>
            {node.detail ? <small>{node.detail}</small> : null}
            {index < nodes.length - 1 ? <span className="diagram-arrow" aria-hidden="true">→</span> : null}
          </li>
        ))}
      </ol>
    </figure>
  )
}
