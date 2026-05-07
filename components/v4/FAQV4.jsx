'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'
const BORDER = `2px solid ${DARK}`

const FAQS = [
  { q: 'Can you build something specific to our workflow?', a: "Yes. We build based on what our users ask for. If a feature's missing or a workflow doesn't fit, raise a request — we take it seriously. Email hello@medleyhr.com." },
  { q: 'Is my payroll data secure?', a: "Yes. 256-bit SSL encryption, role-based access controls, and regular security audits. Your data is yours." },
  { q: 'Can I migrate from my existing HRMS?', a: "Yes. Connect last month's payroll data during setup and run your next payroll without a gap. Most teams complete migration within a day." },
  { q: 'Is MedleyHR compliant with Indian tax laws?', a: "PF, ESI, TDS, PT, and Form 16 — handled out of the box, not as add-ons. Updates automatically with regulatory changes." },
  { q: 'Do I need a consultant to set up?', a: "No. Fully self-serve. Sign up, configure, and you're ready to run payroll. Most teams are set up within a day." },
  { q: 'Can MedleyHR handle multiple offices?', a: "Yes. Multi-branch on Growth and Scale plans — separate departments, locations, pay schedules, one organisation." },
]

export default function FAQV4() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" style={{ padding: '16px 16px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="v4-faq-grid" style={{
          background: 'white', borderRadius: 20, border: BORDER, overflow: 'hidden',
          display: 'grid', gridTemplateColumns: '340px 1fr',
        }}>
          {/* Left label */}
          <div className="v4-faq-left" style={{
            background: TEAL, padding: '40px 36px',
            borderRight: BORDER,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{
                display: 'inline-block', padding: '4px 12px',
                border: '1px solid rgba(255,255,255,0.3)', borderRadius: 999,
                fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 600,
                letterSpacing: '0.06em', marginBottom: 20, textTransform: 'uppercase',
              }}>
                FAQ
              </div>
              <h2 className="v4-display" style={{ fontSize: 40, color: 'white', margin: '0 0 16px' }}>
                Questions We Get Asked
              </h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>
                Something not here? We reply the same day.
              </p>
            </div>
            <a href="mailto:hello@medleyhr.com" style={{
              display: 'inline-block', padding: '10px 18px',
              background: AMBER, border: `2px solid ${DARK}`, borderRadius: 8,
              fontSize: 13, fontWeight: 700, color: DARK, textDecoration: 'none',
              letterSpacing: '0.04em', marginTop: 28, width: 'fit-content',
            }}>
              CONTACT US
            </a>
          </div>

          {/* Right accordion */}
          <div style={{ padding: '0 0' }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < FAQS.length - 1 ? `1px solid #e2e8f0` : 'none' }}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '20px 28px',
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 20,
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 700, color: DARK, lineHeight: 1.35 }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    border: `2px solid ${open === i ? TEAL : '#e2e8f0'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                    transition: 'all 0.2s',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <line x1="6" y1="1" x2="6" y2="11" stroke={open === i ? TEAL : '#94a3b8'} strokeWidth="1.8" strokeLinecap="round"/>
                      <line x1="1" y1="6" x2="11" y2="6" stroke={open === i ? TEAL : '#94a3b8'} strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        padding: '0 28px 20px', margin: 0,
                        fontSize: 14, color: '#64748b', lineHeight: 1.7,
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
