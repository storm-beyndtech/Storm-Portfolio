import type { Metadata, Viewport } from "next"
import { Crimson_Pro, Geist, Geist_Mono } from "next/font/google"
import SiteFooter from "@/components/site/SiteFooter"
import SiteHeader from "@/components/site/SiteHeader"
import { profile } from "@/content/profile"
import { getSiteUrl } from "@/lib/site-url"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" })
const crimson = Crimson_Pro({ subsets: ["latin"], variable: "--font-serif", display: "swap", weight: ["400", "600"] })
const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Storm / Victor Nwachukwu · Software Engineer & Product Designer",
    template: "%s · Storm",
  },
  description: "Victor Nwachukwu builds high-trust systems across backend infrastructure, behavioral intelligence, financial systems, and product UX.",
  applicationName: "Storm Portfolio",
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Storm / Victor Nwachukwu",
    description: "Software Engineer & Product Designer building high-trust systems under uncertainty.",
    siteName: "Storm Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Storm / Victor Nwachukwu, Software Engineer and Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Storm / Victor Nwachukwu",
    description: "Software Engineer & Product Designer building high-trust systems under uncertainty.",
    images: ["/opengraph-image"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#171513" },
    { media: "(prefers-color-scheme: light)", color: "#eee9df" },
  ],
}

const themeScript = `(function(){try{var saved=localStorage.getItem('storm-theme');var theme=saved==='light'||saved==='dark'?saved:'light';document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}catch(_){document.documentElement.dataset.theme='light';}})();`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.mark,
    url: siteUrl,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    sameAs: [profile.links.github, profile.links.behance, profile.links.x, profile.links.telegram, profile.links.whatsapp].filter((url) => url.startsWith("http")),
    knowsAbout: ["Software engineering", "Product design", "Data systems", "Behavioral intelligence", "Financial systems"],
  }

  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${crimson.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
