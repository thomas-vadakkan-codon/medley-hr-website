'use client'
import { useState, useEffect } from 'react'

const TEAL = '#0f9e8a'
const NAV_LINKS = ['Features', 'Pricing', 'For Teams', 'Why MedleyHR']

export default function NavV3() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(12,13,16,0.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.07)' : 'transparent'}`,
      transition: 'border-color 0.3s',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 40px',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Wordmark */}
        <a href="/v3" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.04em', color: 'white' }}>
            Medley<span style={{ color: TEAL }}>HR</span>
          </span>
        </a>

        {/* Center menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 500,
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 6,
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        >
          Menu {open ? '↑' : '—'}
        </button>

        {/* CTA */}
        <a href="https://app.medleyhr.com/signup" style={{
          padding: '9px 22px',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: 8, color: 'white', fontSize: 14, fontWeight: 500,
          textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>
          Start for free →
        </a>
      </div>

      {open && (
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(12,13,16,0.98)',
          padding: '20px 40px',
          display: 'flex', gap: 32, alignItems: 'center',
        }}>
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g,'-')}`} style={{
              color: 'rgba(255,255,255,0.65)', fontSize: 14, fontWeight: 500,
              textDecoration: 'none',
            }}>{l}</a>
          ))}
          <a href="#" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14, fontWeight: 500, textDecoration: 'none', marginLeft: 'auto' }}>
            Sign in
          </a>
        </div>
      )}
    </nav>
  )
}
