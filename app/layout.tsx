import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBarWrapper } from '@/components/ui/nav-bar-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HabitCents – Your money has a story. Let\'s read it.',
  description: 'Track what you spend. Change what you want to. No shame, just clarity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased overflow-x-hidden`} style={{ letterSpacing: '-0.02em' }}>
        <NavBarWrapper />
        {children}
      </body>
    </html>
  )
}
