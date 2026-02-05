# Environment Variables Setup

All your social/contact links are now controlled by environment variables for easy switching.

## Quick Setup

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local` with your actual links:**
   ```bash
   # Replace these with your real URLs
   NEXT_PUBLIC_BEHANCE_URL=https://behance.net/yourusername
   NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
   NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/1234567890
   NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
   NEXT_PUBLIC_BLOG_URL=https://yourblog.com
   NEXT_PUBLIC_CONTACT_EMAIL=hello@yourdomain.com
   ```

3. **Restart dev server:**
   ```bash
   npm run dev
   ```

## What Uses These Variables?

### Floating Contact Button (Top-Right)
- **Behance**: `NEXT_PUBLIC_BEHANCE_URL`
- **GitHub**: `NEXT_PUBLIC_GITHUB_URL`
- **WhatsApp**: `NEXT_PUBLIC_WHATSAPP_URL` (replaced LinkedIn)
- **Twitter**: `NEXT_PUBLIC_TWITTER_URL`

### Quick Actions Section (Bottom)
- **Behance**: `NEXT_PUBLIC_BEHANCE_URL`
- **GitHub**: `NEXT_PUBLIC_GITHUB_URL`
- **Writing/Blog**: `NEXT_PUBLIC_BLOG_URL`
- **Contact**: `NEXT_PUBLIC_CONTACT_EMAIL`

### Projects Section
**NOT using env variables** - Edit URLs directly in:
- `components/ProjectsSection.tsx` (lines 6-38)

## WhatsApp URL Format

For WhatsApp, use this format:
```
https://wa.me/1234567890
```

Replace `1234567890` with your phone number (with country code, no + or spaces).

Example:
- USA: `https://wa.me/15551234567`
- UK: `https://wa.me/447700900123`

## Notes

- `.env.local` is gitignored (won't be committed)
- `.env.example` shows the template
- If you don't set a variable, it uses the fallback URL
- Changes require dev server restart
