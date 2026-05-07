'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'
const BORDER = `2px solid ${DARK}`

const TIERS = [
  {
    num: '01', name: 'STARTER', price: 'FREE',
    sub: 'Up to 10 employees',
    bg: 'white', textDark: true,
    features: ['Core HR and employee database', 'Payslip generation', 'Leave management', 'Employee self-service', 'Basic reports'],
    cta: 'START FOR FREE', ctaBg: DARK, ctaColor: 'white',
    footnote: 'No credit card needed.',
  },
  {
    num: '02', name: 'GROWTH', price: '₹35', unit: '/emp/mo',
    annualPrice: '₹29',
    sub: 'Full suite for growing teams',
    badge: 'MOST POPULAR',
    bg: TEAL, textDark: false,
    features: ['Everything in Starter', 'Full payroll + approval workflow', 'Attendance and working hours', 'Loans and reimbursements', 'Form 16 and TDS', 'Salary revision approvals', 'Multi-branch reporting'],
    cta: 'START FREE TRIAL', ctaBg: AMBER, ctaColor: DARK,
    footnote: '2 months free on annual.',
  },
  {
    num: '03', name: 'SCALE', price: '₹55', unit: '/emp/mo',
    annualPrice: '₹46',
    sub: 'Everything, plus team status',
    bg: DARK, textDark: false,
    features: ['Everything in Growth', 'Team status module', 'Escalation management', 'Direct bank integration', 'Custom salary components', 'Priority support', 'Dedicated account manager'],
    cta: 'START FREE TRIAL', ctaBg: AMBER, ctaColor: DARK,
    footnote: '2 months free on annual.',
  },
]

export default function PricingV4() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" style={{ padding: '16px 16px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div className="v4-pricing-header" style={{
          background: AMBER, borderRadius: 18, border: BORDER,
          padding: '32px 36px', marginBottom: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20,
        }}>
          <h2 className="v4-display" style={{ fontSize: 'clamp(32px,4vw,56px)', color: DARK, margin: 0 }}>
            Transparent Pricing.<br /><span style={{ color: TEAL }}>No Surprises.</span>
          </h2>
          <div className="v4-pricing-header-right" style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
            <p style={{ fontSize: 14, color: DARK, opacity: 0.7, margin: 0, textAlign: 'right' }}>
              No setup fee. No implementation cost.<br />No contracts. Just pay for your team.
            </p>
            {/* Toggle */}
            <div style={{
              display: 'inline-flex', background: DARK,
              borderRadius: 10, padding: 4,
            }}>
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

        {/* Tier cards */}
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
                position: 'relative',
              }}
            >
              {tier.badge && (
                <div style={{
                  background: AMBER, padding: '6px 0', textAlign: 'center',
                  borderBottom: BORDER,
                }}>
                  <span style={{
                    fontFamily: 'Anton, Impact, sans-serif',
                    fontSize: 12, color: DARK, letterSpacing: '0.08em',
                  }}>
                    {tier.badge}
                  </span>
                </div>
              )}

              <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div>
                    <p style={{
                      fontFamily: 'Anton, Impact, sans-serif',
                      fontSize: 22, margin: '0 0 4px',
                      color: tier.textDark ? DARK : 'white', letterSpacing: '0.03em',
                    }}>
                      {tier.name}
                    </p>
                    <p style={{ fontSize: 12, color: tier.textDark ? '#64748b' : 'rgba(255,255,255,0.45)', margin: 0 }}>
                      {tier.sub}
                    </p>
                  </div>
                  <span style={{
                    fontFamily: 'Anton, Impact, sans-serif', fontSize: 11,
                    color: tier.textDark ? '#94a3b8' : 'rgba(255,255,255,0.25)',
                    letterSpacing: '0.08em',
                  }}>
                    / {tier.num}
                  </span>
                </div>

                {/* Price */}
                <div style={{ marginBottom: 24, borderTop: `1px solid ${tier.textDark ? '#e2e8f0' : 'rgba(255,255,255,0.12)'}`, paddingTop: 20 }}>
                  {tier.price === 'FREE' ? (
                    <span className="v4-display" style={{ fontSize: 52, color: tier.textDark ? DARK : 'white' }}>FREE</span>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4 }}>
                      <span className="v4-display" style={{ fontSize: 52, color: tier.textDark ? DARK : 'white', lineHeight: 1 }}>
                        {annual ? tier.annualPrice : tier.price}
                      </span>
                      <span style={{ fontSize: 13, color: tier.textDark ? '#94a3b8' : 'rgba(255,255,255,0.4)', marginBottom: 6 }}>
                        {tier.unit}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul style={{ listStyle: 'none', margin: '0 0 24px', padding: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {tier.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <span style={{
                        fontFamily: 'Anton, Impact, sans-serif', fontSize: 12,
                        color: tier.textDark ? TEAL : (tier.bg === TEAL ? AMBER : TEAL),
                        flexShrink: 0,
                      }}>—</span>
                      <span style={{ fontSize: 13, color: tier.textDark ? '#475569' : 'rgba(255,255,255,0.55)', lineHeight: 1.45 }}>{f}</span>
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
                <p style={{ fontSize: 11, textAlign: 'center', marginTop: 8, color: tier.textDark ? '#94a3b8' : 'rgba(255,255,255,0.25)' }}>
                  {tier.footnote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

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
