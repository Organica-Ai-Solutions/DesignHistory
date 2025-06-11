import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Visual Evolution – Interactive Design History Book',
  description: 'Explore 106+ years of design history with interactive showcases of Bauhaus, Memphis, Cyberpunk, Liquid Glass, and more. Created by Organica AI Solutions.',
  generator: 'Next.js',
  authors: [{ name: 'Organica AI Solutions', url: 'https://organicaai.com' }],
  creator: 'Organica AI Solutions',
  publisher: 'Organica AI Solutions',
  keywords: [
    'design history',
    'interactive book',
    'Bauhaus',
    'Memphis Design',
    'Material Design',
    'Glassmorphism',
    'Cyberpunk',
    'Apple Liquid Glass',
    'design movements',
    'visual evolution',
    'UI UX design',
    'graphic design',
    'web design',
    'design education'
  ],
  openGraph: {
    title: 'The Visual Evolution – Interactive Design History Book',
    description: 'Explore 106+ years of design history with interactive showcases of Bauhaus, Memphis, Cyberpunk, Liquid Glass, and more.',
    url: 'https://organica-ai-solutions.github.io/DesignHistory/',
    siteName: 'The Visual Evolution',
    images: [
      {
        url: 'https://organica-ai-solutions.github.io/DesignHistory/cover-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'The Visual Evolution - Design History Book Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Visual Evolution – Interactive Design History Book',
    description: 'Explore 106+ years of design history with interactive showcases of Bauhaus, Memphis, Cyberpunk, Liquid Glass, and more.',
    images: ['https://organica-ai-solutions.github.io/DesignHistory/cover-preview.jpg'],
    creator: '@organicaai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://organica-ai-solutions.github.io/DesignHistory/" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="version" content="v1.0" />
        <meta name="build-date" content="December 2024" />
      </head>
      <body suppressHydrationWarning={true} className="min-h-screen bg-background font-sans antialiased">
        <div className="relative min-h-screen">
          {children}
          
          {/* Sticky CTA Footer */}
          <footer className="fixed bottom-4 right-4 z-50">
            <a 
              href="https://organicaai.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium flex items-center gap-2"
              aria-label="Visit Organica AI Solutions website"
            >
              <span>💡</span>
              Learn More @ Organica AI
            </a>
          </footer>
          
          {/* Version Footer */}
          <div className="fixed bottom-4 left-4 z-40 text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
            v1.0 — Published December 2024
          </div>
        </div>
      </body>
    </html>
  )
}
