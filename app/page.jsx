import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import FoundersNote from '@/components/FoundersNote'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'MedleyHR — Self-Serve HR & Payroll Software for Indian Businesses',
  description:
    'Run payroll, manage leaves, track attendance, and stay India-compliant — PF, ESI, TDS, Form 16 — all in one self-serve HRMS. Free for up to 10 employees. No consultant needed.',
  alternates: { canonical: 'https://medleyhr.com' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://medleyhr.com/#organization',
  name: 'MedleyHR',
  legalName: 'Codonsoft Technologies',
  url: 'https://medleyhr.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://medleyhr.com/og-image.png',
    width: 1200,
    height: 630,
  },
  email: 'hello@medleyhr.com',
  description:
    'MedleyHR is a self-serve HR and payroll management platform built for Indian businesses. It enables companies to run payroll, manage leaves, track attendance, and stay compliant with Indian labour law — without a consultant.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  foundingLocation: { '@type': 'Place', name: 'Bengaluru, India' },
  areaServed: { '@type': 'Country', name: 'India' },
  sameAs: [],
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://medleyhr.com/#software',
  name: 'MedleyHR',
  url: 'https://medleyhr.com',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'HumanResourcesApplication',
  operatingSystem: 'Web, iOS, Android',
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  description:
    'Self-serve HR and payroll software for Indian businesses. Handles payroll, leaves, attendance, PF, ESI, TDS, Form 16, and employee self-service — without an implementation consultant.',
  featureList: [
    'Payroll automation',
    'India statutory compliance — PF, ESI, TDS, PT, Form 16',
    'Leave management and approval workflows',
    'Attendance and working hours tracking',
    'Employee self-service portal',
    'Loans and reimbursements',
    'Salary revision approvals',
    'Multi-branch reporting',
    'Team status module',
    'Direct bank integration',
    'Custom salary components',
  ].join(', '),
  screenshot: 'https://medleyhr.com/og-image.png',
  provider: { '@id': 'https://medleyhr.com/#organization' },
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter',
      description: 'Core HR for up to 10 employees — free forever.',
      price: '0',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '0',
        priceCurrency: 'INR',
        referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'MON' },
      },
      eligibleQuantity: { '@type': 'QuantitativeValue', maxValue: 10, unitText: 'employees' },
      url: 'https://app.medleyhr.com/signup',
    },
    {
      '@type': 'Offer',
      name: 'Growth',
      description: 'Full payroll suite for growing teams — ₹35 per employee per month.',
      price: '35',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '35',
        priceCurrency: 'INR',
        referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'MON' },
        unitText: 'per employee per month',
      },
      url: 'https://app.medleyhr.com/signup',
    },
    {
      '@type': 'Offer',
      name: 'Scale',
      description: 'Everything in Growth plus team status, bank integration, and dedicated support — ₹55 per employee per month.',
      price: '55',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '55',
        priceCurrency: 'INR',
        referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'MON' },
        unitText: 'per employee per month',
      },
      url: 'https://app.medleyhr.com/signup',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can MedleyHR build something specific to our workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. MedleyHR builds based on what users ask for. If a feature is missing or a workflow doesn't fit, you can raise a request — the team takes it seriously. Contact hello@medleyhr.com.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is my payroll data secure on MedleyHR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MedleyHR uses 256-bit SSL encryption, role-based access controls, and conducts regular security audits. Your data belongs to you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I migrate from my existing HRMS to MedleyHR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. You can connect last month's payroll data during setup and run your next payroll without a gap. Most teams complete migration within a day.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is MedleyHR compliant with Indian tax laws?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PF, ESI, TDS, Professional Tax, and Form 16 are handled out of the box — not as add-ons. The platform updates automatically with regulatory changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a consultant to set up MedleyHR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MedleyHR is fully self-serve. Sign up, configure your organisation, and you are ready to run payroll. Most teams are set up within a day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MedleyHR handle multiple offices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Multi-branch support is available on the Growth and Scale plans — separate departments, locations, and pay schedules under one organisation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does MedleyHR cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MedleyHR is free for up to 10 employees (Starter plan). The Growth plan costs ₹35 per employee per month (₹29 billed annually). The Scale plan costs ₹55 per employee per month (₹46 billed annually). No setup fee, no implementation cost, no contracts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is MedleyHR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MedleyHR is a self-serve HR and payroll management platform built for Indian businesses. It lets companies run payroll, manage leaves, track attendance, and stay compliant with Indian labour law — including PF, ESI, TDS, and Form 16 — without an implementation consultant.',
      },
    },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://medleyhr.com/#website',
  name: 'MedleyHR',
  url: 'https://medleyhr.com',
  description: 'Self-serve HR and payroll software for Indian businesses',
  publisher: { '@id': 'https://medleyhr.com/#organization' },
  inLanguage: 'en-IN',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Pricing />
        <FoundersNote />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
