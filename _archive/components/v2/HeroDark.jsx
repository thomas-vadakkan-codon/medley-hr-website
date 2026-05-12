'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function DotCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      draw()
    }

    function draw() {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      const spacing = 22
      const cols = Math.ceil(w / spacing) + 1
      const rows = Math.ceil(h / spacing) + 1

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing
          const y = r * spacing

          // Wave distortion
          const waveX = Math.sin(r * 0.25 + c * 0.15) * 3
          const waveY = Math.cos(c * 0.2 + r * 0.1) * 3
          const px = x + waveX
          const py = y + waveY

          // Fade near diagonal lines
          const d1 = Math.abs(px - py * 1.2) / w
          const d2 = Math.abs(px + py - w * 0.7) / w
          const fade = Math.min(d1 * 8, 1) * Math.min(d2 * 6, 1)

          // Teal glow center
          const cx2 = w * 0.55, cy2 = h * 0.45
          const dist = Math.sqrt((px - cx2) ** 2 + (py - cy2) ** 2)
          const glow = Math.max(0, 1 - dist / (w * 0.4))

          const alpha = (0.12 + glow * 0.35) * fade
          const radius = 1.2 + glow * 1.8

          ctx.beginPath()
          ctx.arc(px, py, radius, 0, Math.PI * 2)

          if (glow > 0.2) {
            ctx.fillStyle = `rgba(15,158,138,${alpha})`
          } else {
            ctx.fillStyle = `rgba(255,255,255,${alpha * 0.6})`
          }
          ctx.fill()
        }
      }

      // Diagonal lines
      const lineCount = 3
      ctx.save()
      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath()
        const offset = (i / lineCount) * w * 0.8
        ctx.moveTo(offset - h * 0.5, 0)
        ctx.lineTo(offset + h * 0.5, h)
        ctx.strokeStyle = `rgba(255,255,255,${0.04 + i * 0.02})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
      ctx.restore()
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  )
}

export default function HeroDark() {
  return (
    <section style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      {/* Dark top half */}
      <div style={{
        position: 'relative', height: '54vh', minHeight: 340,
        background: 'linear-gradient(160deg, #0c0d10 0%, #0f1a18 50%, #0a1512 100%)',
        overflow: 'hidden',
      }}>
        <DotCanvas />

        {/* Teal glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 70% at 60% 50%, rgba(15,158,138,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Bottom fade into white */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
          background: 'linear-gradient(to bottom, transparent, #0c0d10)',
          pointerEvents: 'none',
        }} />

        {/* Bottom-left tagline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ position: 'absolute', bottom: 40, left: 40 }}
        >
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}>
            HR that works as hard<br />as your team does
          </p>
        </motion.div>

        {/* Bottom-right social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ position: 'absolute', bottom: 32, right: 40 }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10, textAlign: 'right' }}>
            Quick Contact
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            {['in', 'tw', 'yt'].map((s, i) => (
              <a key={i} href="#" style={{
                width: 34, height: 34, borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 600,
              }}>{s}</a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* White bottom half */}
      <div style={{
        background: 'white',
        padding: '52px 40px 60px',
        position: 'relative',
        borderTop: '1px solid #f1f5f9',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 560px' }}>
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'inline-flex', marginBottom: 24 }}
            >
              <span style={{
                padding: '5px 14px', border: '1px solid #d1d5db', borderRadius: 999,
                fontSize: 12, color: '#6b7280', fontWeight: 500, letterSpacing: '0.04em',
              }}>
                Payroll · Compliance · Self-Service · Leave Management
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: 'clamp(34px, 4.5vw, 58px)', fontWeight: 800,
                color: '#0f172a', lineHeight: 1.08, letterSpacing: '-0.03em',
                margin: '0 0 18px',
              }}
            >
              Modern HR & Payroll<br />for India's growing businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: 16, color: '#64748b', lineHeight: 1.65, maxWidth: 480 }}
            >
              An HR platform built for India — payroll, compliance, and employee self-service in one place.
            </motion.p>
          </div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ alignSelf: 'flex-end', paddingBottom: 4 }}
          >
            <a
              href="https://app.medleyhr.com/signup"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 28px',
                background: '#0f172a', color: 'white',
                borderRadius: 10, fontSize: 15, fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              Get Started →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
