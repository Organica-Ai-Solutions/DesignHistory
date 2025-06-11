import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Design Evolution | Interactive Design History',
  description: 'Explore 106 years of design movements from Bauhaus to Apple\'s Liquid Glass',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning={true} className="min-h-screen bg-background font-sans antialiased">
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
