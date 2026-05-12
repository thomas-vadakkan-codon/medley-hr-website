'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'

export default function FoundersNoteV3() {
  return (
    <section style={{
      background: '#0c0d10',
      padding: '96px 40px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span style={{
            display: 'inline-block', padding: '5px 14px',
            border: '1px solid rgba(255,255,255,0.14)', borderRadius: 999,
            fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500,
            letterSpacing: '0.05em', marginBottom: 24,
          }}>
            Why we built this
          </span>
          <h2 style={{
            fontSize: 'clamp(26px,3vw,38px)', fontWeight: 800, color: 'white',
            letterSpacing: '-0.025em', margin: '0 0 20px',
          }}>
            Why we built MedleyHR
          </h2>
          <div style={{
            width: 40, height: 3, borderRadius: 2,
            background: `linear-gradient(to right,${TEAL},transparent)`,
          }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{
            background: '#14161a', borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.07)',
            padding: '36px 40px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              "We built MedleyHR for ourselves first. Every month, our team was drowning in payslip requests, leave emails, and appraisal spreadsheets. Things that should have taken minutes were taking hours — and nobody had a good solution.",
              "We looked for a tool that was powerful enough to handle real payroll but simple enough that anyone could set it up without a consultant. We couldn't find one. Every option was either built for large enterprises with 6-month implementations, or too basic to handle actual compliance.",
              "So we built it. We ran it internally for a year, fixed what didn't work, and built what was missing. Now we're in soft launch — inviting other teams to try what's been working for us.",
            ].map((para, i) => (
              <p key={i} style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
                {para}
              </p>
            ))}
            <p style={{ fontSize: 16, fontWeight: 600, color: 'white', lineHeight: 1.6, margin: 0 }}>
              We'd love for you to try it and tell us what you think.
            </p>
          </div>

          <div style={{ marginTop: 32 }}>
            <a href="https://app.medleyhr.com/signup" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px', background: TEAL,
              borderRadius: 9, fontSize: 14, fontWeight: 600, color: 'white', textDecoration: 'none',
            }}>
              Try MedleyHR — it's free to start
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
