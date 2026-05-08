import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta',
})

export const metadata = {
  metadataBase: new URL('https://medleyhr.com'),
  title: 'Medley HR — Payroll & HR Software for Indian Businesses',
  description:
    'Run payroll, manage leaves, track attendance, and stay India-compliant — all in one place. Affordable HR software for teams of all sizes.',
  openGraph: {
    title: 'Medley HR',
    description: 'Payroll and HR management built for India.',
    url: 'https://medleyhr.com',
    siteName: 'Medley HR',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medley HR',
    description: 'Payroll and HR management built for India.',
  },
  keywords: [
    'HR software India',
    'payroll software India',
    'HRMS India',
    'leave management',
    'Form 16',
    'PF ESI TDS compliance',
    'employee self service',
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      </head>
      <body
        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
        className="min-h-screen antialiased"
      >
        {children}
      </body>
    </html>
  )
}
