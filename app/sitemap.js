export default function sitemap() {
  const base = 'https://medleyhr.com'
  const now = new Date()
  return [
    { url: `${base}`,         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/terms`,   lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ]
}
