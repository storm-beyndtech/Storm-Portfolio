import Link from "next/link"
import { profile } from "@/content/profile"

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div>
          <p className="footer-mark">{profile.mark} / {profile.name}</p>
          <p>{profile.role}</p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <Link href="/elsewhere">Elsewhere</Link>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} · {profile.location}</p>
      </div>
    </footer>
  )
}
