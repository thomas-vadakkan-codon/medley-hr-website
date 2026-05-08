const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'
const BORDER = `2px solid ${DARK}`

export default function FooterV4() {
  return (
    <footer style={{
      padding: '0 16px 16px',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="v4-footer-grid" style={{
          background: DARK, borderRadius: 20, border: BORDER,
          padding: '44px 48px',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40,
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 14 }}>
              <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 24, color: 'white', letterSpacing: '0.02em' }}>
                MEDLEY<span style={{ color: TEAL }}>HR</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, margin: '0 0 20px', maxWidth: 220 }}>
              HR and payroll your team can own.
            </p>
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
              {['Features', 'Pricing', 'Why MedleyHR', 'For Teams', 'Sign in'].map(l => (
                <li key={l}><a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500, textDecoration: 'none' }}>{l}</a></li>
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
            <a href="mailto:hello@medleyhr.com" style={{
              display: 'inline-block', padding: '8px 16px',
              background: AMBER, border: `2px solid ${AMBER}`, borderRadius: 7,
              fontSize: 12, fontWeight: 700, color: DARK, textDecoration: 'none', letterSpacing: '0.04em',
            }}>
              TALK TO US
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
