import Link from "next/link"
import { SiDiscord, SiGithub, SiTelegram, SiWhatsapp, SiX } from "react-icons/si"
import { profile } from "@/content/profile"

const socialLinks = [
  { id: "github", label: "GitHub", href: profile.links.github, Icon: SiGithub },
  { id: "discord", label: "Discord", href: profile.links.discord, Icon: SiDiscord },
  { id: "x", label: "X", href: profile.links.x, Icon: SiX },
  { id: "telegram", label: "Telegram", href: profile.links.telegram, Icon: SiTelegram },
  { id: "whatsapp", label: "WhatsApp", href: profile.links.whatsapp, Icon: SiWhatsapp },
] as const

type SocialChannel = (typeof socialLinks)[number]["id"]

export default function SocialLinks({ compact = false, channels }: { compact?: boolean; channels?: readonly SocialChannel[] }) {
  const visibleLinks = channels ? socialLinks.filter(({ id }) => channels.includes(id)) : socialLinks

  return (
    <div className={`social-links${compact ? " social-links-compact" : ""}`} aria-label="Social profiles">
      {visibleLinks.map(({ label, href, Icon }) => {
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
