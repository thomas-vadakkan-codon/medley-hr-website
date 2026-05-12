'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'


function CircleStamp() {
  return (
    <div style={{ position: 'relative', width: 120, height: 120, flexShrink: 0 }}>
      {/* Outer ring — spins */}
      <div className="spin-slow" style={{ position: 'absolute', inset: 0 }}>
        <svg viewBox="0 0 120 120" width="120" height="120">
          <defs>
            <path id="stamp-circle" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" fill="none" />
          </defs>
          <text fill="white" fontSize="9.5" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" letterSpacing="3.2">
            <textPath href="#stamp-circle">SELF-SERVE · INDIA-READY · NO SETUP ·&nbsp;</textPath>
          </text>
        </svg>
      </div>
      {/* Centre */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: 60, height: 60, borderRadius: '50%',
          background: TEAL,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: 'Anton, Impact, sans-serif',
            fontSize: 26, color: 'white', lineHeight: 1,
          }}>M</span>
        </div>
      </div>
    </div>
  )
}

export default function HeroV4() {
  return (
    <section style={{
      paddingTop: 90, paddingBottom: 16, paddingLeft: 16, paddingRight: 16,
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Main bento row */}
        <div className="v4-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 12, marginBottom: 12 }}>

          {/* Left — amber headline card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="v4-hero-left"
            style={{
              background: AMBER, borderRadius: 20,
              border: `2px solid ${DARK}`,
              padding: '40px 44px 44px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              minHeight: 400, overflow: 'hidden', position: 'relative',
            }}
          >
            {/* Massive headline */}
            <h1 className="v4-display" style={{
              fontSize: 'clamp(52px, 7vw, 96px)',
              color: DARK, margin: 0, flex: 1,
            }}>
              Your HR<br />
              Shouldn't<br />
              Live In<br />
              Your <span style={{ color: TEAL }}>Inbox.</span>
            </h1>

            {/* Bottom row */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginTop: 40, gap: 24, flexWrap: 'wrap',
            }}>
              <p style={{
                fontSize: 15, color: DARK, lineHeight: 1.55,
                maxWidth: 340, opacity: 0.75, margin: 0,
              }}>
                MedleyHR is a self-serve HRMS — sign up and run payroll without a consultant or a 3-month wait.
              </p>
              <CircleStamp />
            </div>
          </motion.div>

          {/* Right — dark card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="v4-hero-right"
            style={{
              background: DARK, borderRadius: 20,
              border: `2px solid ${DARK}`,
              padding: '36px 28px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
          >
            <div>
              <p style={{
                fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
                color: TEAL, textTransform: 'uppercase', marginBottom: 16,
              }}>
                What is MedleyHR?
              </p>
              <p style={{
                fontSize: 15, color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.65, margin: '0 0 28px',
              }}>
                Payroll, compliance, leave, attendance, and employee self-service — all in one platform. No implementation. No consultant.
              </p>

              {/* Stats */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {[
                  { label: 'Free up to', value: '10 employees' },
                  { label: 'Setup time', value: 'A few hours' },
                  { label: 'India compliance', value: 'PF, ESI, TDS, Form 16' },
                ].map(s => (
                  <div key={s.label} style={{
                    padding: '12px 14px', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{s.label}</span>
                    <span style={{ fontSize: 13, color: 'white', fontWeight: 600 }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="https://app.medleyhr.com/signup" style={{
                display: 'block', textAlign: 'center',
                padding: '14px', background: TEAL, borderRadius: 10,
                fontSize: 14, fontWeight: 700, color: 'white', textDecoration: 'none',
                letterSpacing: '0.04em',
              }}>
                START FOR FREE
              </a>
              <a href="#how-it-works" style={{
                display: 'block', textAlign: 'center', padding: '13px',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10,
                fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
              }}>
                See how it works
              </a>
              <p style={{ fontSize: 11, textAlign: 'center', color: 'rgba(255,255,255,0.25)', margin: '4px 0 0' }}>
                No credit card. No setup fee.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Ticker strip */}
        <div style={{
          background: TEAL, borderRadius: 12,
          border: `2px solid ${DARK}`,
          padding: '12px 0', overflow: 'hidden',
        }}>
          <div className="marquee-v4" style={{ display: 'flex', gap: 48, width: 'max-content' }}>
            {Array(4).fill(['PAYROLL AUTOMATION', 'LEAVE MANAGEMENT', 'INDIA COMPLIANCE', 'EMPLOYEE PORTAL', 'FORM 16', 'TDS FILING', 'TEAM STATUS', 'NO IMPLEMENTATION', 'SELF-SERVE HRMS', 'MULTI-BRANCH']).flat().map((t, i) => (
              <span key={i} style={{
                fontFamily: 'Anton, Impact, sans-serif',
                fontSize: 14, color: 'white', whiteSpace: 'nowrap', letterSpacing: '0.06em',
              }}>
                {t} <span style={{ color: AMBER, marginLeft: 12 }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
