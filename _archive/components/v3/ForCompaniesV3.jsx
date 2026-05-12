'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'

const TYPES = [
  { num: '001', color: TEAL,      title: 'Founder-led teams',                  desc: 'You want HR owned internally — not outsourced to a consultant who charges per change. MedleyHR puts you in control from day one.' },
  { num: '002', color: '#3b82f6', title: 'Fast-growing companies',             desc: "You've outgrown Excel and WhatsApp. You need a real system — one you can set up this week, not after a 3-month project." },
  { num: '003', color: '#8b5cf6', title: 'Multi-location businesses',          desc: 'Different offices, different pay schedules, one HR system. Multi-branch payroll and reporting under a single organisation.' },
  { num: '004', color: '#f59e0b', title: 'Teams switching HRMS tools',         desc: "Changing software shouldn't mean a 6-month project. Connect your previous payroll data and continue without a gap." },
  { num: '005', color: '#06b6d4', title: 'Global teams with India operations', desc: "India-compliant out of the box — PF, ESI, TDS, Form 16. Configurable for other markets as you grow." },
]

function CardPattern({ color }) {
  const id = `co-l-${color.replace('#', '')}`
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35, pointerEvents: 'none' }}>
      <defs>
        <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill={color} opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <line x1="-20" y1="100%" x2="120%" y2="-10%" stroke={`${color}30`} strokeWidth="1.5" />
    </svg>
  )
}

export default function ForCompaniesV3() {
  return (
    <section id="for-teams" style={{
      background: '#f8fafb',
      padding: '96px 40px',
      borderTop: '1px solid #f1f5f9',
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
            border: '1px solid #d1d5db', borderRadius: 999,
            fontSize: 12, color: '#6b7280', fontWeight: 500, letterSpacing: '0.04em', marginBottom: 20,
          }}>
            Who it's for
          </span>
          <h2 style={{
            fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: '#0f172a',
            letterSpacing: '-0.025em', margin: '0 0 12px',
          }}>
            Built for companies that move fast.
          </h2>
          <p style={{ fontSize: 15, color: '#64748b', maxWidth: 420 }}>
            Not enterprise-only. Not startup-only. For any team that wants HR to just work.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(290px,1fr))', gap: 14 }}>
          {TYPES.map((t, i) => (
            <motion.div
              key={t.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              style={{
                background: 'white', borderRadius: 20,
                border: '1px solid #e2e8f0',
                overflow: 'hidden', position: 'relative',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{
                height: 64, position: 'relative',
                background: `linear-gradient(135deg,#f8fafb,${t.color}10)`,
                overflow: 'hidden',
              }}>
                <CardPattern color={t.color} />
                <div style={{
                  position: 'absolute', top: 14, right: 16,
                  fontSize: 11, color: '#94a3b8', fontWeight: 600, letterSpacing: '0.06em',
                }}>
                  / {t.num}
                </div>
                <div style={{
                  position: 'absolute', bottom: 14, left: 20,
                  width: 7, height: 7, borderRadius: '50%',
                  background: t.color, boxShadow: `0 0 8px ${t.color}60`,
                }} />
              </div>

              <div style={{ padding: '18px 22px 26px' }}>
                <h3 style={{
                  fontSize: 16, fontWeight: 700, color: '#0f172a',
                  margin: '0 0 8px', letterSpacing: '-0.015em',
                }}>
                  {t.title}
                </h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                  {t.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
