'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const SECTIONS = [
  { label: 'How it works', id: 'how-it-works' },
  { label: 'Features',     id: 'features' },
  { label: 'Pricing',      id: 'pricing' },
  { label: 'Why MedleyHR', id: 'why-medleyhr' },
  { label: 'FAQ',          id: 'faq' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const NAV_LINKS = [
    ...SECTIONS.map(({ label, id }) => ({
      label,
      href: isHome ? `#${id}` : `/#${id}`,
    })),
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: '12px 24px',
    }}>
      {/* Nav pill */}
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        background: 'var(--color-v4-dark)', borderRadius: 14,
        padding: '0 24px', height: 52,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Wordmark */}
        <a href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{
            fontFamily: 'Anton, Impact, sans-serif',
            fontSize: 20, color: 'white', letterSpacing: '0.02em',
          }}>
            MEDLEY<span style={{ color: 'var(--color-v4-teal)' }}>HR</span>
          </span>
        </a>

        {/* Links — desktop only */}
        <div className="v4-nav-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} style={{
              fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.55)',
              textDecoration: 'none',
            }}>{label}</a>
          ))}
        </div>

        {/* CTAs — desktop only */}
        <div className="v4-nav-ctas" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href="https://app.medleyhr.com/signin" style={{
            padding: '8px 16px',
            background: 'transparent', border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 8,
            fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
          }}>
            Sign in
          </a>
          <a href="https://app.medleyhr.com/signup" style={{
            padding: '8px 18px',
            background: 'var(--color-v4-teal)', borderRadius: 8,
            fontSize: 13, fontWeight: 700, color: 'white', textDecoration: 'none',
            letterSpacing: '0.02em',
          }}>
            START FOR FREE
          </a>
        </div>

        {/* Hamburger — mobile/tablet only */}
        <button
          className="v4-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '6px', color: 'white',
          }}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="4" y1="4" x2="16" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="16" y1="4" x2="4" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="3" y1="6" x2="17" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="10" x2="17" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="14" x2="17" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="v4-mobile-menu" style={{
          maxWidth: 1280, margin: '6px auto 0',
          background: 'var(--color-v4-dark)', borderRadius: 14,
          padding: '16px 24px 20px',
          display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none', padding: '11px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'block',
              }}
            >
              {label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
            <a href="https://app.medleyhr.com/signin" style={{
              flex: 1, textAlign: 'center', padding: '10px 16px',
              border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 8,
              fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
            }}>Sign in</a>
            <a href="https://app.medleyhr.com/signup" style={{
              flex: 1, textAlign: 'center', padding: '10px 16px',
              background: 'var(--color-v4-teal)', borderRadius: 8,
              fontSize: 13, fontWeight: 700, color: 'white', textDecoration: 'none',
              letterSpacing: '0.02em',
            }}>START FOR FREE</a>
          </div>
        </div>
      )}
    </nav>
  )
}
