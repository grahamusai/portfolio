import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Graham Usai Portfolio',
  description: 'Software Developer and Designer Portfolio',
  keywords: 'Web Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
