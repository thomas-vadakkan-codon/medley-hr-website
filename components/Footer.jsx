'use client'
import { useState } from 'react'
import ContactModal from './ContactModal'

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <footer style={{ padding: '0 16px 16px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="v4-footer-grid" style={{
          background: 'var(--color-v4-dark)', borderRadius: 20, border: 'var(--v4-border)',
          padding: '44px 48px',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40,
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 14 }}>
              <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 24, color: 'white', letterSpacing: '0.02em' }}>
                MEDLEY<span style={{ color: 'var(--color-v4-teal)' }}>HR</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, margin: '0 0 16px', maxWidth: 220 }}>
              Built for teams who do it themselves.
            </p>
            <a
              href="https://www.linkedin.com/company/medleyhr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MedleyHR on LinkedIn"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 32, height: 32, borderRadius: 7,
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                marginBottom: 20, transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8"/>
              </svg>
            </a>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', margin: 0 }}>
              © 2026 MedleyHR
            </p>
          </div>

          {/* Product */}
          <div>
            <p style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', margin: '0 0 16px' }}>
              PRODUCT
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Features',     href: '/#features' },
                { label: 'Pricing',      href: '/#pricing' },
                { label: 'Why MedleyHR', href: '/#why-medleyhr' },
                { label: 'FAQ',          href: '/#faq' },
                { label: 'Blog',         href: '/blog' },
                { label: 'Sign in',      href: 'https://app.medleyhr.com/signin' },
              ].map(({ label, href }) => (
                <li key={label}><a href={href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500, textDecoration: 'none' }}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal + contact */}
          <div>
            <p style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', margin: '0 0 16px' }}>
              LEGAL
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }].map(({ label, href }) => (
                <li key={label}><a href={href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500, textDecoration: 'none' }}>{label}</a></li>
              ))}
            </ul>
            <button onClick={() => setModalOpen(true)} style={{
              display: 'inline-block', padding: '8px 16px',
              background: 'var(--color-v4-amber)', border: '2px solid var(--color-v4-amber)', borderRadius: 7,
              fontSize: 12, fontWeight: 700, color: 'var(--color-v4-dark)', letterSpacing: '0.04em',
              cursor: 'pointer', fontFamily: 'inherit',
            }}>
              TALK TO US
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  )
}
