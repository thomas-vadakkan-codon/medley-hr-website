import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import { ARTICLES } from '@/lib/articles'

export const metadata = {
  title: 'HR & Payroll Blog — MedleyHR',
  description:
    'No fluff. Practical guides on payroll, India compliance, and HRMS for teams doing it themselves. Written for Indian HR managers and founders.',
  alternates: { canonical: 'https://medleyhr.com/blog' },
  openGraph: {
    title: 'HR & Payroll Blog — MedleyHR',
    description: 'Practical guides on HR software, payroll management, and India compliance for growing businesses.',
    url: 'https://medleyhr.com/blog',
    type: 'website',
  },
}

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'

export default function BlogPage() {
  const sorted = [...ARTICLES].sort((a, b) => b.publishDate.localeCompare(a.publishDate))

  return (
    <div style={{ background: '#F0F4F1', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <Nav />

      {/* Hero */}
      <div style={{ padding: '90px 16px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            background: DARK, borderRadius: 20, border: `2px solid ${DARK}`,
            padding: '48px 56px 52px',
          }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
              color: TEAL, textTransform: 'uppercase', marginBottom: 16,
            }}>
              MedleyHR Blog
            </p>
            <h1 style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 'clamp(40px, 6vw, 80px)',
              color: 'white', margin: '0 0 16px', lineHeight: 0.95,
              textTransform: 'uppercase', letterSpacing: '-0.01em',
            }}>
              The HR Playbook<br />For <span style={{ color: AMBER }}>Indian Businesses</span>
            </h1>
            <p style={{
              fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 520,
              lineHeight: 1.6, margin: 0,
            }}>
              No fluff. Just practical guides on payroll, compliance, and HRMS — written for teams doing it themselves.
            </p>
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div style={{ padding: '32px 16px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 16,
            alignItems: 'stretch',
          }}>
            {sorted.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
