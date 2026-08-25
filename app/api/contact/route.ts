import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const MAX_NAME_LENGTH = 120
const MAX_MESSAGE_LENGTH = 6000

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    }
    return entities[character]
  })
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") ?? ""
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Expected a JSON request." }, { status: 415 })
    }

    const body = (await request.json()) as Record<string, unknown>
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const message = typeof body.message === "string" ? body.message.trim() : ""

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
    }

    if (name.length > MAX_NAME_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: "The message is too long." }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 })
    }

    const smtpUser = process.env.EMAIL_USER
    const smtpPass = process.env.EMAIL_PASS
    const recipient = process.env.EMAIL_TO ?? smtpUser

    if (!smtpUser || !smtpPass || !recipient) {
      console.error("Portfolio contact email is not configured.")
      return NextResponse.json(
        { error: "Email delivery is temporarily unavailable. Contact Storm directly by email." },
        { status: 503 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST ?? "smtp.hostinger.com",
      port: Number(process.env.EMAIL_PORT ?? 465),
      secure: process.env.EMAIL_SECURE !== "false",
      auth: { user: smtpUser, pass: smtpPass },
    })

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>")
    const safeSubjectName = name.replace(/[\r\n]/g, " ")

    await transporter.sendMail({
      from: `Storm Portfolio <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `Portfolio contact: ${safeSubjectName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:32px;color:#24211f;background:#f5f0e7">
          <p style="font:12px monospace;letter-spacing:.12em;text-transform:uppercase;color:#81786f">New portfolio contact</p>
          <h1 style="font-size:24px;margin:18px 0 28px">${safeName}</h1>
          <p style="font:12px monospace;color:#81786f">EMAIL</p>
          <p><a href="mailto:${safeEmail}" style="color:#8e3528">${safeEmail}</a></p>
          <p style="font:12px monospace;color:#81786f;margin-top:28px">MESSAGE</p>
          <p style="line-height:1.7">${safeMessage}</p>
        </div>
      `,
      text: `New portfolio contact\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return NextResponse.json({ success: true, message: "Message sent." })
  } catch (error) {
    console.error("Portfolio contact delivery failed:", error)
    return NextResponse.json(
      { error: "Message delivery failed. Contact Storm directly by email." },
      { status: 500 },
    )
  }
}
