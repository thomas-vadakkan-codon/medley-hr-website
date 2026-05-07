'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'
const BORDER = `2px solid ${DARK}`

export default function FinalCTAV4() {
  return (
    <section style={{ padding: '16px 16px 24px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="v4-finalcta-grid"
          style={{
            background: AMBER, borderRadius: 20, border: BORDER,
            padding: '56px 56px',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center',
          }}
        >
          <div>
            <h2 className="v4-display" style={{
              fontSize: 'clamp(36px,5vw,72px)', color: DARK, margin: '0 0 14px',
            }}>
              Start Using MedleyHR<br />Today — <span style={{ color: TEAL }}>It's Free.</span>
            </h2>
            <p style={{ fontSize: 16, color: DARK, opacity: 0.65, margin: 0 }}>
              No credit card. No implementation. No waiting.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 220 }}>
            <a href="https://app.medleyhr.com/signup" style={{
              display: 'block', textAlign: 'center', padding: '16px 28px',
              background: DARK, border: `2px solid ${DARK}`, borderRadius: 10,
              fontSize: 14, fontWeight: 700, color: 'white',
              textDecoration: 'none', letterSpacing: '0.04em',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>
              CREATE FREE ACCOUNT
            </a>
            <a href="#" style={{
              display: 'block', textAlign: 'center', padding: '14px 28px',
              border: `2px solid ${DARK}`, borderRadius: 10,
              fontSize: 13, fontWeight: 600, color: DARK, textDecoration: 'none',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>
              Sign in
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
