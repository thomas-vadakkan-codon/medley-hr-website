'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'
const BORDER = `2px solid ${DARK}`

const GearIcon = ({ color }) => (
  <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const UsersIcon = ({ color }) => (
  <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const PayrollIcon = ({ color }) => (
  <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="18" rx="2" />
    <line x1="8" y1="8" x2="16" y2="8" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="8" y1="16" x2="12" y2="16" />
    <polyline points="16 14 18 16 22 12" />
  </svg>
)

const STEPS = [
  {
    num: '01', title: 'Configure Your Org',
    desc: 'Set up departments, branches, salary components, and your pay schedule. Takes hours, not weeks.',
    Icon: GearIcon,
  },
  {
    num: '02', title: 'Bring In Your People',
    desc: "Connect previous payroll data or add employees fresh. No gap. No double entry.",
    Icon: UsersIcon,
  },
  {
    num: '03', title: 'Run Payroll',
    desc: 'Review, approve, download bank advice — or pay directly. Done.',
    Icon: PayrollIcon,
  },
]

export default function HowItWorksV4() {
  return (
    <section id="how-it-works" style={{ padding: '16px 16px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header card */}
        <div className="v4-how-header" style={{
          background: DARK, borderRadius: 18, border: BORDER,
          padding: '28px 36px', marginBottom: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <h2 className="v4-display" style={{ fontSize: 'clamp(28px,4vw,52px)', color: 'white', margin: 0 }}>
            Set Up In Hours.<br /><span style={{ color: AMBER }}>Run Payroll In Days.</span>
          </h2>
          <div style={{
            padding: '6px 16px', border: `1px solid rgba(255,255,255,0.15)`,
            borderRadius: 999, fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500,
          }}>
            How it works
          </div>
        </div>

        {/* Step cards */}
        <div className="v4-how-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          {STEPS.map((step, i) => {
            const iconColor = i === 1 ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: i === 1 ? TEAL : 'white',
                  borderRadius: 18, border: BORDER,
                  padding: '32px 28px 36px', overflow: 'hidden', position: 'relative',
                }}
              >
                {/* Ghost icon */}
                <div style={{
                  position: 'absolute', bottom: -10, right: -10,
                  pointerEvents: 'none',
                }}>
                  <step.Icon color={iconColor} />
                </div>

                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: i === 1 ? 'rgba(255,255,255,0.2)' : AMBER,
                  border: `2px solid ${DARK}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 28,
                }}>
                  <span style={{
                    fontFamily: 'Anton, Impact, sans-serif',
                    fontSize: 14, color: i === 1 ? 'white' : DARK, lineHeight: 1,
                  }}>
                    {step.num}
                  </span>
                </div>

                <h3 className="v4-display" style={{
                  fontSize: 28, margin: '0 0 14px',
                  color: i === 1 ? 'white' : DARK,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: 14, lineHeight: 1.65, margin: 0,
                  color: i === 1 ? 'rgba(255,255,255,0.75)' : '#64748b',
                }}>
                  {step.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
