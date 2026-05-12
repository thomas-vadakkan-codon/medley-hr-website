'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TEAL = '#0f9e8a'

const FAQS = [
  {
    q: 'Can you build something specific to our workflow?',
    a: "Yes. We're actively building MedleyHR based on what our users ask for. If there's a feature missing, a report you need, or a workflow that doesn't quite fit — raise a request and we'll look at it seriously. Email us at hello@medleyhr.com.",
  },
  {
    q: 'Is my payroll data secure?',
    a: "Yes. MedleyHR uses 256-bit SSL encryption, role-based access controls, and regular security audits. Your data is yours — we don't sell it, share it, or use it for anything beyond running your account.",
  },
  {
    q: 'Can I migrate from my existing HRMS?',
    a: "Yes. Connect your previous month's payroll data during setup and run your next payroll without any gap. No double entry, no manual reconciliation. Most teams complete the migration within a day.",
  },
  {
    q: 'Is MedleyHR compliant with Indian tax laws?',
    a: "Yes. PF, ESI, TDS, PT, and Form 16 are handled out of the box — not as add-ons. The system updates with regulatory changes automatically so you're always filing correctly.",
  },
  {
    q: 'Do I need a consultant or implementation partner to set up?',
    a: "No. MedleyHR is fully self-serve. Sign up, configure your organisation, and you're ready to run payroll. Most teams are fully set up within a day — no calls, no waiting.",
  },
  {
    q: 'What happens if I need help?',
    a: "In-app support, documentation, and email support are available on all plans. The Scale plan includes priority support and a dedicated account manager who actually knows your setup.",
  },
  {
    q: 'Can MedleyHR handle multiple offices or branches?',
    a: "Yes. Multi-branch setup is supported on Growth and Scale plans. Manage separate departments, locations, pay schedules, and salary components — all under one organisation, with consolidated reporting.",
  },
]

function FAQItem({ item, open, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '22px 0',
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 20,
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: 'white', lineHeight: 1.45 }}>
          {item.q}
        </span>
        <div style={{
          width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
          border: '1px solid rgba(255,255,255,0.14)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: open ? TEAL : 'rgba(255,255,255,0.35)',
          fontSize: 18, lineHeight: 1,
          transform: open ? 'rotate(45deg)' : 'none',
          transition: 'transform 0.2s, color 0.2s',
        }}>
          +
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontSize: 14, color: 'rgba(255,255,255,0.43)',
              lineHeight: 1.7, margin: '0 0 24px', maxWidth: 620,
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQV3() {
  const [open, setOpen] = useState(0)

  return (
    <section style={{
      background: 'white',
      padding: '96px 40px',
      borderTop: '1px solid #f1f5f9',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span style={{
            display: 'inline-block', padding: '5px 14px',
            border: '1px solid #d1d5db', borderRadius: 999,
            fontSize: 12, color: '#6b7280', fontWeight: 500, letterSpacing: '0.04em', marginBottom: 20,
          }}>
            FAQ
          </span>
          <h2 style={{
            fontSize: 'clamp(24px,2.8vw,36px)', fontWeight: 800, color: '#0f172a',
            letterSpacing: '-0.025em', margin: '0 0 14px',
          }}>
            Questions we get asked
          </h2>
          <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, margin: '0 0 24px' }}>
            If your question isn't here, email us and we'll get back to you the same day.
          </p>
          <a href="mailto:hello@medleyhr.com" style={{
            fontSize: 13, color: TEAL, fontWeight: 500,
            textDecoration: 'underline',
          }}>
            hello@medleyhr.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Dark card wrapper */}
          <div style={{
            background: '#14161a', borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.07)',
            padding: '8px 28px',
          }}>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} item={faq} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
