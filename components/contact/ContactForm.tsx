"use client"

import { FormEvent, useState } from "react"
import { contactIntents } from "@/content/contact"
import ArrowIcon from "@/components/site/ArrowIcon"

type ContactFormProps = {
  initialIntent: string
  initialMessage?: string
}

type FormStatus = { state: "idle" | "sending" | "success" | "error"; message: string }

export default function ContactForm({ initialIntent, initialMessage = "" }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>({ state: "idle", message: "" })

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    setStatus({ state: "sending", message: "Sending…" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      const result = (await response.json()) as { error?: string; message?: string }

      if (!response.ok) throw new Error(result.error || "Message delivery failed.")

      form.reset()
      setStatus({ state: "success", message: result.message || "Message sent. I’ll get back to you soon." })
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "Message delivery failed. Please try again.",
      })
    }
  }

  return (
    <form className="contact-form" onSubmit={submitContact}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" maxLength={120} required />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
        <label>
          <span>Company / team <small>Optional</small></span>
          <input name="company" type="text" autoComplete="organization" maxLength={160} />
        </label>
        <label>
          <span>What is this about?</span>
          <select name="intent" defaultValue={initialIntent} required>
            {contactIntents.map((intent) => (
              <option value={intent.value} key={intent.value}>{intent.label}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="message-field">
        <span>Message</span>
        <textarea
          name="message"
          rows={7}
          maxLength={6000}
          defaultValue={initialMessage}
          placeholder="A little context, the problem, and what a useful next step looks like."
          required
        />
      </label>
      <label className="form-honeypot" aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-submit-row">
        <button className="primary-button" type="submit" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : "Send message"} <ArrowIcon />
        </button>
        <p className={`form-status form-status-${status.state}`} aria-live="polite">
          {status.message || "Delivered directly to Victor. No mailing list."}
        </p>
      </div>
    </form>
  )
}
