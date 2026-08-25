import Link from "next/link"
import { navigation, profile } from "@/content/profile"
import MobileNavigation from "./MobileNavigation"
import ThemeToggle from "./ThemeToggle"

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-mark" href="/" aria-label="Storm home">
          {profile.mark}<span className="mark-pulse" aria-hidden="true" />
        </Link>
        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-contact" href={`mailto:${profile.email}`}>Contact</a>
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
