'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'

const HR_FEATURES = [
  'Run and approve payroll in minutes',
  'Manage salary revisions with full audit trail',
  'Approve leave and attendance in one view',
  'Set up onboarding without chasing anyone',
  'Access statutory reports ready to file',
  'Multi-branch visibility from one dashboard',
]

const EMP_FEATURES = [
  'Download payslips and Form 16 any time',
  'Apply for leave without emailing HR',
  'Mark attendance and view team calendar',
  'Submit investment declarations online',
  'Raise reimbursement requests with receipts',
  'Read company policies and announcements',
]

function SidePattern({ color }) {
  const id = `dual-${color.replace('#','')}`
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35, pointerEvents: 'none' }}>
      <defs>
        <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill={color} opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <line x1="-20" y1="60%" x2="110%" y2="10%" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
    </svg>
  )
}

export default function DualViewV3() {
  return (
    <section style={{
      background: '#0c0d10',
      padding: '96px 40px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span style={{
            display: 'inline-block', padding: '5px 14px',
            border: '1px solid rgba(255,255,255,0.14)', borderRadius: 999,
            fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500,
            letterSpacing: '0.05em', marginBottom: 20,
          }}>
            Two sides of the product
          </span>
          <h2 style={{
            fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: 'white',
            letterSpacing: '-0.025em', margin: '0 0 12px',
          }}>
            Built for HR teams.<br />Loved by employees.
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.38)', maxWidth: 460, margin: '0 auto' }}>
            The admin buys it. Every employee uses it daily. Both sides get what they need.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {/* HR Admin side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: '#14161a', borderRadius: 20,
              border: `1px solid ${TEAL}25`, overflow: 'hidden',
            }}
          >
            {/* Pattern header */}
            <div style={{
              height: 80, position: 'relative',
              background: `linear-gradient(135deg,#0f1318,${TEAL}18)`, overflow: 'hidden',
            }}>
              <SidePattern color={TEAL} />
              <div style={{
                position: 'absolute', bottom: 14, left: 24,
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '4px 12px', background: `${TEAL}18`,
                border: `1px solid ${TEAL}35`, borderRadius: 999,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: TEAL }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: `${TEAL}cc`, letterSpacing: '0.06em' }}>
                  HR ADMIN
                </span>
              </div>
            </div>

            <div style={{ padding: '24px 28px 32px' }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'white', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
                Fewer emails. More control. ↗
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', margin: '0 0 22px', lineHeight: 1.6 }}>
                Everything your HR team does — without the back-and-forth.
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {HR_FEATURES.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: TEAL, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.52)' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Employee side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: '#14161a', borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden',
            }}
          >
            <div style={{
              height: 80, position: 'relative',
              background: 'linear-gradient(135deg,#0f1318,rgba(255,255,255,0.04))', overflow: 'hidden',
            }}>
              <SidePattern color="rgba(255,255,255,0.3)" />
              <div style={{
                position: 'absolute', bottom: 14, left: 24,
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '4px 12px',
                border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.35)' }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}>
                  EMPLOYEE
                </span>
              </div>
            </div>

            <div style={{ padding: '24px 28px 32px' }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'white', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
                Everything they need, without asking. ↗
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', margin: '0 0 22px', lineHeight: 1.6 }}>
                A portal that actually works — on any device.
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {EMP_FEATURES.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
