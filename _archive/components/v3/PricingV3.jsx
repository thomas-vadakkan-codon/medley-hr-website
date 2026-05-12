'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'

const TIERS = [
  {
    num: '001', name: 'Starter', price: 'Free',
    sub: 'Up to 10 employees',
    cta: 'Start for free', href: 'https://app.medleyhr.com/signup',
    highlight: false, color: TEAL,
    features: [
      'Core HR and employee database',
      'Payslip generation',
      'Leave management',
      'Employee self-service portal',
      'Basic reports',
    ],
    footnote: 'No credit card needed.',
  },
  {
    num: '002', name: 'Growth', price: '₹35', unit: '/employee/month',
    annualPrice: '₹29',
    sub: 'Full suite for growing teams',
    cta: 'Start free trial', href: 'https://app.medleyhr.com/signup',
    highlight: true, badge: 'Most popular', color: TEAL,
    features: [
      'Everything in Starter',
      'Full payroll with approval workflow',
      'Attendance and working hours',
      'Loans and reimbursement tracking',
      'Form 16 and TDS compliance',
      'Salary revision approvals',
      'Advanced reports and multi-branch',
    ],
    footnote: '2 months free on annual billing.',
  },
  {
    num: '003', name: 'Scale', price: '₹55', unit: '/employee/month',
    annualPrice: '₹46',
    sub: 'Everything, plus team status',
    cta: 'Start free trial', href: 'https://app.medleyhr.com/signup',
    highlight: false, color: '#8b5cf6',
    features: [
      'Everything in Growth',
      'Team status module (standups, tasks)',
      'Escalation management',
      'Direct bank integration',
      'Custom salary components',
      'Priority support',
      'Dedicated account manager',
    ],
    footnote: '2 months free on annual billing.',
  },
]

function TierPattern({ color }) {
  const id = `tier-${color.replace('#', '')}`
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4 }}>
      <defs>
        <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill={color} opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <line x1="-30" y1="100%" x2="130%" y2="-10%" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
    </svg>
  )
}

export default function PricingV3() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" style={{
      background: '#0f1014',
      padding: '96px 40px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 52 }}
        >
          <span style={{
            display: 'inline-block', padding: '5px 14px',
            border: '1px solid rgba(255,255,255,0.14)', borderRadius: 999,
            fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500,
            letterSpacing: '0.05em', marginBottom: 20,
          }}>
            Pricing
          </span>
          <h2 style={{
            fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800,
            color: 'white', letterSpacing: '-0.025em', margin: '0 0 10px',
          }}>
            Transparent pricing.<br />
            <span style={{ color: TEAL }}>No surprises.</span>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.38)', margin: '0 0 28px', maxWidth: 440 }}>
            No setup fee. No implementation cost. No contracts. Just pay for your team.
          </p>

          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 11, padding: 4,
          }}>
            {[{ label: 'Monthly', val: false }, { label: 'Annual — 2 months free', val: true }].map(({ label, val }) => (
              <button key={label} onClick={() => setAnnual(val)} style={{
                padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                background: annual === val ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: annual === val ? 'white' : 'rgba(255,255,255,0.38)',
                border: 'none', cursor: 'pointer',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}>
                {label}
                {val && annual && (
                  <span style={{
                    marginLeft: 6, padding: '1px 7px', background: TEAL,
                    borderRadius: 999, fontSize: 10, fontWeight: 700, color: 'white',
                  }}>
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, alignItems: 'start' }}>
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: tier.highlight ? '#0f172a' : '#14161a',
                borderRadius: 20, overflow: 'hidden',
                border: tier.highlight ? `1px solid ${TEAL}30` : '1px solid rgba(255,255,255,0.07)',
                position: 'relative',
                transform: tier.highlight ? 'scale(1.02)' : 'none',
                display: 'flex', flexDirection: 'column',
              }}
            >
              {tier.badge && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                  padding: '4px 14px', background: TEAL, borderRadius: 999,
                  fontSize: 11, fontWeight: 700, color: 'white', whiteSpace: 'nowrap',
                }}>
                  {tier.badge}
                </div>
              )}

              <div style={{
                height: 72, position: 'relative',
                background: `linear-gradient(135deg,#0f1318,${tier.color}18)`,
                overflow: 'hidden',
              }}>
                <TierPattern color={tier.color} />
                <div style={{
                  position: 'absolute', top: 14, right: 16,
                  fontSize: 11, color: 'rgba(255,255,255,0.22)', fontWeight: 600, letterSpacing: '0.06em',
                }}>
                  / {tier.num}
                </div>
                <div style={{
                  position: 'absolute', bottom: 14, left: 20,
                  width: 7, height: 7, borderRadius: '50%',
                  background: tier.color, boxShadow: `0 0 8px ${tier.color}70`,
                }} />
              </div>

              <div style={{ padding: '20px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: TEAL, margin: '0 0 6px',
                }}>
                  {tier.name}
                </p>

                <div style={{ marginBottom: 6 }}>
                  {tier.price === 'Free' ? (
                    <span style={{ fontSize: 38, fontWeight: 800, color: 'white', letterSpacing: '-0.03em' }}>Free</span>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4 }}>
                      <span style={{ fontSize: 38, fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>
                        {annual ? tier.annualPrice : tier.price}
                      </span>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 5 }}>
                        {tier.unit}
                      </span>
                    </div>
                  )}
                </div>

                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.32)', margin: '0 0 22px' }}>{tier.sub}</p>

                <ul style={{ listStyle: 'none', margin: '0 0 24px', padding: 0, display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
                  {tier.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                      <div style={{
                        width: 15, height: 15, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                        background: `${TEAL}22`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3 5.5L6.5 2" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.45 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href={tier.href} style={{
                  display: 'block', textAlign: 'center', padding: '13px',
                  borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  background: tier.highlight ? TEAL : 'rgba(255,255,255,0.06)',
                  border: tier.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  color: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}>
                  {tier.cta}
                </a>
                <p style={{ fontSize: 11, textAlign: 'center', marginTop: 10, color: 'rgba(255,255,255,0.22)' }}>
                  {tier.footnote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 28 }}>
          {/* Migration callout */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              padding: '18px 24px',
              background: `${TEAL}08`, border: `1px solid ${TEAL}20`,
              borderRadius: 14,
            }}
          >
            <p style={{ fontSize: 14, fontWeight: 600, color: 'white', margin: '0 0 4px' }}>
              Coming from another HRMS?
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
              We'll help you migrate in days, not months. Connect your previous payroll data and pick up right where you left off.
            </p>
          </motion.div>

          {/* Customisation callout */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.07 }}
            style={{
              padding: '18px 24px',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 14,
            }}
          >
            <p style={{ fontSize: 14, fontWeight: 600, color: 'white', margin: '0 0 4px' }}>
              Need something specific?
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '0 0 12px' }}>
              We're open to building features our users ask for. If something is missing from your workflow, tell us — we listen.
            </p>
            <a href="mailto:hello@medleyhr.com" style={{
              fontSize: 13, fontWeight: 600, color: TEAL, textDecoration: 'none',
              borderBottom: `1px solid ${TEAL}40`, paddingBottom: 1,
            }}>
              Raise a request →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
