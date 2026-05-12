'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'

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
      const w = canvas.width, h = canvas.height
      ctx.clearRect(0, 0, w, h)
      const spacing = 22
      const cols = Math.ceil(w / spacing) + 1
      const rows = Math.ceil(h / spacing) + 1

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing, y = r * spacing
          const waveX = Math.sin(r * 0.25 + c * 0.15) * 3
          const waveY = Math.cos(c * 0.2 + r * 0.1) * 3
          const px = x + waveX, py = y + waveY
          const d1 = Math.abs(px - py * 1.2) / w
          const d2 = Math.abs(px + py - w * 0.7) / w
          const fade = Math.min(d1 * 8, 1) * Math.min(d2 * 6, 1)
          const cx2 = w * 0.55, cy2 = h * 0.45
          const dist = Math.sqrt((px - cx2) ** 2 + (py - cy2) ** 2)
          const glow = Math.max(0, 1 - dist / (w * 0.4))
          const alpha = (0.12 + glow * 0.35) * fade
          const radius = 1.2 + glow * 1.8
          ctx.beginPath()
          ctx.arc(px, py, radius, 0, Math.PI * 2)
          ctx.fillStyle = glow > 0.2 ? `rgba(15,158,138,${alpha})` : `rgba(255,255,255,${alpha * 0.6})`
          ctx.fill()
        }
      }

      ctx.save()
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        const offset = (i / 3) * w * 0.8
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

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
}

function MockupFrame({ dark = true }) {
  return (
    <div style={{
      border: `1px solid ${dark ? 'rgba(255,255,255,0.09)' : '#E2E8F0'}`,
      borderRadius: 14, background: dark ? 'rgba(255,255,255,0.02)' : '#F8F9FA',
      overflow: 'hidden', height: '100%',
    }}>
      <div style={{
        padding: '10px 16px', borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.06)' : '#E2E8F0'}`,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        {['#ef4444','#f59e0b','#22c55e'].map((c,i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.5 }} />
        ))}
        <span style={{ flex: 1, textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.2)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          app.medleyhr.com — Payroll
        </span>
      </div>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[75,55,65,45,60].map((w,i) => (
          <div key={i} style={{ width: `${w}%`, height: 9, background: 'rgba(255,255,255,0.05)', borderRadius: 4 }} />
        ))}
        <div style={{
          marginTop: 8, padding: '7px 14px', width: 'fit-content',
          background: 'rgba(15,158,138,0.12)', border: '1px solid rgba(15,158,138,0.25)',
          borderRadius: 7, fontSize: 12, color: `${TEAL}cc`,
          fontWeight: 500, fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>
          Payroll Dashboard
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 4 }}>
          {['Employees','Payroll','Leave','Reports'].map(l => (
            <div key={l} style={{
              padding: '10px 12px', background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8,
              fontSize: 11, color: 'rgba(255,255,255,0.25)', fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HeroV3() {
  return (
    <section style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      {/* Dark top — dot canvas */}
      <div style={{
        position: 'relative', height: '58vh', minHeight: 360,
        background: 'linear-gradient(160deg,#0c0d10 0%,#0f1a18 50%,#0a1512 100%)',
        overflow: 'hidden',
      }}>
        <DotCanvas />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 70% at 60% 50%,rgba(15,158,138,0.1) 0%,transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Bottom-left tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ position: 'absolute', bottom: 40, left: 40, color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}
        >
          HR and payroll<br />your team can own.
        </motion.p>

        {/* Bottom-right — soft launch badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ position: 'absolute', bottom: 32, right: 40 }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 14px', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 999, fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 500,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: TEAL, display: 'inline-block' }} />
            Now in soft launch
          </span>
        </motion.div>
      </div>

      {/* White bottom — headline + CTA */}
      <div style={{ background: 'white', padding: '52px 40px 64px', borderTop: '1px solid #f1f5f9' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap',
        }}>
          <div style={{ flex: '1 1 520px' }}>
            {/* Pill */}
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: 'inline-block', padding: '5px 14px',
                border: '1px solid #d1d5db', borderRadius: 999,
                fontSize: 12, color: '#6b7280', fontWeight: 500,
                letterSpacing: '0.04em', marginBottom: 24,
              }}
            >
              Self-serve HRMS · Payroll · Compliance · No implementation needed
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              style={{
                fontSize: 'clamp(34px, 4.5vw, 58px)', fontWeight: 800,
                color: '#0f172a', lineHeight: 1.07, letterSpacing: '-0.03em', margin: '0 0 18px',
              }}
            >
              Your HR shouldn't<br />live in your inbox.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.14 }}
              style={{ fontSize: 16, color: '#64748b', lineHeight: 1.65, maxWidth: 460, margin: '0 0 28px' }}
            >
              MedleyHR is a self-serve HRMS — sign up and run payroll without an implementation project, a consultant, or a 3-month wait.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}
            >
              <a href="https://app.medleyhr.com/signup" style={{
                padding: '12px 24px', background: '#0f172a', borderRadius: 9,
                fontSize: 14, fontWeight: 600, color: 'white', textDecoration: 'none',
              }}>
                Start for free — no credit card needed
              </a>
              <a href="#how-it-works" style={{
                padding: '12px 20px', border: '1px solid #e2e8f0', borderRadius: 9,
                fontSize: 14, fontWeight: 500, color: '#475569', textDecoration: 'none',
              }}>
                See how it works
              </a>
            </motion.div>
            <p style={{ fontSize: 12, color: '#94a3b8', marginTop: 12 }}>
              Free up to 10 employees. No setup fee.
            </p>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22 }}
            style={{ flex: '1 1 360px', minHeight: 260 }}
          >
            <MockupFrame />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
