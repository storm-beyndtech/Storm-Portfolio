type SystemNoteProps = {
  code: string
  title: string
  children: React.ReactNode
}
export default function SystemNote({ code, title, children }: SystemNoteProps) {
  return (
    <details className="system-note">
      <summary>
        <span>{code}</span>
        <strong>{title}</strong>
        <span className="system-note-control" aria-hidden="true">+</span>
      </summary>
      <div>{children}</div>
    </details>
  )
}
