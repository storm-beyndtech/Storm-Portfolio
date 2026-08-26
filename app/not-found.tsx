import Link from "next/link"
import ArrowIcon from "@/components/site/ArrowIcon"

export default function NotFound() {
  return (
    <main id="main-content" className="error-page section-shell">
      <p className="eyebrow">404 / Unknown route</p>
      <h1>This surface does not exist.</h1>
      <p>The link may be stale. The work archive keeps the current public routes in one place.</p>
      <Link className="primary-button" href="/work">Open work archive <ArrowIcon /></Link>
    </main>
  )
}
