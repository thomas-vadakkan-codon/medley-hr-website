'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'

function FooterDots() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const w = canvas.width, h = canvas.height
    const spacing = 26
    const cols = Math.ceil(w / spacing) + 1
    const rows = Math.ceil(h / spacing) + 1
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * spacing, y = r * spacing
        const cx2 = w * 0.5, cy2 = h * 0.5
        const dist = Math.sqrt((x - cx2) ** 2 + (y - cy2) ** 2)
        const alpha = Math.max(0, 0.22 - dist / (w * 1.1))
        ctx.beginPath()
        ctx.arc(x, y, 1.3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(15,158,138,${alpha})`
        ctx.fill()
      }
    }
  }, [])
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
}

export default function FinalCTAV3() {
  return (
    <section style={{
      background: 'linear-gradient(160deg,#0c0d10 0%,#0f1a18 50%,#0a1512 100%)',
      padding: '96px 40px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <FooterDots />
      <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span style={{
            display: 'inline-block', padding: '5px 14px',
            border: '1px solid rgba(255,255,255,0.14)', borderRadius: 999,
            fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500,
            letterSpacing: '0.05em', marginBottom: 24,
          }}>
            Get started
          </span>

          <h2 style={{
            fontSize: 'clamp(30px,4vw,52px)', fontWeight: 800, color: 'white',
            letterSpacing: '-0.03em', margin: '0 0 14px', lineHeight: 1.07,
          }}>
            Start using MedleyHR<br />today — it's free.
          </h2>
          <p style={{
            fontSize: 16, color: 'rgba(255,255,255,0.4)', margin: '0 0 36px',
          }}>
            No credit card. No implementation. No waiting.
          </p>

          <a href="https://app.medleyhr.com/signup" style={{
            display: 'inline-block', padding: '14px 32px',
            background: TEAL, borderRadius: 10,
            fontSize: 15, fontWeight: 700, color: 'white', textDecoration: 'none',
            boxShadow: `0 4px 24px ${TEAL}40`,
          }}>
            Create your free account
          </a>

          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', marginTop: 18 }}>
            Already have an account?{' '}
            <a href="#" style={{ color: `${TEAL}cc`, fontWeight: 500 }}>Sign in</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
