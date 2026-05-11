'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'
const BORDER = `2px solid ${DARK}`

const TIERS = [
  {
    num: '01', name: 'FREE',
    price: '₹0',
    sub: 'Always free · Unlimited employees',
    bg: 'white', textDark: true,
    badge: null,
    includes: null,
    addOn: null,
    highlights: [
      'Unlimited employees',
      'Unlimited branches',
      'Leave management',
      'Employee self-service portal',
    ],
    cta: 'START FOR FREE', ctaBg: DARK, ctaColor: 'white',
    footnote: 'No credit card needed. Ever.',
  },
  {
    num: '02', name: 'GROWTH',
    price: '₹1,999', annualPrice: '₹1,666',
    sub: 'Full payroll + HR operations',
    badge: 'MOST POPULAR',
    bg: TEAL, textDark: false,
    includes: '25 employees included',
    addOn: '₹80 / additional employee',
    highlights: [
      'Everything in Free',
      'Full payroll & compliance',
      'Attendance, loans & reimbursements',
      'Workflow rules & audit trail',
    ],
    cta: 'START 14-DAY TRIAL', ctaBg: AMBER, ctaColor: DARK,
    footnote: 'No credit card needed for trial.',
  },
  {
    num: '03', name: 'SCALE',
    price: '₹3,999', annualPrice: '₹3,332',
    sub: 'Full ops + team visibility',
    badge: null,
    bg: DARK, textDark: false,
    includes: '40 employees included',
    addOn: '₹100 / additional employee',
    highlights: [
      'Everything in Growth',
      'Team status & escalations',
      'Direct bank integration',
      'Priority support & account manager',
    ],
    cta: 'START 14-DAY TRIAL', ctaBg: AMBER, ctaColor: DARK,
    footnote: 'No credit card needed for trial.',
  },
]

