import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'
const BORDER = `2px solid ${DARK}`

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using the MedleyHR platform. Governs your use of MedleyHR HR and payroll software.',
  alternates: { canonical: 'https://medleyhr.com/terms' },
  robots: { index: true, follow: true },
}

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: [
      'By creating an account or using MedleyHR, you agree to these Terms of Service on behalf of your organisation.',
      'If you do not agree to these terms, do not use the platform.',
      'These terms apply to all users of MedleyHR, including administrators and employees accessing the self-service portal.',
    ],
  },
  {
    title: 'Account Registration',
    body: [
      'You must provide accurate and complete information when creating your account. You are responsible for keeping this information up to date.',
      'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.',
      'Notify us immediately at hello@medleyhr.com if you suspect unauthorised access to your account.',
      'One account per organisation. You may not create multiple accounts to circumvent plan limits.',
    ],
  },
  {
    title: 'Subscription and Payment',
    body: [
      'MedleyHR offers a free Starter plan for up to 10 employees, and paid plans (Growth and Scale) billed monthly or annually.',
      'Paid plans are billed in advance. All prices are in Indian Rupees (INR) and exclusive of applicable taxes (GST).',
      'Annual plans offer a discount equivalent to 2 months free. Annual subscriptions are non-refundable after the first 7 days.',
      'We reserve the right to change pricing with 30 days\' notice. Price changes do not affect active annual subscriptions until renewal.',
      'Failure to pay may result in account suspension. Data is retained for 60 days after suspension before deletion.',
    ],
  },
  {
    title: 'Acceptable Use',
    body: [
      'You may use MedleyHR only for lawful HR and payroll management purposes for your own organisation.',
      'You may not use the platform to process data for organisations other than your own without a separate agreement.',
      'You must not attempt to reverse-engineer, copy, or replicate any part of the MedleyHR platform.',
      'You must not upload malicious code, attempt to gain unauthorised access to other accounts, or interfere with the platform\'s operation.',
      'Violation of acceptable use may result in immediate account termination without refund.',
    ],
  },
  {
    title: 'Data Ownership',
    body: [
      'You own all data you upload to MedleyHR. We do not claim any rights over your employee or payroll data.',
      'You grant MedleyHR a limited licence to store and process your data solely to provide the services described in these terms.',
      'You are responsible for ensuring you have the legal right to upload and process the employee data you enter into the platform.',
      'You can export your data at any time. Upon account termination, data is deleted within 30 days unless retention is required by law.',
    ],
  },
  {
    title: 'Platform Availability',
    body: [
      'We aim for 99.5% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance.',
      'We are not liable for losses resulting from temporary unavailability of the platform.',
      'We reserve the right to modify or discontinue features with reasonable notice.',
    ],
  },
  {
    title: 'Intellectual Property',
    body: [
      'MedleyHR and all its components — software, design, content, and trademarks — are owned by Codonsoft Technologies.',
      'These terms do not grant you any rights to our intellectual property beyond the limited right to use the platform as described.',
      'Feedback or suggestions you share with us may be used to improve the product without obligation to you.',
    ],
  },
  {
    title: 'Limitation of Liability',
    body: [
      'MedleyHR is provided "as is." We make no warranties, express or implied, regarding fitness for a particular purpose or accuracy of statutory calculations.',
      'You are responsible for verifying payroll outputs and statutory filings. MedleyHR provides tools to assist with compliance but does not guarantee compliance outcomes.',
      'Our total liability to you for any claim arising from use of the platform shall not exceed the amount you paid us in the 3 months preceding the claim.',
      'We are not liable for indirect, consequential, or punitive damages of any kind.',
    ],
  },
  {
    title: 'Termination',
    body: [
      'You may cancel your account at any time from within the platform settings.',
      'We may suspend or terminate your account for violation of these terms, non-payment, or any activity that poses a risk to other users or the platform.',
      'On termination, your access to the platform ends immediately. Data export must be completed before termination.',
    ],
  },
  {
    title: 'Governing Law',
    body: [
      'These terms are governed by the laws of India.',
      'Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.',
      'We encourage resolving disputes amicably first — contact us at hello@medleyhr.com before initiating legal proceedings.',
    ],
  },
  {
    title: 'Changes to These Terms',
    body: [
      'We may update these Terms of Service from time to time. We will notify account administrators by email at least 14 days before material changes take effect.',
      'Continued use of MedleyHR after the effective date constitutes acceptance of the updated terms.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'Questions about these terms? Email us at: hello@medleyhr.com',
      'MedleyHR is operated by Codonsoft Technologies. Registered address available on request.',
    ],
  },
]

export default function TermsPage() {
  return (
    <div style={{ background: '#F0F4F1', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <Nav />

      {/* Hero — paddingTop offsets fixed nav */}
      <div style={{ padding: '90px 16px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            background: DARK, borderRadius: 20, border: BORDER,
            padding: '48px 56px',
          }}>
            <a href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 12px', border: `1px solid rgba(255,255,255,0.2)`, borderRadius: 999,
              fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em',
              textTransform: 'uppercase', marginBottom: 20, textDecoration: 'none',
            }}>
              ← Back to MedleyHR
            </a>
            <h1 style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 'clamp(40px, 6vw, 80px)',
              color: 'white', margin: '0 0 16px', lineHeight: 0.95,
              textTransform: 'uppercase', letterSpacing: '-0.01em',
            }}>
              Terms of<br /><span style={{ color: AMBER }}>Service</span>
            </h1>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
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
              These Terms of Service govern your use of the MedleyHR platform. Please read them carefully. By using MedleyHR, your organisation agrees to be bound by these terms.
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
