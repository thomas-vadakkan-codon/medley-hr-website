'use client'
import { motion } from 'framer-motion'

const COMPANIES = [
  'Infosys BPM', 'Razorpay', 'Freshworks', 'Zepto', 'Meesho',
  'OYO Rooms', 'Swiggy', 'PhonePe', 'Groww', 'CRED',
]

export default function SocialProofDark() {
  return (
    <section style={{
      background: '#0c0d10', padding: '56px 0',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      overflow: 'hidden',
    }}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center', fontSize: 12, fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)', marginBottom: 32,
        }}
      >
        Trusted by 500+ companies across India
      </motion.p>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
          background: 'linear-gradient(to right, #0c0d10, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
          background: 'linear-gradient(to left, #0c0d10, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div style={{
          display: 'flex', gap: 48, animation: 'marquee 30s linear infinite',
          width: 'max-content',
        }}>
          {[...COMPANIES, ...COMPANIES].map((c, i) => (
            <span key={i} style={{
              fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.2)',
              whiteSpace: 'nowrap', letterSpacing: '-0.01em',
            }}>
              {c}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
