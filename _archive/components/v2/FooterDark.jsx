'use client'
import { useEffect, useRef } from 'react'

function FooterDots() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const w = canvas.width, h = canvas.height
    const spacing = 28
    const cols = Math.ceil(w / spacing) + 1
    const rows = Math.ceil(h / spacing) + 1
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * spacing, y = r * spacing
        const cx = w * 0.5, cy = h * 0.5
        const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
        const alpha = Math.max(0, 0.18 - dist / (w * 1.2))
        ctx.beginPath()
        ctx.arc(x, y, 1.3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(15,158,138,${alpha})`
        ctx.fill()
      }
    }
  }, [])
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
}

const LINKS = {
  Product: ['Payroll', 'Attendance', 'Compliance', 'Employee Portal', 'Pricing'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security'],
}

export default function FooterDark() {
  return (
    <footer style={{
      background: '#0c0d10',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      {/* CTA band */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f1a18 0%, #0a1512 100%)',
        padding: '72px 40px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <FooterDots />
        <div style={{
          position: 'relative', maxWidth: 1280, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 32,
        }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0f9e8a', margin: '0 0 12px' }}>
              Ready to get started?
            </p>
            <h2 style={{
              fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800,
              color: 'white', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0,
            }}>
              Modern HR is one click away.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              padding: '12px 24px', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 9, color: 'white', fontSize: 14, fontWeight: 600,
            }}>
              Schedule a demo
            </a>
            <a href="https://app.medleyhr.com/signup" style={{
              padding: '12px 24px', background: '#0f9e8a',
              borderRadius: 9, color: 'white', fontSize: 14, fontWeight: 600,
            }}>
              Start free trial →
            </a>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '52px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{
                width: 28, height: 28, background: 'linear-gradient(135deg,#0f9e8a,#065f52)',
                borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 12V4l4 4 2-4 2 4 4-4v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span style={{ color: 'white', fontWeight: 700, fontSize: 14 }}>Medley HR</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.65, maxWidth: 260 }}>
              Enterprise-grade HR and payroll for India's growing businesses. Simple pricing, powerful features.
            </p>
          </div>

          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', margin: '0 0 14px' }}>
                {group}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            © 2026 Medley HR. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            Built for India. 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}
