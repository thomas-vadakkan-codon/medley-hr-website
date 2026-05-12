'use client'
import { useState, useEffect } from 'react'
import Script from 'next/script'

const GA_ID = 'G-KF9738VGFV'
const STORAGE_KEY = 'medleyhr_cookie_consent'

export default function CookieBanner() {
  const [consent, setConsent] = useState(null) // null = not decided yet

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) setConsent(stored) // 'granted' or 'denied'
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'granted')
    setConsent('granted')
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'denied')
    setConsent('denied')
  }

  return (
    <>
      {/* Load GA4 only after consent is granted */}
      {consent === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}

      {/* Banner — show only when no decision made */}
      {consent === null && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999,
          background: 'var(--color-v4-dark)', borderTop: '2px solid rgba(255,255,255,0.08)',
          padding: '14px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 16, flexWrap: 'wrap',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.2)',
        }}>
          <p style={{
            fontSize: 13, color: 'rgba(255,255,255,0.55)',
            margin: 0, lineHeight: 1.5,
          }}>
            We use cookies to understand how visitors use MedleyHR.com — page views, feature interest, and drop-off points. No personal data is sold.{' '}
            <a href="/privacy" style={{ color: 'var(--color-v4-teal)', textDecoration: 'none' }}>
              Privacy policy
            </a>
          </p>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <button onClick={decline} style={{
              padding: '8px 20px', borderRadius: 8,
              background: 'transparent', border: '1.5px solid rgba(255,255,255,0.18)',
              fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)',
              cursor: 'pointer', fontFamily: 'inherit',
            }}>
              Decline
            </button>
            <button onClick={accept} style={{
              padding: '8px 20px', borderRadius: 8,
              background: 'var(--color-v4-teal)', border: 'none',
              fontSize: 12, fontWeight: 700, color: 'white',
              cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.03em',
            }}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  )
}
