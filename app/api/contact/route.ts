import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Create transporter with Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER || 'team@beyndtech.com',
        pass: process.env.EMAIL_PASS || '3099545689Vv++',
      },
    })

    // Email to yourself
    const mailOptions = {
      from: process.env.EMAIL_USER || 'team@beyndtech.com',
      to: process.env.EMAIL_TO || 'storm@beyndtech.com',
      subject: `Portfolio Contact: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background-color: #0a0a0a;
                color: #f4f4f0;
                padding: 40px 20px;
                margin: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: #1a1a1a;
                border: 1px solid rgba(244, 244, 240, 0.1);
                padding: 40px;
              }
              .header {
                border-bottom: 2px solid #8b0000;
                padding-bottom: 20px;
                margin-bottom: 30px;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                color: #f4f4f0;
                font-weight: 400;
              }
              .label {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: rgba(244, 244, 240, 0.4);
                margin-bottom: 8px;
                font-family: monospace;
              }
              .value {
                font-size: 16px;
                color: #f4f4f0;
                margin-bottom: 24px;
                line-height: 1.6;
              }
              .message-box {
                background: rgba(244, 244, 240, 0.03);
                border-left: 3px solid #8b0000;
                padding: 20px;
                margin-top: 20px;
              }
              .footer {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid rgba(244, 244, 240, 0.1);
                font-size: 12px;
                color: rgba(244, 244, 240, 0.3);
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Portfolio Contact</h1>
              </div>

              <div class="label">&gt; Name</div>
              <div class="value">${name}</div>

              <div class="label">&gt; Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #8b0000; text-decoration: none;">${email}</a></div>

              <div class="label">&gt; Message</div>
              <div class="message-box">
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>

              <div class="footer">
                Sent from your portfolio contact form
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Portfolio Contact

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
