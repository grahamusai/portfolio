import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Graham Usai Portfolio',
  description: 'Good web developer in Kempton Park',
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
