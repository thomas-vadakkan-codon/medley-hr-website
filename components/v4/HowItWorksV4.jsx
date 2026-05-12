'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'

const STEPS = [
  { num: '01', title: 'Configure Your Org', desc: 'Set up departments, branches, salary components, and your pay schedule. Takes hours, not weeks.' },
  { num: '02', title: 'Bring In Your People', desc: "Connect previous payroll data or add employees fresh. No gap. No double entry." },
  { num: '03', title: 'Run Payroll', desc: 'Review, approve, download bank advice — or pay directly. Done.' },
]

export default function HowItWorksV4() {
  return (
    <section id="how-it-works" style={{ padding: '16px 16px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header card */}
        <div className="v4-how-header" style={{
          background: 'var(--color-v4-dark)', borderRadius: 18, border: 'var(--v4-border)',
          padding: '28px 36px', marginBottom: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <h2 className="v4-display" style={{ fontSize: 'clamp(28px,4vw,52px)', color: 'white', margin: 0 }}>
            Set Up In Hours.<br /><span style={{ color: 'var(--color-v4-amber)' }}>Run Payroll In Days.</span>
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
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: i === 1 ? TEAL : 'white',
                borderRadius: 18, border: 'var(--v4-border)',
                padding: '32px 28px 36px', overflow: 'hidden', position: 'relative',
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: i === 1 ? 'rgba(255,255,255,0.2)' : AMBER,
                border: 'var(--v4-border)',
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
          ))}
        </div>
      </div>
    </section>
  )
}
