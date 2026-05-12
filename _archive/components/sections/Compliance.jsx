'use client'

import { motion } from 'framer-motion'

const COMPLIANCE_ITEMS = [
  {
    label: 'Provident Fund',
    abbr: 'PF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.5 8H20L15 12L17 19L11 15L5 19L7 12L2 8H8.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    description: 'Automated EPF contributions and ECR filing',
  },
  {
    label: 'Employee State Insurance',
    abbr: 'ESI',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3C7.686 3 5 5.686 5 9C5 14 11 19 11 19C11 19 17 14 17 9C17 5.686 14.314 3 11 3Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 7V11M9 9H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    description: 'ESI contributions with monthly returns',
  },
  {
    label: 'Tax Deducted at Source',
    abbr: 'TDS',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9H19" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7.5" cy="13.5" r="1.5" fill="currentColor" />
        <path d="M12 13H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    description: 'TDS calculation, deduction, and Form 24Q',
  },
  {
    label: 'Professional Tax',
    abbr: 'PT',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 4H17V8C17 12.418 14.314 16 11 16C7.686 16 5 12.418 5 8V4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 18H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    description: 'Multi-state PT slabs, auto-calculated',
  },
  {
    label: 'Form 16 Generation',
    abbr: 'F16',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M6 3H14L18 7V19H6V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 3V7H18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 11H14M9 14H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    description: 'Auto-generated and distributed to employees',
  },
  {
    label: 'Payslip Generation',
    abbr: 'PAY',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 9H11M8 12H14M8 15H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    description: 'Detailed payslips sent automatically every month',
  },
  {
    label: 'Statutory Bonus',
    abbr: 'SB',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L13 8H19L14.5 11L16.5 17L11 13.5L5.5 17L7.5 11L3 8H9L11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    description: 'Bonus calculation under the Payment of Bonus Act',
  },
]

export default function Compliance() {
  return (
    <section
      id="compliance"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #065f52, #0f172a)' }}
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #0f9e8a, transparent)' }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-14"
        >
          <span className="text-label text-[#0f9e8a] block mb-3">Compliance</span>
          <h2 className="text-h2 text-white mb-4">
            Every compliance requirement.{' '}
            <span className="text-[#0f9e8a]">Zero surprises.</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Built for India's compliance landscape — so you're always audit-ready, without chasing
            statutory filing deadlines or hiring a dedicated compliance team.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {COMPLIANCE_ITEMS.map((item, i) => (
            <motion.div
              key={item.abbr}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl p-5 border group hover:border-[#0f9e8a]/60 transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(8px)',
                borderColor: 'rgba(255,255,255,0.1)',
              }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 text-[#0f9e8a] group-hover:bg-[#0f9e8a] group-hover:text-white transition-all duration-200"
                style={{ background: 'rgba(15,158,138,0.15)' }}>
                {item.icon}
              </div>
              <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border"
            style={{
              background: 'rgba(15,158,138,0.15)',
              borderColor: 'rgba(15,158,138,0.3)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 2L12.5 7H18L13.5 10.5L15.5 16L10 12.5L4.5 16L6.5 10.5L2 7H7.5L10 2Z" fill="#0f9e8a" />
            </svg>
            <p className="text-white font-medium text-sm">
              Built for India's compliance landscape — so you're always audit-ready.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
