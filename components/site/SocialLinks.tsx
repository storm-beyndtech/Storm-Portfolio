import Link from "next/link"
import { SiDiscord, SiGithub, SiTelegram, SiWhatsapp, SiX } from "react-icons/si"
import { profile } from "@/content/profile"

const socialLinks = [
  { label: "GitHub", href: profile.links.github, Icon: SiGithub },
  { label: "Discord", href: profile.links.discord, Icon: SiDiscord },
  { label: "X", href: profile.links.x, Icon: SiX },
  { label: "Telegram", href: profile.links.telegram, Icon: SiTelegram },
  { label: "WhatsApp", href: profile.links.whatsapp, Icon: SiWhatsapp },
] as const

export default function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links${compact ? " social-links-compact" : ""}`} aria-label="Social profiles">
      {socialLinks.map(({ label, href, Icon }) => {
        const content = (
          <>
            <Icon aria-hidden="true" />
            <span className="visually-hidden">{label}</span>
          </>
        )

        return href.startsWith("/") ? (
          <Link key={label} href={href} aria-label={`${label} contact`} title={label}>
            {content}
          </Link>
        ) : (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
            {content}
          </a>
        )
      })}
    </div>
  )
}