const TABLE_SECTIONS = [
  {
    label: 'Payroll',
    rows: [
      { feature: 'Full payroll with approval workflow',         free: false, growth: true,  scale: true  },
      { feature: 'TDS, PF, ESI, PT, Form 16',                  free: false, growth: true,  scale: true  },
      { feature: 'TDS challan recording',                      free: false, growth: true,  scale: true  },
      { feature: 'Bonus & off-cycle pay runs',                  free: false, growth: true,  scale: true  },
      { feature: 'Salary hold, LOP & reversal',                free: false, growth: true,  scale: true  },
      { feature: 'Advanced salary components & formulas',      free: false, growth: true,  scale: true  },
      { feature: 'FBP — HRA, LTA, food coupons',              free: false, growth: true,  scale: true  },
      { feature: 'Prior payroll & previous employment data',   free: false, growth: true,  scale: true  },
      { feature: 'Variable pay',                               free: false, growth: true,  scale: true  },
    ],
  },
  {
    label: 'People & HR',
    rows: [
      { feature: 'Employee database',                          free: true,  growth: true,  scale: true  },
      { feature: 'Employees',                                  free: 'Unlimited', growth: '25 + ₹80/add', scale: '40 + ₹100/add' },
      { feature: 'Unlimited branches',                         free: true,  growth: true,  scale: true  },
      { feature: 'Offer letters & onboarding',                 free: false, growth: true,  scale: true  },
      { feature: 'Salary revision with audit trail',           free: false, growth: true,  scale: true  },
      { feature: 'Loans & salary advances',                    free: false, growth: true,  scale: true  },
      { feature: 'Reimbursements',                             free: false, growth: true,  scale: true  },
      { feature: 'Investment declarations',                    free: false, growth: true,  scale: true  },
      { feature: 'Payroll document storage',                   free: false, growth: true,  scale: true  },
      { feature: 'Custom fields on employee records',          free: false, growth: true,  scale: true  },
    ],
  },
  {
    label: 'Leave & Attendance',
    rows: [
      { feature: 'Leave management',                           free: true,  growth: true,  scale: true  },
      { feature: 'Configurable approval chains',               free: true,  growth: true,  scale: true  },
      { feature: 'Attendance & working hours',                 free: false, growth: true,  scale: true  },
      { feature: 'Overtime calculation',                       free: false, growth: true,  scale: true  },
      { feature: 'Rectification requests',                     free: false, growth: true,  scale: true  },
    ],
  },
  {
    label: 'Employee Self-Service',
    rows: [
      { feature: 'Self-service portal access',                 free: true,  growth: true,  scale: true  },
      { feature: 'Payslip viewing',                            free: true,  growth: true,  scale: true  },
      { feature: 'Leave application & balance tracking',       free: true,  growth: true,  scale: true  },
      { feature: 'Payslip download & Form 16',                 free: false, growth: true,  scale: true  },
      { feature: 'Reimbursement & loan tracking',              free: false, growth: true,  scale: true  },
      { feature: 'Company announcements & policies',           free: false, growth: true,  scale: true  },
    ],
  },
  {
    label: 'Reports & Compliance',
    rows: [
      { feature: 'Pre-made payroll reports',                   free: false, growth: true,  scale: true  },
      { feature: 'Module-generated reports',                   free: false, growth: true,  scale: true  },
      { feature: 'Payroll cost by department/branch',          free: false, growth: true,  scale: true  },
      { feature: 'Multi-branch reporting',                     free: false, growth: true,  scale: true  },
      { feature: 'Custom report builder',                      free: false, growth: false, scale: true  },
      { feature: 'Multi-branch consolidated view',             free: false, growth: false, scale: true  },
    ],
  },
  {
    label: 'Admin & Automation',
    rows: [
      { feature: 'Customisable roles & permissions',           free: false, growth: true,  scale: true  },
      { feature: 'Workflow rules',                             free: false, growth: true,  scale: true  },
      { feature: 'Audit trail',                                free: false, growth: true,  scale: true  },
      { feature: 'Template library',                           free: false, growth: true,  scale: true  },
    ],
  },
  {
    label: 'Team & Operations',
    rows: [
      { feature: 'Team status module',                         free: false, growth: false, scale: true  },
      { feature: 'Daily standup submissions',                  free: false, growth: false, scale: true  },
      { feature: 'Task assignment & tracking',                 free: false, growth: false, scale: true  },
      { feature: 'Escalation management',                      free: false, growth: false, scale: true  },
      { feature: 'Direct bank integration',                    free: false, growth: false, scale: true  },
    ],
  },
  {
    label: 'Storage & Support',
    rows: [
      { feature: 'Org cloud storage',                          free: '1GB', growth: '5GB', scale: '10GB' },
      { feature: 'Email support',                              free: true,  growth: true,  scale: true  },
      { feature: 'Priority support',                           free: false, growth: false, scale: true  },
      { feature: 'Dedicated account manager',                  free: false, growth: false, scale: true  },
    ],
  },
]

function Check({ val, teal }) {
  if (val === false) return <span style={{ color: '#cbd5e1', fontSize: 16 }}>—</span>
  if (val === true) return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" fill={teal ? TEAL : DARK} />
      <polyline points="5,9 8,12 13,6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
  return <span style={{ fontSize: 12, fontWeight: 700, color: teal ? 'white' : DARK }}>{val}</span>
}

