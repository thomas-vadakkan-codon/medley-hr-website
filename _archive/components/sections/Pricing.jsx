'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const SIGNUP_URL = 'https://app.medleyhr.com/signup'
const DEMO_URL = '#cta-footer'

const TIERS = [
  {
    name: 'Starter',
    tagline: 'For teams getting started',
    price: { monthly: 49, annual: 39 },
    employees: 'Up to 25 employees',
    cta: 'Start free trial',
    ctaHref: SIGNUP_URL,
    highlight: false,
    features: [
      'Employee profiles & org chart',
      'Monthly payroll processing',
      'Leave & attendance tracking',
      'Employee self-service portal',
      'PF, ESI, TDS built in',
      'Payslip generation',
      'Basic reports',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    tagline: 'For scaling businesses',
    price: { monthly: 79, annual: 63 },
    employees: 'Up to 200 employees',
    cta: 'Start free trial',
    ctaHref: SIGNUP_URL,
    highlight: true,
    badge: 'Most popular',
    features: [
      'Everything in Starter',
      'Approval workflows',
      'Form 16 generation & distribution',
      'Loan management',
      'Reimbursement management',
      'Documents library',
      'Advanced reports & exports',
      'Salary revision management',
      'Priority email + chat support',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For large organizations',
    price: { monthly: null, annual: null },
    employees: '200+ employees, custom',
    cta: 'Talk to our team',
    ctaHref: DEMO_URL,
    highlight: false,
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      'Custom onboarding & migration',
      'API access & integrations',
      'Multi-entity payroll',
      'Custom approval chains',
      'SLA-backed support',
      'SSO & advanced security',
    ],
  },
]

const COMPARISON = [
  {
    feature: 'Payroll processing',
    medley: true,
    keka: true,
    zoho: true,
  },
  {
    feature: 'PF / ESI / TDS built in (not add-on)',
    medley: true,
    keka: 'Add-on',
    zoho: true,
  },
  {
    feature: 'Employee self-service portal',
    medley: true,
    keka: true,
    zoho: true,
  },
  {
    feature: 'Form 16 generation',
    medley: true,
    keka: true,
    zoho: true,
  },
  {
    feature: 'Approval workflows',
    medley: true,
    keka: true,
    zoho: false,
  },
  {
    feature: 'Loan management',
    medley: true,
    keka: false,
    zoho: false,
  },
  {
    feature: 'Reimbursement management',
    medley: true,
    keka: true,
    zoho: false,
  },
  {
    feature: 'Transparent pricing',
    medley: true,
    keka: false,
    zoho: true,
  },
  {
    feature: 'Free trial — no credit card',
    medley: true,
    keka: false,
    zoho: true,
  },
]

function Check({ value }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-5 h-5 rounded-full bg-[#dcfce7] flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-label="Yes">
            <path d="M2 5L4 7L8 3" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    )
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <div className="w-5 h-5 rounded-full bg-[#f1f5f9] flex items-center justify-center">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-label="No">
            <path d="M2 2L6 6M6 2L2 6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    )
  }
  return (
    <div className="flex justify-center">
      <span className="text-xs text-[#d97706] font-semibold">{value}</span>
    </div>
  )
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section id="pricing" className="section-padding bg-[#f8fafb]">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <span className="text-label text-[#0f9e8a] block mb-3">Pricing</span>
          <h2 className="text-h2 text-[#0f172a] mb-4">
            Pricing that grows with you —{' '}
            <span className="text-[#0f9e8a]">not against you.</span>
          </h2>
          <p className="text-body-lg text-[#475569] max-w-2xl mx-auto">
            No surprise fees. No per-module charges. Everything included.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3 bg-white border border-[#e2e8f0] rounded-xl p-1.5">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                !isAnnual
                  ? 'bg-[#0f172a] text-white shadow-sm'
                  : 'text-[#475569] hover:text-[#0f172a]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-[#0f172a] text-white shadow-sm'
                  : 'text-[#475569] hover:text-[#0f172a]'
              }`}
            >
              Annual
              <span className="px-2 py-0.5 bg-[#0f9e8a] text-white text-[10px] font-bold rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`relative rounded-2xl p-7 flex flex-col border ${
                tier.highlight
                  ? 'bg-[#0f172a] border-[#0f172a] shadow-2xl scale-[1.02]'
                  : 'bg-white border-[#e2e8f0] hover:shadow-md transition-shadow'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-[#0f9e8a] text-white text-xs font-bold rounded-full shadow-md">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${tier.highlight ? 'text-[#0f9e8a]' : 'text-[#94a3b8]'}`}>
                  {tier.name}
                </p>
                <p className={`font-medium text-sm mb-4 ${tier.highlight ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                  {tier.tagline}
                </p>

                {tier.price.monthly !== null ? (
                  <div className="flex items-end gap-1.5 mb-1">
                    <span className={`text-4xl font-extrabold ${tier.highlight ? 'text-white' : 'text-[#0f172a]'}`}>
                      ₹{isAnnual ? tier.price.annual : tier.price.monthly}
                    </span>
                    <span className={`text-sm font-medium mb-1.5 ${tier.highlight ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                      /emp/month
                    </span>
                  </div>
                ) : (
                  <div className="mb-1">
                    <span className={`text-3xl font-extrabold ${tier.highlight ? 'text-white' : 'text-[#0f172a]'}`}>
                      Custom
                    </span>
                  </div>
                )}
                <p className={`text-xs ${tier.highlight ? 'text-[#475569]' : 'text-[#94a3b8]'}`}>
                  {tier.employees}
                  {tier.price.monthly && isAnnual ? ` · billed annually` : ''}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: tier.highlight ? 'rgba(15,158,138,0.3)' : '#dcfce7' }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke={tier.highlight ? '#0f9e8a' : '#166534'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className={`text-sm ${tier.highlight ? 'text-[#cbd5e1]' : 'text-[#475569]'}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref}
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  tier.highlight
                    ? 'bg-[#0f9e8a] text-white hover:bg-[#0c8a78] shadow-md'
                    : 'bg-[#f8fafb] text-[#0f172a] border border-[#e2e8f0] hover:border-[#0f9e8a] hover:text-[#0f9e8a]'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="text-h3 text-[#0f172a] text-center mb-8">
            How Medley HR compares
          </h3>
          <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
            <div className="grid grid-cols-4 bg-[#f8fafb] border-b border-[#e2e8f0]">
              <div className="p-4">
                <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">Feature</p>
              </div>
              {['Medley HR', 'Keka', 'Zoho Payroll'].map((name, i) => (
                <div key={name} className={`p-4 text-center ${i === 0 ? 'bg-[#e6f7f5]' : ''}`}>
                  <p className={`text-xs font-bold uppercase tracking-wider ${i === 0 ? 'text-[#0f9e8a]' : 'text-[#94a3b8]'}`}>
                    {name}
                  </p>
                </div>
              ))}
            </div>

            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 border-b border-[#f1f5f9] ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafbfc]'}`}
              >
                <div className="p-4">
                  <p className="text-sm text-[#0f172a] font-medium">{row.feature}</p>
                </div>
                <div className="p-4 bg-[#e6f7f5]/40">
                  <Check value={row.medley} />
                </div>
                <div className="p-4">
                  <Check value={row.keka} />
                </div>
                <div className="p-4">
                  <Check value={row.zoho} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#94a3b8] mt-4">
            Feature comparison based on publicly available information. Last updated May 2026.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
