import { ARTICLES } from '@/lib/articles'

export const dynamic = 'force-static'

export default function sitemap() {
  const base = 'https://medleyhr.com'
  const now = new Date()
  return [
    { url: `${base}`,         lastModified: now,                             changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/blog`,    lastModified: now,                             changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now,                             changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/terms`,   lastModified: now,                             changeFrequency: 'monthly', priority: 0.3 },
    ...ARTICLES.map(a => ({
      url: `${base}/blog/${a.slug}`,
      lastModified: new Date(a.publishDate),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ]
}
