'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'

const PAIN_POINTS = [
  { num: '001', title: 'Payslip requests flooding your inbox every month.', desc: "Employees email HR. HR digs through folders. Everyone wastes an hour they didn't have." },
  { num: '002', title: 'Appraisals tracked on a shared Excel sheet.', desc: 'Multiple versions. No audit trail. Someone always overwrites the wrong column.' },
  { num: '003', title: 'Leave requests coming through WhatsApp.', desc: '"Approved" over chat. Never recorded. "I thought I had 3 days left."' },
  { num: '004', title: 'Switching HRMS means a 3-month implementation project.', desc: 'Onboarding calls. Data migration. Go-live delays. Just to change software.' },
  { num: '005', title: "Your team is growing. Your HR tools aren't.", desc: '5 employees was fine on spreadsheets. At 25, everything is falling apart.' },
]

function SvgPattern({ color }) {
  const id = `prob-${color.replace('#', '')}`
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4, pointerEvents: 'none' }}>
      <defs>
        <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill={color} opacity="0.45" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <line x1="-20" y1="200" x2="400" y2="-40" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
    </svg>
  )
}

export default function ProblemV3() {
  return (
    <section style={{
      background: '#0c0d10',
      padding: '96px 40px',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      borderTop: '1px solid rgba(255,255,255,0.05)',
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
            Sound familiar?
          </span>
          <h2 style={{
            fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: 'white',
            letterSpacing: '-0.025em', margin: 0,
          }}>
            If you've nodded at any of these,<br />MedleyHR was built for you.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
          {PAIN_POINTS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              style={{
                background: '#14161a', borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.07)',
                overflow: 'hidden', position: 'relative',
              }}
            >
              {/* Pattern strip */}
              <div style={{
                height: 64, position: 'relative',
                background: `linear-gradient(135deg,#0f1318,${TEAL}14)`,
                overflow: 'hidden',
              }}>
                <SvgPattern color={TEAL} />
                <div style={{
                  position: 'absolute', top: 14, right: 16,
                  fontSize: 11, color: 'rgba(255,255,255,0.25)', fontWeight: 600, letterSpacing: '0.06em',
                }}>
                  / {p.num}
                </div>
              </div>

              <div style={{ padding: '20px 24px 28px' }}>
                <h3 style={{
                  fontSize: 15, fontWeight: 700, color: 'white',
                  margin: '0 0 10px', lineHeight: 1.4,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: 13, color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1.65, margin: 0,
                }}>
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
