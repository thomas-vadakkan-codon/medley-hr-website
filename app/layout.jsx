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
  title: {
    default: 'MedleyHR — Self-Serve HR & Payroll Software for Indian Businesses',
    template: '%s | MedleyHR',
  },
  description:
    'Run payroll, manage leaves, track attendance, and stay India-compliant — PF, ESI, TDS, Form 16 — all in one self-serve HRMS. Free for up to 10 employees.',
  applicationName: 'MedleyHR',
  authors: [{ name: 'Codonsoft Technologies', url: 'https://medleyhr.com' }],
  creator: 'Codonsoft Technologies',
  publisher: 'Codonsoft Technologies',
  category: 'Business Software',
  keywords: [
    'HR software India',
    'payroll software India',
    'HRMS India',
    'self-serve HRMS',
    'payroll automation India',
    'leave management software',
    'Form 16 software',
    'PF ESI TDS compliance software',
    'employee self service portal',
    'salary management software India',
    'HR software for startups India',
    'multi-branch HRMS',
    'Indian payroll compliance',
    'attendance management software',
  ],
  openGraph: {
    title: 'MedleyHR — Self-Serve HR & Payroll for Indian Businesses',
    description: 'Run payroll, manage leaves, and stay India-compliant — without a consultant. Free for up to 10 employees.',
    url: 'https://medleyhr.com',
    siteName: 'MedleyHR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MedleyHR — HR and Payroll Software' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MedleyHR — Self-Serve HR & Payroll for Indian Businesses',
    description: 'Run payroll, manage leaves, and stay India-compliant — without a consultant. Free for up to 10 employees.',
    creator: '@medleyhr',
  },
  alternates: {
    canonical: 'https://medleyhr.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    // Add Google Search Console / Bing verification tokens here when available
    // google: 'your-token',
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
