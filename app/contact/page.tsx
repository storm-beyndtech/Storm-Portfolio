import type { Metadata } from "next"
import ContactForm from "@/components/contact/ContactForm"
import SocialLinks from "@/components/site/SocialLinks"
import { contactIntents } from "@/content/contact"
import { profile } from "@/content/profile"

export const metadata: Metadata = {
  title: "Contact Victor Nwachukwu",
  description: "Contact Victor Nwachukwu about engineering roles, product systems, collaborations, and select project work.",
  alternates: { canonical: "/contact" },
}

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

const validIntents = new Set(contactIntents.map((intent) => intent.value))

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams
  const requestedIntent = typeof params.intent === "string" ? params.intent : "role"
  const initialIntent = validIntents.has(requestedIntent as (typeof contactIntents)[number]["value"])
    ? requestedIntent
    : "role"
  const channel = typeof params.channel === "string" ? params.channel.toLowerCase() : ""
  const initialMessage = ["discord", "telegram", "whatsapp"].includes(channel)
    ? `I'd like to connect with you on ${channel.charAt(0).toUpperCase() + channel.slice(1)}.`
    : ""

  return (
    <main id="main-content" className="page-shell contact-page">
      <header className="contact-page-intro">
        <div>
          <p className="eyebrow">Contact / direct channel</p>
          <h1>Let’s make the first message useful.</h1>
        </div>
        <div className="contact-page-note">
          <p>Tell me what you are building, hiring for, or trying to untangle. The reason is preselected so your message arrives with context.</p>
          <dl>
            <div><dt>Based</dt><dd>{profile.location}</dd></div>
            <div><dt>Response</dt><dd>Usually within 1–2 working days</dd></div>
          </dl>
          <SocialLinks compact />
        </div>
      </header>

      <section className="contact-form-shell" aria-labelledby="contact-form-title">
        <div className="contact-form-heading">
          <p className="eyebrow">Message details</p>
          <h2 id="contact-form-title">What should I know?</h2>
        </div>
        <ContactForm initialIntent={initialIntent} initialMessage={initialMessage} />
      </section>
    </main>
  )
}
