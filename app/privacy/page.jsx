import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'
const BORDER = `2px solid ${DARK}`

export const metadata = {
  title: 'Privacy Policy',
  description: 'How MedleyHR collects, uses, and protects your employee and payroll data. Your data belongs to you.',
  alternates: { canonical: 'https://medleyhr.com/privacy' },
  robots: { index: true, follow: true },
}

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: [
      'Organisation data: company name, GST/PAN, registered address, and administrator contact details provided during account setup.',
      'Employee data: names, contact information, salary details, PAN, bank account numbers, leave records, and attendance — entered by your organisation\'s HR administrator.',
      'Usage data: pages visited, features used, session duration, and browser/device information collected automatically to improve the product.',
      'Communications: emails or messages you send us, including support requests.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      'To provide, operate, and improve the MedleyHR platform.',
      'To process payroll, generate payslips, and calculate statutory deductions (PF, ESI, TDS, PT) as instructed by your organisation.',
      'To send transactional emails such as payslip notifications, leave approvals, and account alerts.',
      'To comply with applicable Indian laws, including the Income Tax Act, EPF Act, and Digital Personal Data Protection Act 2023.',
      'To respond to support queries and communicate product updates.',
    ],
  },
  {
    title: 'Data Storage and Security',
    body: [
      'Your data is stored on servers located in India. We use industry-standard 256-bit SSL/TLS encryption for data in transit and AES-256 encryption for data at rest.',
      'Access to your organisation\'s data is protected by role-based access controls. Only users you authorise can view or edit employee records.',
      'We conduct regular security audits and maintain backups to prevent data loss.',
      'We will notify you promptly in the event of a data breach affecting your organisation.',
    ],
  },
  {
    title: 'Data Sharing',
    body: [
      'We do not sell your data to third parties.',
      'We share data only with service providers necessary to operate MedleyHR (such as cloud hosting and email delivery), under strict confidentiality agreements.',
      'We may disclose data if required by Indian law, court order, or government authority.',
      'If your organisation uses integrations (such as bank payment APIs), data is shared only as required to complete those transactions.',
    ],
  },
  {
    title: 'Data Ownership',
    body: [
      'Your organisation owns all employee and payroll data you upload to MedleyHR. We act as a data processor on your behalf.',
      'You can export your data at any time from within the platform.',
      'On account termination, we will delete or return your data within 30 days, unless retention is required by law.',
    ],
  },
  {
    title: 'Employee Rights',
    body: [
      'Employees accessing MedleyHR through their employer\'s account may request access to their personal data held in the system.',
      'Corrections to personal data should be requested through your HR administrator.',
      'Data subject rights under the Digital Personal Data Protection Act 2023 are honoured. Contact us at hello@medleyhr.com for any such requests.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'MedleyHR uses essential cookies to maintain your login session and platform preferences.',
      'We use analytics cookies to understand how the product is used — this data is aggregated and not linked to individual users.',
      'You can disable non-essential cookies in your browser settings without affecting core platform functionality.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. We will notify account administrators of material changes by email at least 14 days before they take effect.',
      'Continued use of MedleyHR after the effective date of changes constitutes acceptance of the updated policy.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'For privacy-related queries, data requests, or concerns, contact us at: hello@medleyhr.com',
      'MedleyHR is operated by Codonsoft Technologies. Registered address available on request.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div style={{ background: '#F0F4F1', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <Nav />

      {/* Hero — paddingTop offsets fixed nav */}
      <div style={{ padding: '90px 16px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            background: AMBER, borderRadius: 20, border: BORDER,
            padding: '48px 56px',
          }}>
            <a href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 12px', border: `1px solid rgba(0,0,0,0.18)`, borderRadius: 999,
              fontSize: 11, fontWeight: 700, color: DARK, letterSpacing: '0.06em',
              textTransform: 'uppercase', marginBottom: 20, textDecoration: 'none',
            }}>
              ← Back to MedleyHR
            </a>
            <h1 style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 'clamp(40px, 6vw, 80px)',
              color: DARK, margin: '0 0 16px', lineHeight: 0.95,
              textTransform: 'uppercase', letterSpacing: '-0.01em',
            }}>
              Privacy<br />Policy
            </h1>
            <p style={{ fontSize: 14, color: DARK, opacity: 0.6, margin: 0 }}>
              Last updated: May 2026
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '12px 16px 16px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ background: 'white', borderRadius: 20, border: BORDER, padding: '48px 56px' }}>
            <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, margin: '0 0 40px', maxWidth: 760 }}>
              MedleyHR is committed to protecting the privacy of your organisation and your employees. This policy explains what data we collect, how we use it, and your rights — in plain language.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {SECTIONS.map((section, i) => (
                <div key={i} style={{ paddingTop: 40, borderTop: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                    <span style={{
                      fontFamily: 'Anton, Impact, sans-serif', fontSize: 12,
                      color: '#cbd5e1', letterSpacing: '0.1em', flexShrink: 0, paddingTop: 4,
                    }}>
                      / {String(i + 1).padStart(2, '0')}
                    </span>
                    <div style={{ flex: 1 }}>
                      <h2 style={{
                        fontFamily: 'Anton, Impact, sans-serif',
                        fontSize: 22, color: DARK, margin: '0 0 16px',
                        textTransform: 'uppercase', letterSpacing: '0.01em',
                      }}>
                        {section.title}
                      </h2>
                      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {section.body.map((item, j) => (
                          <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                            <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>—</span>
                            <span style={{ fontSize: 14, color: '#475569', lineHeight: 1.75 }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
