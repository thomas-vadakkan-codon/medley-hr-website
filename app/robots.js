export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://medleyhr.com/sitemap.xml',
    host: 'https://medleyhr.com',
  }
}
