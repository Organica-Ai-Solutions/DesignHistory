import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@/components/Analytics'

export const metadata: Metadata = {
  title: 'Design Evolution | Interactive Design History',
  description: 'Explore 106 years of design movements from Bauhaus (1919) to Apple\'s Liquid Glass (2025+). Interactive timeline featuring 47 pages, 19 design movements, and complete visual evolution.',
  generator: 'Next.js',
  keywords: ['design history', 'design movements', 'Bauhaus', 'Material Design', 'Frutiger Aero', 'design timeline', 'visual design', 'UI design', 'design evolution', 'interactive design book'],
  authors: [{ name: 'Design Evolution Team' }],
  creator: 'Design Evolution',
  publisher: 'Design Evolution',
  robots: 'index, follow',
  openGraph: {
    title: 'Design Evolution | Interactive Design History',
    description: 'Explore 106 years of design movements from Bauhaus (1919) to Apple\'s Liquid Glass (2025+). Interactive timeline featuring 47 pages and 19 design movements.',
    url: 'https://organica-ai-solutions.github.io/DesignHistory/',
    siteName: 'Design Evolution',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Evolution | Interactive Design History',
    description: 'Explore 106 years of design movements from Bauhaus (1919) to Apple\'s Liquid Glass (2025+)',
    creator: '@designevolution',
  },

  category: 'design',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#6366f1',
  colorScheme: 'light dark',
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Design Evolution",
  "description": "Interactive design history timeline covering 106 years of design movements",
  "url": "https://organica-ai-solutions.github.io/DesignHistory/",
  "author": {
    "@type": "Organization",
    "name": "Design Evolution Team"
  },
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "The Visual Evolution",
    "description": "Complete Design Movements Collection from Bauhaus (1919) to Apple's Liquid Glass (2025+)",
    "dateCreated": "2025",
    "genre": "Design History",
    "educationalUse": "Design Education",
    "audience": {
      "@type": "Audience",
      "audienceType": "Designers, Students, Design Enthusiasts"
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning={true} className="min-h-screen bg-background font-sans antialiased">
        <Analytics />
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
