'use client'
import { AUTHORS } from '@/lib/articles'

const TEAL = '#0f9e8a'
const DARK = '#0D0F14'

function TagPill({ label }) {
  return (
    <span style={{
      fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
      textTransform: 'uppercase', padding: '4px 10px',
      background: 'rgba(15,158,138,0.12)', color: TEAL,
      borderRadius: 999, border: '1px solid rgba(15,158,138,0.25)',
    }}>
      {label}
    </span>
  )
}

export default function BlogCard({ article }) {
  const author = AUTHORS[article.author] || AUTHORS.harshitha
  return (
    <a href={`/blog/${article.slug}`} style={{ textDecoration: 'none', display: 'flex', height: '100%' }}>
      <article
        style={{
          background: 'white', borderRadius: 16,
          border: `2px solid ${DARK}`,
          padding: '28px 28px 24px',
          display: 'flex', flexDirection: 'column',
          width: '100%',
          transition: 'transform 0.15s, box-shadow 0.15s',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-3px)'
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(13,15,20,0.12)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
          {article.tags.map(tag => <TagPill key={tag} label={tag} />)}
        </div>

        <h2 style={{
          fontSize: 18, fontWeight: 700, color: DARK,
          lineHeight: 1.35, margin: '0 0 12px',
        }}>
          {article.title}
        </h2>

        <p style={{
          fontSize: 13, color: 'rgba(13,15,20,0.55)',
          lineHeight: 1.6, margin: '0 0 20px', flex: 1,
        }}>
          {article.description}
        </p>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 16, borderTop: '1px solid rgba(13,15,20,0.08)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img
              src={author.photo}
              alt={author.name}
              width={24}
              height={24}
              style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
            <span style={{ fontSize: 12, color: 'rgba(13,15,20,0.55)', fontWeight: 600 }}>
              {author.name}
            </span>
          </div>
          <span style={{ fontSize: 12, color: 'rgba(13,15,20,0.4)', fontWeight: 500 }}>
            {article.readTime}
          </span>
        </div>
      </article>
    </a>
  )
}
