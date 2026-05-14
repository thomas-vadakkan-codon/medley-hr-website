'use client'
import { ARTICLES } from '@/lib/articles'

const TEAL = '#0f9e8a'
const DARK = '#0D0F14'

export default function BlogTeaser() {
  const recent = [...ARTICLES]
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
    .slice(0, 3)

  return (
    <section style={{ padding: '0 16px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          background: 'white', borderRadius: 20,
          border: `2px solid ${DARK}`,
          overflow: 'hidden',
        }}>
          {/* Header row */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '20px 28px', borderBottom: `2px solid ${DARK}`,
          }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              color: 'rgba(13,15,20,0.4)', textTransform: 'uppercase', margin: 0,
            }}>
              From the Blog
            </p>
            <a href="/blog" style={{
              fontSize: 12, fontWeight: 700, color: TEAL,
              textDecoration: 'none', letterSpacing: '0.04em',
            }}>
              All articles →
            </a>
          </div>

          {/* Article rows */}
          {recent.map((article, i) => (
            <a
              key={article.slug}
              href={`/blog/${article.slug}`}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 16, padding: '16px 28px', textDecoration: 'none',
                borderBottom: i < recent.length - 1 ? `1px solid rgba(13,15,20,0.07)` : 'none',
                transition: 'background 0.1s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(13,15,20,0.02)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 6 }}>
                  {article.tags.slice(0, 2).map(tag => (
                    <span key={tag} style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.07em',
                      textTransform: 'uppercase', padding: '2px 8px',
                      background: 'rgba(15,158,138,0.1)', color: TEAL,
                      borderRadius: 999,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p style={{
                  fontSize: 14, fontWeight: 700, color: DARK,
                  margin: '0 0 4px', lineHeight: 1.35,
                }}>
                  {article.title}
                </p>
                <p style={{
                  fontSize: 12, color: 'rgba(13,15,20,0.45)',
                  margin: 0, lineHeight: 1.5,
                  display: '-webkit-box', WebkitLineClamp: 1,
                  WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>
                  {article.description}
                </p>
              </div>
              <span style={{
                fontSize: 11, color: 'rgba(13,15,20,0.35)', fontWeight: 500,
                whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                {article.readTime}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
