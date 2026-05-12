'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'
const BORDER = `2px solid ${DARK}`

export default function FoundersNoteV4() {
  return (
    <section id="why-medleyhr" style={{ padding: '16px 16px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="v4-founders-grid"
          style={{
            background: DARK, borderRadius: 20, border: BORDER,
            display: 'grid', gridTemplateColumns: '1fr 1.6fr', overflow: 'hidden',
          }}
        >
          {/* Left */}
          <div className="v4-founders-left" style={{
            padding: '48px 44px', borderRight: `2px solid rgba(255,255,255,0.08)`,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{
                display: 'inline-block', padding: '5px 12px',
                border: '1px solid rgba(255,255,255,0.14)', borderRadius: 999,
                fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 600,
                letterSpacing: '0.06em', marginBottom: 28, textTransform: 'uppercase',
              }}>
                Why we built this
              </div>

              <h2 className="v4-display" style={{
                fontSize: 'clamp(36px,4vw,60px)',
                color: 'white', margin: '0 0 8px',
              }}>
                Why We Built<br />
                <span style={{ color: AMBER }}>MedleyHR</span>
              </h2>
            </div>

            {/* Accent line */}
            <div style={{ width: 48, height: 3, background: TEAL, borderRadius: 2, marginTop: 40 }} />
          </div>

          {/* Right — story */}
          <div className="v4-founders-right" style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                "We built MedleyHR for ourselves first. Every month, our team was drowning in payslip requests, leave emails, and appraisal spreadsheets. Things that should have taken minutes were taking hours.",
                "We looked for a tool powerful enough to handle real payroll but simple enough to set up without a consultant. We couldn't find one. So we built it, ran it internally for a year, fixed what didn't work.",
                "Now we're opening it up — built on a year of real use, and ready for your team.",
              ].map((p, i) => (
                <p key={i} style={{
                  fontSize: i === 2 ? 16 : 15,
                  fontWeight: i === 2 ? 600 : 400,
                  color: i === 2 ? 'white' : 'rgba(255,255,255,0.48)',
                  lineHeight: 1.7, margin: 0,
                }}>
                  {p}
                </p>
              ))}
            </div>
            <a href="https://app.medleyhr.com/signup" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 32,
              padding: '12px 24px', background: AMBER, border: `2px solid ${DARK}`,
              borderRadius: 9, fontSize: 13, fontWeight: 700, color: DARK,
              textDecoration: 'none', letterSpacing: '0.04em',
              fontFamily: 'Plus Jakarta Sans, sans-serif', width: 'fit-content',
            }}>
              TRY MEDLEYHR — IT'S FREE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
