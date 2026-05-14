import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getArticle, getAllSlugs, AUTHORS } from '@/lib/articles'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `https://medleyhr.com/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://medleyhr.com/blog/${article.slug}`,
      type: 'article',
      publishedTime: article.publishDate,
      authors: ['MedleyHR'],
    },
  }
}

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'

function ContentBlock({ block }) {
  switch (block.type) {
    case 'p':
      return (
        <p style={{
          fontSize: 16, lineHeight: 1.75, color: 'rgba(13,15,20,0.78)',
          margin: '0 0 20px',
        }}>
          {block.text}
        </p>
      )

    case 'h2':
      return (
        <h2 style={{
          fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700,
          color: DARK, margin: '44px 0 16px', lineHeight: 1.25,
        }}>
          {block.text}
        </h2>
      )

    case 'h3':
      return (
        <h3 style={{
          fontSize: 17, fontWeight: 700, color: DARK,
          margin: '28px 0 10px', lineHeight: 1.3,
        }}>
          {block.text}
        </h3>
      )

    case 'ul':
      return (
        <ul style={{ margin: '0 0 20px', paddingLeft: 20 }}>
          {block.items.map((item, i) => (
            <li key={i} style={{
              fontSize: 15, lineHeight: 1.7, color: 'rgba(13,15,20,0.75)',
              marginBottom: 10,
            }}>
              {item}
            </li>
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol style={{ margin: '0 0 20px', paddingLeft: 20 }}>
          {block.items.map((item, i) => (
            <li key={i} style={{
              fontSize: 15, lineHeight: 1.7, color: 'rgba(13,15,20,0.75)',
              marginBottom: 10,
            }}>
              {item}
            </li>
          ))}
        </ol>
      )

    case 'callout':
      return (
        <div style={{
          background: DARK, borderRadius: 14,
          padding: '24px 28px', margin: '32px 0',
          borderLeft: `4px solid ${TEAL}`,
        }}>
          <p style={{
            fontSize: 15, lineHeight: 1.65,
            color: 'rgba(255,255,255,0.75)', margin: 0,
          }}>
            {block.text}{' '}
            <a
              href="https://app.medleyhr.com/signup"
              style={{ color: TEAL, fontWeight: 700, textDecoration: 'none' }}
            >
              Start free →
            </a>
          </p>
        </div>
      )

    case 'table':
      return (
        <div className="blog-table-wrap" style={{ margin: '24px 0 28px' }}>
          <table style={{
            width: '100%', borderCollapse: 'collapse',
            fontSize: 14, minWidth: 480,
          }}>
            <thead>
              <tr style={{ background: DARK }}>
                {block.headers.map((h, i) => (
                  <th key={i} style={{
                    padding: '10px 14px', textAlign: i === 0 ? 'left' : 'center',
                    fontWeight: 700, fontSize: 12, letterSpacing: '0.05em',
                    color: i === 0 ? 'rgba(255,255,255,0.5)' : AMBER,
                    textTransform: 'uppercase',
                    borderBottom: `2px solid rgba(255,255,255,0.08)`,
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} style={{
                  background: ri % 2 === 0 ? 'white' : 'rgba(13,15,20,0.03)',
                }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{
                      padding: '10px 14px',
                      textAlign: ci === 0 ? 'left' : 'center',
                      fontWeight: ci === 0 ? 600 : 400,
                      color: ci === 0 ? DARK : 'rgba(13,15,20,0.65)',
                      borderBottom: '1px solid rgba(13,15,20,0.06)',
                      fontSize: 13,
                    }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    default:
      return null
  }
}

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function ArticleSchemas({ article, author }) {
  const url = `https://medleyhr.com/blog/${article.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: { '@type': 'Person', name: author.name, jobTitle: author.role, worksFor: { '@type': 'Organization', name: 'MedleyHR', url: 'https://medleyhr.com' } },
    publisher: {
      '@type': 'Organization',
      name: 'MedleyHR',
      url: 'https://medleyhr.com',
      logo: { '@type': 'ImageObject', url: 'https://medleyhr.com/og-image.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: [article.primaryKeyword, ...article.tags].join(', '),
    inLanguage: 'en-IN',
    isPartOf: { '@type': 'Blog', '@id': 'https://medleyhr.com/blog', name: 'MedleyHR Blog' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://medleyhr.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://medleyhr.com/blog' },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {article.faqSchema && (
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faqSchema,
        }} />
      )}
      {article.howToSchema && (
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          ...article.howToSchema,
        }} />
      )}
    </>
  )
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const author = AUTHORS[article.author] || AUTHORS.harshitha

  const publishedFormatted = new Date(article.publishDate).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <div className="blog-page" style={{ background: '#F0F4F1', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <ArticleSchemas article={article} author={author} />
      <Nav />

      {/* Hero header */}
      <div style={{ padding: '90px 16px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="blog-article-hero" style={{
            background: DARK, borderRadius: 20,
            border: `2px solid ${DARK}`,
          }}>
            <a href="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 12px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999,
              fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em',
              textTransform: 'uppercase', marginBottom: 24, textDecoration: 'none',
            }}>
              ← All Articles
            </a>

            {/* Tags */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
              {article.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', padding: '4px 10px',
                  background: 'rgba(15,158,138,0.15)', color: TEAL,
                  borderRadius: 999, border: '1px solid rgba(15,158,138,0.3)',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(26px, 4vw, 52px)', fontWeight: 800,
              color: 'white', margin: '0 0 20px', lineHeight: 1.15,
              maxWidth: 820,
            }}>
              {article.title}
            </h1>

            <div className="blog-article-meta">
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                {publishedFormatted}
              </span>
              <span className="blog-meta-dot" />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                {article.readTime}
              </span>
              <span className="blog-meta-dot" />
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img
                  src={author.photo}
                  alt={author.name}
                  width={22}
                  height={22}
                  style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                  {author.name}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div style={{ padding: '40px 16px 24px' }}>
        <div className="blog-article-body" style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Main content */}
          <div className="blog-article-content" style={{
            background: 'white', borderRadius: 16,
            border: `2px solid ${DARK}`,
          }}>
            {article.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* CTA card */}
            <div style={{
              background: DARK, borderRadius: 16,
              border: `2px solid ${DARK}`,
              padding: '28px 24px',
              marginBottom: 16,
            }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                color: TEAL, textTransform: 'uppercase', marginBottom: 12,
              }}>
                Try MedleyHR
              </p>
              <p style={{
                fontSize: 14, color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6, margin: '0 0 20px',
              }}>
                Self-serve HR &amp; payroll for India. Free for up to 10 employees — no credit card, no consultant.
              </p>
              <a href="https://app.medleyhr.com/signup" style={{
                display: 'block', textAlign: 'center',
                padding: '13px', background: TEAL, borderRadius: 10,
                fontSize: 13, fontWeight: 700, color: 'white',
                textDecoration: 'none', letterSpacing: '0.04em',
              }}>
                START FOR FREE
              </a>
              <p style={{
                fontSize: 11, textAlign: 'center',
                color: 'rgba(255,255,255,0.25)', margin: '10px 0 0',
              }}>
                PF · ESI · TDS · Form 16 included
              </p>
            </div>

            {/* Related articles */}
            <div style={{
              background: 'white', borderRadius: 16,
              border: `2px solid ${DARK}`, padding: '20px 20px',
            }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                color: 'rgba(13,15,20,0.4)', textTransform: 'uppercase',
                marginBottom: 14,
              }}>
                More from MedleyHR
              </p>
              <a href="/blog" style={{
                display: 'block', fontSize: 13, fontWeight: 600,
                color: DARK, textDecoration: 'none', lineHeight: 1.4,
                padding: '8px 0', borderBottom: '1px solid rgba(13,15,20,0.06)',
              }}>
                ← Back to all articles
              </a>
              <a href="https://medleyhr.com/#pricing" style={{
                display: 'block', fontSize: 13, fontWeight: 600,
                color: DARK, textDecoration: 'none', lineHeight: 1.4,
                padding: '8px 0', borderBottom: '1px solid rgba(13,15,20,0.06)',
              }}>
                View pricing plans
              </a>
              <a href="https://app.medleyhr.com/signup" style={{
                display: 'block', fontSize: 13, fontWeight: 600,
                color: TEAL, textDecoration: 'none', lineHeight: 1.4,
                padding: '8px 0',
              }}>
                Sign up free →
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Author bio — same grid wrapper as article body so card matches content column width */}
      <div style={{ padding: '0 16px 16px' }}>
        <div className="blog-article-body" style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            background: 'white', borderRadius: 16, border: `2px solid ${DARK}`,
            padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 20,
          }}>
            <img
              src={author.photo}
              alt={author.name}
              width={64}
              height={64}
              style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: `2px solid ${DARK}` }}
            />
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: TEAL, textTransform: 'uppercase', margin: '0 0 4px' }}>
                Written by
              </p>
              <p style={{ fontSize: 17, fontWeight: 700, color: DARK, margin: '0 0 2px' }}>
                {author.name}
              </p>
              <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(13,15,20,0.4)', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {author.role}
              </p>
              <p style={{ fontSize: 14, color: 'rgba(13,15,20,0.6)', lineHeight: 1.6, margin: 0 }}>
                {author.bio}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
