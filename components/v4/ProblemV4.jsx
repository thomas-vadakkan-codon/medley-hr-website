'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'
const DARK = '#0D0F14'

const PAINS = [
  { num: '01', title: 'Payslip requests flooding your inbox every month.', desc: "Employees email HR. HR digs through folders. Everyone wastes an hour they didn't have." },
  { num: '02', title: 'Appraisals tracked on a shared Excel sheet.', desc: 'Multiple versions. No audit trail. Someone always overwrites the wrong column.' },
  { num: '03', title: 'Leave requests coming through WhatsApp.', desc: '"Approved" over chat. Never recorded.' },
  { num: '04', title: 'Switching HRMS means a 3-month project.', desc: 'Onboarding calls. Data migration. Go-live delays. Just to change software.' },
  { num: '05', title: "Your team is growing. Your HR tools aren't.", desc: '5 employees was fine on spreadsheets. At 25, everything is falling apart.' },
]

export default function ProblemV4() {
  return (
    <section style={{ padding: '16px 16px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Section label row */}
        <div className="v4-problem-header" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 12,
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', background: 'var(--color-v4-dark)', borderRadius: 999,
          }}>
            <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 12, color: 'var(--color-v4-amber)', letterSpacing: '0.06em' }}>
              SOUND FAMILIAR?
            </span>
          </div>
          <p style={{ fontSize: 13, color: '#64748b', fontWeight: 500 }}>
            If you've nodded at any of these, MedleyHR was built for you.
          </p>
        </div>

        {/* Bento grid */}
        <div className="v4-problem-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: 10 }}>
          {/* Large card — col 1-2, row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="v4-problem-large"
            style={{
              gridColumn: '1 / 3', background: 'var(--color-v4-dark)', borderRadius: 18,
              border: 'var(--v4-border)', padding: '36px 36px 40px', position: 'relative', overflow: 'hidden',
            }}
          >
            <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-v4-teal)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>/ 01</p>
            <h3 className="v4-display" style={{ fontSize: 'clamp(28px,3vw,42px)', color: 'white', margin: '0 0 14px' }}>
              Payslip Requests<br />Flooding Your<br /><span style={{ color: 'var(--color-v4-amber)' }}>Inbox.</span>
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 360, margin: 0 }}>
              Employees email HR. HR digs through folders. Everyone wastes an hour they didn't have — every single month.
            </p>
          </motion.div>

          {/* Small card — col 3, row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.07 }}
            style={{
              background: 'var(--color-v4-amber)', borderRadius: 18,
              border: 'var(--v4-border)', padding: '28px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
          >
            <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 11, color: 'var(--color-v4-dark)', letterSpacing: '0.1em', opacity: 0.5 }}>/ 02</span>
            <div>
              <h3 className="v4-display" style={{ fontSize: 28, color: 'var(--color-v4-dark)', margin: '0 0 12px' }}>
                Appraisals on Excel.
              </h3>
              <p style={{ fontSize: 13, color: 'var(--color-v4-dark)', opacity: 0.65, lineHeight: 1.6, margin: 0 }}>
                Multiple versions. No audit trail.
              </p>
            </div>
          </motion.div>

          {/* Cards row 2 */}
          {[PAINS[2], PAINS[3], PAINS[4]].map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07 }}
              style={{
                background: i === 1 ? TEAL : 'white', borderRadius: 18,
                border: 'var(--v4-border)', padding: '26px 28px',
              }}
            >
              <span style={{
                fontFamily: 'Anton, Impact, sans-serif', fontSize: 11,
                color: i === 1 ? 'rgba(255,255,255,0.5)' : '#94a3b8',
                letterSpacing: '0.1em', display: 'block', marginBottom: 14,
              }}>
                / {p.num}
              </span>
              <h3 className="v4-display" style={{
                fontSize: 22, margin: '0 0 10px',
                color: i === 1 ? 'white' : DARK,
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: 13, lineHeight: 1.6, margin: 0,
                color: i === 1 ? 'rgba(255,255,255,0.7)' : '#64748b',
              }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
