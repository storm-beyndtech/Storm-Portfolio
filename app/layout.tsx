import type { Metadata } from 'next'
import { Crimson_Pro, Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['200', '300', '400', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-distorted',
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Storm',
  description: 'Product Designer × Software Engineer × Dystopian Horror Writer',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Storm',
    description: 'Product Designer × Software Engineer × Dystopian Horror Writer',
    type: 'website',
    images: [
      {
        url: '/signals/Dream.jpg',
        width: 1200,
        height: 630,
        alt: 'Storm — Dream',
      },
      {
        url: '/signals/Dreamlike Forest Rest.jpg',
        width: 1200,
        height: 630,
        alt: 'Storm — Dreamlike Forest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Storm',
    description: 'Product Designer × Software Engineer × Dystopian Horror Writer',
    images: ['/signals/Dream.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${inter.variable} ${bebasNeue.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
