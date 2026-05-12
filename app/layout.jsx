import { Plus_Jakarta_Sans, Anton } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-anton',
})

export const metadata = {
  metadataBase: new URL('https://medleyhr.com'),
  title: {
    default: 'MedleyHR — Self-Serve HR & Payroll Software',
    template: '%s | MedleyHR',
  },
  description:
    'Run payroll, manage leaves, track attendance, and stay compliant — PF, ESI, TDS, Form 16 — all in one self-serve HRMS. Free for up to 10 employees. Available in India, US, Middle East, Asia & Africa.',
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
    'HR software Middle East',
    'HR software Singapore',
    'HR software Africa',
    'affordable HRMS',
    'HR software small business',
  ],
  openGraph: {
    title: 'MedleyHR — Self-Serve HR & Payroll Software',
    description: 'Run payroll, manage leaves, and stay compliant — without a consultant. Free for up to 10 employees. India, US, Middle East, Asia & Africa.',
    url: 'https://medleyhr.com',
    siteName: 'MedleyHR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MedleyHR — HR and Payroll Software' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MedleyHR — Self-Serve HR & Payroll Software',
    description: 'Run payroll, manage leaves, and stay compliant — without a consultant. Free for up to 10 employees.',
    creator: '@medleyhr',
    images: ['/og-image.png'],
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
    <html lang="en" className={`${plusJakarta.variable} ${anton.variable}`}>
      <body className="v4-page-canvas min-h-screen antialiased">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KF9738VGFV" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KF9738VGFV');
        `}</Script>
      </body>
    </html>
  )
}
