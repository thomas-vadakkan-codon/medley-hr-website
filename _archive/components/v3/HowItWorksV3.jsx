'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'

const STEPS = [
  {
    num: '001', color: TEAL,
    title: 'Configure your organisation',
    desc: 'Set up departments, branches, salary components, and your pay schedule. Takes a few hours, not a few weeks.',
  },
  {
    num: '002', color: '#3b82f6',
    title: 'Bring in your people',
    desc: "Connect your previous payroll data or add employees fresh. No gap, no double entry, no reconciliation headaches.",
  },
  {
    num: '003', color: '#8b5cf6',
    title: 'Run payroll',
    desc: 'Review, get approval, download bank advice — or pay directly. Your team gets paid on time, every time.',
  },
]

function StepPattern({ color }) {
  const id = `step-l-${color.replace('#', '')}`
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35, pointerEvents: 'none' }}>
      <defs>
        <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill={color} opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <line x1="-20" y1="100%" x2="110%" y2="-10%" stroke={`${color}30`} strokeWidth="1.5" />
    </svg>
  )
}

export default function HowItWorksV3() {
  return (
    <section id="how-it-works" style={{
      background: 'white',
      padding: '96px 40px',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      borderTop: '1px solid #f1f5f9',
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
            border: '1px solid #d1d5db', borderRadius: 999,
            fontSize: 12, color: '#6b7280', fontWeight: 500, letterSpacing: '0.04em', marginBottom: 20,
          }}>
            How it works
          </span>
          <h2 style={{
            fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: '#0f172a',
            letterSpacing: '-0.025em', margin: 0,
          }}>
            Set up in hours.<br />Run payroll in days.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              style={{
                background: 'white', borderRadius: 20,
                border: '1px solid #e2e8f0',
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              {/* Light pattern strip */}
              <div style={{
                height: 80, position: 'relative',
                background: `linear-gradient(135deg, #f8fafb, ${step.color}10)`,
                overflow: 'hidden',
              }}>
                <StepPattern color={step.color} />
                <div style={{
                  position: 'absolute', top: 14, right: 16,
                  fontSize: 11, color: '#94a3b8', fontWeight: 600, letterSpacing: '0.06em',
                }}>
                  / {step.num}
                </div>
                <div style={{
                  position: 'absolute', bottom: 14, left: 20,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <div style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: step.color,
                    boxShadow: `0 0 8px ${step.color}60`,
                  }} />
                  <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600, letterSpacing: '0.06em' }}>
                    STEP {i + 1}
                  </span>
                </div>
              </div>

              <div style={{ padding: '22px 24px 28px', flex: 1 }}>
                <h3 style={{
                  fontSize: 18, fontWeight: 700, color: '#0f172a',
                  margin: '0 0 10px', letterSpacing: '-0.02em',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