export default function PricingV4() {
  const [annual, setAnnual] = useState(false)
  const [tableOpen, setTableOpen] = useState(false)

  return (
    <section id="pricing" style={{ padding: '16px 16px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div className="v4-pricing-header" style={{
          background: AMBER, borderRadius: 18, border: BORDER,
          padding: '32px 36px', marginBottom: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20,
        }}>
          <div>
            <h2 className="v4-display" style={{ fontSize: 'clamp(32px,4vw,56px)', color: DARK, margin: '0 0 8px' }}>
              Transparent Pricing.<br /><span style={{ color: TEAL }}>No Surprises.</span>
            </h2>
            <p style={{ fontSize: 13, color: DARK, opacity: 0.6, margin: 0 }}>
              Per organisation · Not per employee · Unlimited branches
            </p>
          </div>
          <div className="v4-pricing-header-right" style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
            <p style={{ fontSize: 13, color: DARK, opacity: 0.7, margin: 0, textAlign: 'right' }}>
              No setup fee. No implementation cost.<br />No contracts. Cancel anytime.
            </p>
            <div style={{ display: 'inline-flex', background: DARK, borderRadius: 10, padding: 4 }}>
              {[{ label: 'Monthly', val: false }, { label: 'Annual — 2 months free', val: true }].map(({ label, val }) => (
                <button key={label} onClick={() => setAnnual(val)} style={{
                  padding: '7px 16px', borderRadius: 7,
                  background: annual === val ? TEAL : 'transparent',
                  color: annual === val ? 'white' : 'rgba(255,255,255,0.4)',
                  border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 700,
                  fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.03em',
                }}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tier cards — clean, minimal */}
        <div className="v4-pricing-tiers" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: tier.bg, borderRadius: 18, border: BORDER,
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
              }}
            >
              {tier.badge && (
                <div style={{ background: AMBER, padding: '6px 0', textAlign: 'center', borderBottom: BORDER }}>
                  <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 12, color: DARK, letterSpacing: '0.08em' }}>
                    {tier.badge}
                  </span>
                </div>
              )}

              <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Plan name */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div>
                    <p style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 22, margin: '0 0 4px', color: tier.textDark ? DARK : 'white', letterSpacing: '0.03em' }}>
                      {tier.name}
                    </p>
                    <p style={{ fontSize: 12, color: tier.textDark ? '#64748b' : 'rgba(255,255,255,0.45)', margin: 0 }}>
                      {tier.sub}
                    </p>
                  </div>
                  <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 11, color: tier.textDark ? '#94a3b8' : 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>
                    / {tier.num}
                  </span>
                </div>

                {/* Price block */}
                <div style={{ borderTop: `1px solid ${tier.textDark ? '#e2e8f0' : 'rgba(255,255,255,0.12)'}`, paddingTop: 20, marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginBottom: 6 }}>
                    <span className="v4-display" style={{ fontSize: 48, color: tier.textDark ? DARK : 'white', lineHeight: 1 }}>
                      {tier.name === 'FREE' ? '₹0' : (annual ? tier.annualPrice : tier.price)}
                    </span>
                    <span style={{ fontSize: 12, color: tier.textDark ? '#94a3b8' : 'rgba(255,255,255,0.4)', marginBottom: 7 }}>
                      /org/month
                    </span>
                  </div>
                  {tier.includes && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: tier.textDark ? '#475569' : 'rgba(255,255,255,0.7)' }}>
                        {tier.includes}
                      </span>
                      <span style={{ fontSize: 11, color: tier.textDark ? '#94a3b8' : 'rgba(255,255,255,0.35)' }}>
                        {tier.addOn}
                      </span>
                    </div>
                  )}
                </div>

                {/* 4 key highlights only */}
                <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {tier.highlights.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                        <circle cx="8" cy="8" r="7" fill={tier.bg === TEAL ? 'rgba(255,255,255,0.2)' : tier.bg === DARK ? 'rgba(255,255,255,0.1)' : TEAL} />
                        <polyline points="4.5,8 7,10.5 11.5,5.5" stroke={tier.bg === 'white' ? 'white' : 'white'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span style={{ fontSize: 13, color: tier.textDark ? '#334155' : 'rgba(255,255,255,0.75)', lineHeight: 1.4, fontWeight: 500 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="https://app.medleyhr.com/signup" style={{
                  display: 'block', textAlign: 'center', padding: '13px',
                  background: tier.ctaBg, border: `2px solid ${DARK}`,
                  borderRadius: 10, fontSize: 13, fontWeight: 700, color: tier.ctaColor,
                  textDecoration: 'none', letterSpacing: '0.04em',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}>
                  {tier.cta}
                </a>
                <p style={{ fontSize: 11, textAlign: 'center', marginTop: 8, color: tier.textDark ? '#94a3b8' : 'rgba(255,255,255,0.3)' }}>
                  {tier.footnote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compare all features toggle */}
        <div style={{ marginTop: 10, textAlign: 'center' }}>
          <button
            onClick={() => setTableOpen(!tableOpen)}
            style={{
              background: 'white', border: BORDER, borderRadius: 10,
              padding: '12px 28px', fontSize: 13, fontWeight: 700, color: DARK,
              cursor: 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif',
              letterSpacing: '0.03em', display: 'inline-flex', alignItems: 'center', gap: 8,
            }}
          >
            {tableOpen ? 'Hide' : 'Compare all features'}
            <span style={{ fontSize: 16, transform: tableOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>↓</span>
          </button>
        </div>

        {/* Full comparison table */}
        {tableOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{ marginTop: 10, background: 'white', borderRadius: 18, border: BORDER, overflow: 'hidden' }}
          >
            {/* Table header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px 120px', borderBottom: BORDER }}>
              <div style={{ padding: '16px 24px' }} />
              {['FREE', 'GROWTH', 'SCALE'].map((name, i) => (
                <div key={name} style={{
                  padding: '16px 12px', textAlign: 'center',
                  background: i === 1 ? TEAL : i === 2 ? DARK : 'transparent',
                  borderLeft: BORDER,
                }}>
                  <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 13, letterSpacing: '0.06em', color: i === 0 ? DARK : 'white' }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>

            {/* Sections */}
            {TABLE_SECTIONS.map((section, si) => (
              <div key={section.label}>
                {/* Section label */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px 120px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <div style={{ padding: '10px 24px' }}>
                    <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 11, letterSpacing: '0.1em', color: '#94a3b8' }}>
                      {section.label.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ borderLeft: '1px solid #e2e8f0' }} />
                  <div style={{ borderLeft: '1px solid #e2e8f0' }} />
                  <div style={{ borderLeft: '1px solid #e2e8f0' }} />
                </div>

                {/* Rows */}
                {section.rows.map((row, ri) => (
                  <div
                    key={row.feature}
                    style={{
                      display: 'grid', gridTemplateColumns: '1fr 120px 120px 120px',
                      borderBottom: ri < section.rows.length - 1 ? '1px solid #f1f5f9' : si < TABLE_SECTIONS.length - 1 ? '1px solid #e2e8f0' : 'none',
                      background: ri % 2 === 0 ? 'white' : '#fafafa',
                    }}
                  >
                    <div style={{ padding: '13px 24px', fontSize: 13, color: '#475569' }}>
                      {row.feature}
                    </div>
                    {[row.free, row.growth, row.scale].map((val, ci) => (
                      <div key={ci} style={{
                        padding: '13px 12px', textAlign: 'center',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderLeft: '1px solid #f1f5f9',
                      }}>
                        <Check val={val} teal={ci === 1} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        )}

        {/* Callouts row */}
        <div className="v4-pricing-callouts" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 10 }}>
          <div style={{ background: 'white', borderRadius: 14, border: BORDER, padding: '20px 24px' }}>
            <p style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 16, color: DARK, margin: '0 0 6px', letterSpacing: '0.03em' }}>
              COMING FROM ANOTHER HRMS?
            </p>
            <p style={{ fontSize: 13, color: '#64748b', margin: 0, lineHeight: 1.6 }}>
              Connect your previous payroll data and pick up right where you left off. Migration in days, not months.
            </p>
          </div>
          <div style={{ background: 'white', borderRadius: 14, border: BORDER, padding: '20px 24px' }}>
            <p style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 16, color: DARK, margin: '0 0 6px', letterSpacing: '0.03em' }}>
              NEED SOMETHING SPECIFIC?
            </p>
            <p style={{ fontSize: 13, color: '#64748b', margin: '0 0 12px', lineHeight: 1.6 }}>
              We build for our users. If something's missing from your workflow, raise a request — we listen.
            </p>
            <a href="mailto:hello@medleyhr.com" style={{ fontSize: 13, fontWeight: 600, color: TEAL, textDecoration: 'none', borderBottom: `1px solid ${TEAL}` }}>
              Raise a request →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
