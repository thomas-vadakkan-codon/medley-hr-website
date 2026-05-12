'use client'

import { motion } from 'framer-motion'
import FeatureCard from '@/components/ui/FeatureCard'

const FEATURES = [
  {
    title: 'Run Payroll in Minutes',
    description:
      'Process accurate, India-compliant payroll every month without spreadsheets or errors.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 9H9M6 12H9M11 9H14M11 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 7H18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Leave & Attendance',
    description:
      'Track leave balances, approve requests, and monitor team attendance in one view.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 2V5M14 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 8H18" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="13" r="1.5" fill="currentColor" />
        <circle cx="13" cy="13" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Employee Self-Service',
    description:
      "Let employees view payslips, apply for leave, and update details — without emailing HR.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 17C4 14.239 6.686 12 10 12C13.314 12 16 14.239 16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Form 16 & Compliance',
    description:
      'Generate Form 16 automatically. PF, ESI, TDS, and PT — built in, not bolted on.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 2H13L17 6V18H5V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13 2V6H17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 10H13M7 13H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Approval Workflows',
    description:
      'Salary revisions, reimbursements, and leave — all tracked with clear approval chains.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="4" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 5.5L8 9M12 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Loan Management',
    description:
      'Manage employee loans and repayments directly from the platform. No spreadsheets.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L13 8H18L14 12L16 18L10 14L4 18L6 12L2 8H7L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Reimbursements',
    description:
      'Submit, review, and process expense claims without chasing emails or filling forms.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 8H18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Documents Library',
    description:
      'Store, organize, and access all employee documents centrally. Always audit-ready.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 3H12L16 7V17H4V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 3V7H16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 11H13M7 14H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Reports & Insights',
    description:
      'Download payroll, headcount, and compliance reports in one click, in the format you need.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 15L7 10L10 13L14 7L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 17H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function FeaturesOverview() {
  return (
    <section id="features-overview" className="section-padding bg-[#f8fafb]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-14"
        >
          <span className="text-label text-[#0f9e8a] block mb-3">Everything in one place</span>
          <h2 className="text-h2 text-[#0f172a] mb-4">
            Everything your HR team needs.{' '}
            <span className="text-[#0f9e8a]">Nothing they don't.</span>
          </h2>
          <p className="text-body-lg text-[#475569] max-w-2xl mx-auto">
            Nine modules, one platform. No stitching together spreadsheets, multiple tools, or
            add-on compliance packages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={Math.min(i * 0.05, 0.3)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
