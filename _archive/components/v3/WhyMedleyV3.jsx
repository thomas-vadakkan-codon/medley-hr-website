'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'

const CARDS = [
  {
    num: '001', color: TEAL,
    title: 'No implementation needed.',
    desc: 'Sign up today, run payroll this month. No consultant, no onboarding call, no waiting for someone to set things up for you.',
  },
  {
    num: '002', color: '#3b82f6',
    title: 'Migrate without the headache.',
    desc: "Connect last month's payroll data and continue from where you left off. No gap, no double entry, no manual reconciliation.",
  },
  {
    num: '003', color: '#8b5cf6',
    title: 'HR + team work in one place.',
    desc: 'Track standups, assign tasks, manage escalations — inside your HR platform. One less tool, one less bill.',
  },
  {
    num: '004', color: '#f59e0b',
    title: 'Priced for how you actually grow.',
    desc: 'Pay per employee. No setup fees. No contracts. Start free, upgrade when you need to, cancel whenever you want.',
  },
]

function CardPattern({ color }) {
  const id = `why-${color.replace('#', '')}`
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.45, pointerEvents: 'none' }}>
      <defs>
        <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill={color} opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <line x1="-30" y1="100%" x2="120%" y2="-20" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
    </svg>
  )
}

export default function WhyMedleyV3() {
  return (
    <section id="why-medleyhr" style={{
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
          style={{ marginBottom: 52 }}
        >
          <span style={{
            display: 'inline-block', padding: '5px 14px',
            border: '1px solid rgba(255,255,255,0.14)', borderRadius: 999,
            fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500,
            letterSpacing: '0.05em', marginBottom: 20,
          }}>
            Why MedleyHR
          </span>
          <h2 style={{
            fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: 'white',
            letterSpacing: '-0.025em', margin: '0 0 12px',
          }}>
            Why teams choose MedleyHR
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.38)', maxWidth: 420 }}>
            Four things that matter, with nothing that doesn't.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
          {CARDS.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: '#14161a', borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.07)',
                overflow: 'hidden', position: 'relative',
              }}
            >
              {/* Pattern strip */}
              <div style={{
                height: 72, position: 'relative',
                background: `linear-gradient(135deg,#0f1318,${card.color}18)`,
                overflow: 'hidden',
              }}>
                <CardPattern color={card.color} />
                <div style={{
                  position: 'absolute', top: 14, right: 16,
                  fontSize: 11, color: 'rgba(255,255,255,0.25)', fontWeight: 600, letterSpacing: '0.06em',
                }}>
                  / {card.num}
                </div>
                {/* Accent dot */}
                <div style={{
                  position: 'absolute', bottom: 16, left: 20,
                  width: 8, height: 8, borderRadius: '50%',
                  background: card.color,
                  boxShadow: `0 0 10px ${card.color}80`,
                }} />
              </div>

              <div style={{ padding: '20px 24px 28px' }}>
                <h3 style={{
                  fontSize: 18, fontWeight: 700, color: 'white',
                  margin: '0 0 10px', letterSpacing: '-0.02em',
                }}>
                  {card.title} ↗
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.42)', lineHeight: 1.65, margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
