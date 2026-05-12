const TEAL = '#0f9e8a'

const PRODUCT_LINKS = ['Features', 'Pricing', 'Why MedleyHR', 'For Teams', 'Sign in']
const LEGAL = ['Privacy Policy', 'Terms of Service']

export default function FooterV3() {
  return (
    <footer style={{
      background: '#0c0d10',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '52px 40px 40px',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: 40, marginBottom: 48,
        }}>
          {/* Brand */}
          <div style={{ maxWidth: 240 }}>
            <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.04em', color: 'white' }}>
              Medley<span style={{ color: TEAL }}>HR</span>
            </span>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.32)', marginTop: 10, lineHeight: 1.6 }}>
              HR and payroll your team can own.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
            <div>
              <p style={{
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', color: 'rgba(255,255,255,0.22)', margin: '0 0 14px',
              }}>
                Product
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {PRODUCT_LINKS.map(l => (
                  <li key={l}>
                    <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.43)', fontWeight: 500, textDecoration: 'none' }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', color: 'rgba(255,255,255,0.22)', margin: '0 0 14px',
              }}>
                Legal
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {LEGAL.map(l => (
                  <li key={l}>
                    <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.43)', fontWeight: 500, textDecoration: 'none' }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', margin: 0 }}>
            © 2026 MedleyHR. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', margin: 0 }}>
            Made for teams that move fast.
          </p>
        </div>
      </div>
    </footer>
  )
}
