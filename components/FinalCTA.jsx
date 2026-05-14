'use client'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section style={{ padding: '16px 16px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="v4-finalcta-grid"
          style={{
            background: 'var(--color-v4-amber)', borderRadius: 20, border: 'var(--v4-border)',
            padding: '56px 56px',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center',
          }}
        >
          <div>
            <h2 className="v4-display" style={{
              fontSize: 'clamp(36px,5vw,72px)', color: 'var(--color-v4-dark)', margin: '0 0 14px',
            }}>
              Start Using MedleyHR<br />Today — <span style={{ color: 'var(--color-v4-teal)' }}>It's Free.</span>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--color-v4-dark)', opacity: 0.65, margin: 0 }}>
              No credit card. No implementation. No waiting.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 220 }}>
            <a href="https://app.medleyhr.com/signup" style={{
              display: 'block', textAlign: 'center', padding: '16px 28px',
              background: 'var(--color-v4-dark)', border: 'var(--v4-border)', borderRadius: 10,
              fontSize: 14, fontWeight: 700, color: 'white',
              textDecoration: 'none', letterSpacing: '0.04em',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>
              CREATE FREE ACCOUNT
            </a>
            <a href="https://app.medleyhr.com/signin" style={{
              display: 'block', textAlign: 'center', padding: '14px 28px',
              border: 'var(--v4-border)', borderRadius: 10,
              fontSize: 13, fontWeight: 600, color: 'var(--color-v4-dark)', textDecoration: 'none',
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
