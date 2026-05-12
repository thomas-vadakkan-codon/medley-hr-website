'use client'
import { useState } from 'react'

const LINKS = ['Features', 'Pricing', 'Compliance', 'Company']

export default function NavDark() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(12,13,16,0.85)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 40px',
          height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 30, height: 30, background: 'linear-gradient(135deg,#0f9e8a,#065f52)',
              borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 12V4l4 4 2-4 2 4 4-4v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ color: 'white', fontWeight: 700, fontSize: 15, letterSpacing: '-0.02em', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Medley HR
            </span>
          </div>

          {/* Center nav toggle */}
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
          <a
            href="https://app.medleyhr.com/signup"
            style={{
              padding: '9px 22px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 8, color: 'white', fontSize: 14, fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 6,
              transition: 'border-color 0.2s, background 0.2s',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}
          >
            Contact Us →
          </a>
        </div>

        {/* Dropdown */}
        {open && (
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(12,13,16,0.98)',
            padding: '20px 40px',
            display: 'flex', gap: 32,
          }}>
            {LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: 500,
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}>{l}</a>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
