'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'

const TIERS = [
  {
    num: '01', name: 'FREE',
    price: '₹0',
    sub: 'Always free · Up to 10 employees',
    bg: 'white', textDark: true,
    badge: null,
    includes: null,
    addOn: null,
    highlights: [
      'Up to 10 employees',
      'Record payrolls & view payslips',
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
      'Full payroll & compliance',
      'Attendance, loans & reimbursements',
      'Workflow rules & audit trail',
      'Custom salary components & FBP',
    ],
    cta: 'START 14-DAY TRIAL', ctaBg: AMBER, ctaColor: DARK,
    footnote: 'No credit card needed for trial.',
  },
  {
    num: '03', name: 'SCALE',
    price: '₹3,999', annualPrice: '₹3,332',
    sub: 'Everything in Growth, plus team ops',
    badge: null,
    bg: DARK, textDark: false,
    includes: '40 employees included',
    addOn: '₹100 / additional employee',
    highlights: [
      'Team status & escalations',
      'Direct bank integration',
      'Custom report builder',
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
      { feature: 'Prior payroll & previous employment data',   free: true,  growth: true,  scale: true  },
    ],
  },
  {
    label: 'People & HR',
    rows: [
      { feature: 'Employee database',                          free: true,  growth: true,  scale: true  },
      { feature: 'Employees',                                  free: 'Up to 10', growth: '25 included', scale: '40 included' },
      { feature: 'Unlimited branches',                         free: true,  growth: true,  scale: true  },
      { feature: 'Offer letters & onboarding',                 free: false, growth: false, scale: true  },
      { feature: 'Salary revision with audit trail',           free: false, growth: true,  scale: true  },
      { feature: 'Loans & salary advances',                    free: false, growth: true,  scale: true  },
      { feature: 'Reimbursements',                             free: false, growth: true,  scale: true  },
      { feature: 'Investment declarations',                    free: false, growth: true,  scale: true  },
      { feature: 'Payroll document storage',                   free: false, growth: true,  scale: true  },
    ],
  },
  {
    label: 'Leave & Attendance',
    rows: [
      { feature: 'Leave management',                           free: true,  growth: true,  scale: true  },
      { feature: 'Configurable approval chains',               free: false, growth: true,  scale: true  },
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
      { feature: 'Payroll cost by department/branch',          free: true,  growth: true,  scale: true  },
      { feature: 'Multi-branch reporting',                     free: false, growth: true,  scale: true  },
      { feature: 'Custom report builder',                      free: false, growth: false, scale: true  },
      { feature: 'Multi-branch consolidated view',             free: false, growth: false, scale: true  },
    ],
  },
  {
    label: 'Admin & Automation',
    rows: [
      { feature: 'Customisable roles & permissions',           free: false, growth: true,  scale: true  },
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
  return <span style={{ fontSize: 12, fontWeight: 700, color: teal ? TEAL : DARK }}>{val}</span>
}

export default function PricingV4() {
  const [annual, setAnnual] = useState(false)
  const [tableOpen, setTableOpen] = useState(false)

  return (
    <section id="pricing" style={{ padding: '16px 16px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div className="v4-pricing-header" style={{
          background: 'var(--color-v4-amber)', borderRadius: 18, border: 'var(--v4-border)',
          padding: '32px 36px', marginBottom: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20,
        }}>
          <div>
            <h2 className="v4-display" style={{ fontSize: 'clamp(32px,4vw,56px)', color: 'var(--color-v4-dark)', margin: '0 0 8px' }}>
              Transparent Pricing.<br /><span style={{ color: 'var(--color-v4-teal)' }}>No Surprises.</span>
            </h2>
            <p style={{ fontSize: 13, color: 'var(--color-v4-dark)', opacity: 0.6, margin: 0 }}>
              Per organisation · Not per employee · Unlimited branches
            </p>
          </div>
          <div className="v4-pricing-header-right" style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
            <p style={{ fontSize: 13, color: 'var(--color-v4-dark)', opacity: 0.7, margin: 0, textAlign: 'right' }}>
              No setup fee. No implementation cost.<br />No contracts. Cancel anytime.
            </p>
            <div style={{ display: 'inline-flex', background: 'var(--color-v4-dark)', borderRadius: 10, padding: 4 }}>
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
        <div className="v4-pricing-tiers" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, paddingTop: 18 }}>
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ position: 'relative' }}
            >
              {tier.badge && (
                <div style={{
                  position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--color-v4-amber)', border: 'var(--v4-border)', borderRadius: 999,
                  padding: '4px 16px', whiteSpace: 'nowrap', zIndex: 1,
                }}>
                  <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 11, color: DARK, letterSpacing: '0.08em' }}>
                    {tier.badge}
                  </span>
                </div>
              )}
              <div style={{
                background: tier.bg, borderRadius: 18, border: 'var(--v4-border)',
                overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%',
              }}>

              <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Plan name */}
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 22, margin: '0 0 4px', color: tier.textDark ? DARK : 'white', letterSpacing: '0.03em' }}>
                    {tier.name}
                  </p>
                  <p style={{ fontSize: 12, color: tier.textDark ? '#64748b' : 'rgba(255,255,255,0.45)', margin: 0 }}>
                    {tier.sub}
                  </p>
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
                    <div style={{
                      display: 'flex', flexDirection: 'column', gap: 4,
                      background: tier.textDark ? '#f1f5f9' : 'rgba(255,255,255,0.1)',
                      borderRadius: 8, padding: '8px 12px', marginTop: 4,
                    }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: tier.textDark ? DARK : 'white' }}>
                        {tier.includes}
                      </span>
                      <span style={{ fontSize: 12, fontWeight: 500, color: tier.textDark ? '#64748b' : 'rgba(255,255,255,0.6)' }}>
                        + {tier.addOn}
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
                  background: tier.ctaBg, border: 'var(--v4-border)',
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
            </div>
            </motion.div>
          ))}
        </div>

        {/* Compare all features toggle — full width */}
        <button
          onClick={() => setTableOpen(!tableOpen)}
          style={{
            width: '100%', marginTop: 10,
            background: 'white', border: 'var(--v4-border)', borderRadius: 14,
            padding: '16px 28px', fontSize: 13, fontWeight: 700, color: 'var(--color-v4-dark)',
            cursor: 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif',
            letterSpacing: '0.03em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            position: 'sticky', top: 76, zIndex: 25,
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          }}
        >
          {tableOpen ? 'Hide comparison' : 'Compare all features'}
          <span style={{ fontSize: 16, transform: tableOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>↓</span>
        </button>

        {/* Full comparison table */}
        {tableOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{ marginTop: 10, borderRadius: 18, border: 'var(--v4-border)', overflow: 'clip' }}
          >
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, background: 'white', borderRadius: 18 }}>
              {/* Sticky thead — border-collapse:separate is required for sticky to work */}
              <thead>
                <tr>
                  <th style={{
                    padding: '16px 24px', background: 'white', textAlign: 'left',
                    borderBottom: 'var(--v4-border)',
                    position: 'sticky', top: 144, zIndex: 20,
                    borderRadius: '16px 0 0 0',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  }} />
                  {[
                    { name: 'FREE',   bg: 'white', color: DARK,    radius: '0 0 0 0' },
                    { name: 'GROWTH', bg: TEAL,    color: 'white', radius: '0 0 0 0' },
                    { name: 'SCALE',  bg: DARK,    color: 'white', radius: '0 16px 0 0' },
                  ].map(col => (
                    <th key={col.name} style={{
                      padding: '16px 20px', textAlign: 'center', width: 120,
                      background: col.bg, borderBottom: 'var(--v4-border)', borderLeft: 'var(--v4-border)',
                      position: 'sticky', top: 144, zIndex: 20,
                      borderRadius: col.radius,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    }}>
                      <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 13, letterSpacing: '0.06em', color: col.color }}>
                        {col.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TABLE_SECTIONS.map((section, si) => (
                  <>
                    {/* Section label — sticky on td, not tr */}
                    <tr key={`label-${section.label}`}>
                      <td colSpan={4} style={{
                        padding: '9px 24px',
                        background: '#f1f5f9',
                        borderTop: si > 0 ? '1px solid #e2e8f0' : 'none',
                        borderBottom: '1px solid #e2e8f0',
                        position: 'sticky', top: 193, zIndex: 10,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                      }}>
                        <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 11, letterSpacing: '0.1em', color: '#64748b' }}>
                          {section.label.toUpperCase()}
                        </span>
                      </td>
                    </tr>

                    {/* Feature rows */}
                    {section.rows.map((row, ri) => {
                      const isLastRow = si === TABLE_SECTIONS.length - 1 && ri === section.rows.length - 1
                      const rowBorder = ri < section.rows.length - 1 ? '1px solid #f1f5f9' : si < TABLE_SECTIONS.length - 1 ? '1px solid #e2e8f0' : 'none'
                      return (
                        <tr key={row.feature} style={{ background: ri % 2 === 0 ? 'white' : '#fafafa' }}>
                          <td style={{
                            padding: '13px 24px', fontSize: 13, color: '#475569',
                            borderBottom: rowBorder,
                            borderRadius: isLastRow ? '0 0 0 16px' : 0,
                          }}>
                            {row.feature}
                          </td>
                          {[row.free, row.growth, row.scale].map((val, ci) => (
                            <td key={ci} style={{
                              padding: '13px 12px', width: 120,
                              borderLeft: '1px solid #f1f5f9',
                              borderBottom: rowBorder,
                              borderRadius: isLastRow && ci === 2 ? '0 0 16px 0' : 0,
                              verticalAlign: 'middle',
                            }}>
                              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Check val={val} teal={ci === 1} />
                              </div>
                            </td>
                          ))}
                        </tr>
                      )
                    })}
                  </>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}


      </div>
    </section>
  )
}
