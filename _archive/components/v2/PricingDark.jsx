'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const TIERS = [
  {
    num: '001',
    name: 'Starter',
    tagline: 'For teams getting started',
    price: { monthly: 49, annual: 39 },
    employees: 'Up to 25 employees',
    cta: 'Start free trial',
    href: 'https://app.medleyhr.com/signup',
    highlight: false,
    features: [
      'Employee profiles & org chart',
      'Monthly payroll processing',
      'Leave & attendance tracking',
      'Employee self-service portal',
      'PF, ESI, TDS built in',
      'Payslip generation',
      'Email support',
    ],
  },
  {
    num: '002',
    name: 'Growth',
    tagline: 'For scaling businesses',
    price: { monthly: 79, annual: 63 },
    employees: 'Up to 200 employees',
    cta: 'Start free trial',
    href: 'https://app.medleyhr.com/signup',
    highlight: true,
    badge: 'Most popular',
    features: [
      'Everything in Starter',
      'Approval workflows',
      'Form 16 generation',
      'Loan & reimbursement mgmt',
      'Documents library',
      'Advanced reports & exports',
      'Priority email + chat support',
    ],
  },
  {
    num: '003',
    name: 'Enterprise',
    tagline: 'For large organizations',
    price: { monthly: null, annual: null },
    employees: '200+ employees, custom',
    cta: 'Talk to our team',
    href: '#contact',
    highlight: false,
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      'Custom onboarding & migration',
      'API access & integrations',
      'Multi-entity payroll',
      'Custom approval chains',
      'SLA-backed support',
    ],
  },
]

export default function PricingDark() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" style={{
      background: '#0f1014', padding: '96px 0',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span style={{
            display: 'inline-block', padding: '5px 14px',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999,
            fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500,
            letterSpacing: '0.04em', marginBottom: 20,
          }}>
            Pricing
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 800,
            color: 'white', lineHeight: 1.1, letterSpacing: '-0.025em',
            margin: '0 0 14px',
          }}>
            Pricing that grows with you —<br />
            <span style={{ color: '#0f9e8a' }}>not against you.</span>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', margin: '0 0 32px' }}>
            No surprise fees. No per-module charges. Everything included.
          </p>

          {/* Toggle */}
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'rgba(255,255,255,0.05)', borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.08)', padding: 4,
          }}>
            {[{ label: 'Monthly', val: false }, { label: 'Annual', val: true }].map(({ label, val }) => (
              <button
                key={label}
                onClick={() => setAnnual(val)}
                style={{
                  padding: '8px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                  background: annual === val ? 'rgba(255,255,255,0.12)' : 'transparent',
                  color: annual === val ? 'white' : 'rgba(255,255,255,0.4)',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                {label}
                {val && (
                  <span style={{
                    padding: '2px 8px', background: '#0f9e8a',
                    borderRadius: 999, fontSize: 10, fontWeight: 700, color: 'white',
                  }}>
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                borderRadius: 20, padding: '28px 28px 32px',
                background: tier.highlight ? '#0f172a' : '#14161a',
                border: tier.highlight ? '1px solid rgba(15,158,138,0.3)' : '1px solid rgba(255,255,255,0.07)',
                position: 'relative', display: 'flex', flexDirection: 'column',
                transform: tier.highlight ? 'scale(1.02)' : 'none',
              }}
            >
              {/* Number tag */}
              <div style={{
                position: 'absolute', top: 20, right: 20,
                fontSize: 11, color: 'rgba(255,255,255,0.25)',
                fontWeight: 600, letterSpacing: '0.06em',
              }}>
                / {tier.num}
              </div>

              {tier.badge && (
                <div style={{
                  position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
                  padding: '4px 14px', background: '#0f9e8a', borderRadius: 999,
                  fontSize: 11, fontWeight: 700, color: 'white', whiteSpace: 'nowrap',
                }}>
                  {tier.badge}
                </div>
              )}

              {/* Header */}
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0f9e8a', margin: '0 0 4px' }}>
                  {tier.name}
                </p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '0 0 18px' }}>
                  {tier.tagline}
                </p>

                {tier.price.monthly !== null ? (
                  <>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 4 }}>
                      <span style={{ fontSize: 40, fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>
                        ₹{annual ? tier.price.annual : tier.price.monthly}
                      </span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>
                        /emp/mo
                      </span>
                    </div>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
                      {tier.employees}{annual ? ' · billed annually' : ''}
                    </p>
                  </>
                ) : (
                  <>
                    <p style={{ fontSize: 32, fontWeight: 800, color: 'white', margin: '0 0 4px', letterSpacing: '-0.03em' }}>
                      Custom
                    </p>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
                      {tier.employees}
                    </p>
                  </>
                )}
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                {tier.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{
                      width: 16, height: 16, borderRadius: '50%',
                      background: tier.highlight ? 'rgba(15,158,138,0.25)' : 'rgba(15,158,138,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: 1,
                    }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke="#0f9e8a" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                style={{
                  display: 'block', textAlign: 'center',
                  padding: '13px', borderRadius: 10,
                  background: tier.highlight ? '#0f9e8a' : 'rgba(255,255,255,0.07)',
                  border: tier.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  color: 'white', fontSize: 14, fontWeight: 600,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
