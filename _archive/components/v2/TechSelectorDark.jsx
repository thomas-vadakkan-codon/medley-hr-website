'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ITEMS = [
  {
    icon: '⊞',
    label: 'Payroll Automation',
    title: 'Payroll Automation',
    desc: 'Medley HR\'s payroll engine auto-calculates gross, deductions, PF, ESI, and TDS — then disburses to employee bank accounts in one click. Payslips generate and deliver automatically.',
  },
  {
    icon: '▶',
    label: 'Compliance Management',
    title: 'Compliance Management',
    desc: 'Statutory filings for PF, ESI, PT, and TDS are prepared and tracked automatically. Challans, returns, and Form 16 are generated with zero manual intervention.',
  },
  {
    icon: '⬡',
    label: 'Employee Self-Service',
    title: 'Employee Self-Service',
    desc: 'Employees access payslips, apply for leave, raise reimbursements, and manage their documents — without ever opening a ticket to HR. Mobile-first and always available.',
  },
  {
    icon: '◈',
    label: 'Analytics & Reports',
    title: 'Analytics & Reports',
    desc: 'Headcount trends, payroll cost breakdowns, leave patterns, and compliance status — surfaced as clean dashboards so leadership always has the numbers they need.',
  },
]

function CardGraphic({ index, color }) {
  const colors = ['#0f9e8a', '#3b82f6', '#8b5cf6', '#f59e0b']
  const c = colors[index % colors.length]
  const id = `sel-pat-${index}`
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill={c} opacity="0.35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <line x1="0" y1="60%" x2="100%" y2="10%" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />
      <line x1="0" y1="80%" x2="100%" y2="30%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
    </svg>
  )
}

export default function TechSelectorDark() {
  const [selected, setSelected] = useState(0)
  const item = ITEMS[selected]

  return (
    <section style={{
      background: '#0f1014', padding: '96px 0',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 40px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start',
      }}>
        {/* Left panel */}
        <div>
          <span style={{
            display: 'inline-block', padding: '5px 14px',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999,
            fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500,
            letterSpacing: '0.04em', marginBottom: 24,
          }}>
            Technology
          </span>

          <h2 style={{
            fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800,
            color: 'white', lineHeight: 1.1, letterSpacing: '-0.025em',
            margin: '0 0 28px',
          }}>
            Leading-Edge Technology<br />for Modern HR
          </h2>

          <a
            href="https://app.medleyhr.com/signup"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '11px 22px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 8, color: 'white', fontSize: 14, fontWeight: 600,
              marginBottom: 40,
            }}
          >
            Contact Us →
          </a>

          {/* List */}
          <div style={{ marginBottom: 12 }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 500,
              marginBottom: 12, letterSpacing: '0.04em',
            }}>
              <span>Select a capability</span>
              <span>{selected + 1}/{ITEMS.length}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {ITEMS.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '13px 16px', borderRadius: 10,
                    background: selected === i ? 'rgba(255,255,255,0.07)' : 'transparent',
                    border: selected === i ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
                    cursor: 'pointer', textAlign: 'left', width: '100%',
                  }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: selected === i ? 'rgba(15,158,138,0.15)' : 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, color: selected === i ? '#0f9e8a' : 'rgba(255,255,255,0.35)',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <span style={{
                    fontSize: 14, fontWeight: selected === i ? 600 : 500,
                    color: selected === i ? 'white' : 'rgba(255,255,255,0.45)',
                    flex: 1,
                  }}>
                    {item.label}
                  </span>
                  {selected === i && (
                    <div style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: '#0f9e8a', flexShrink: 0,
                    }} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel — stacked cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Top visual card */}
          <div style={{
            borderRadius: 16, overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            background: '#14161a', height: 200, position: 'relative',
          }}>
            <CardGraphic index={selected} />
            <div style={{
              position: 'absolute', bottom: 16, left: 16,
              fontSize: 11, color: 'rgba(255,255,255,0.3)',
              fontWeight: 600, letterSpacing: '0.06em',
            }}>
              / 00{selected + 1}
            </div>
            {/* Logo mark */}
            <div style={{
              position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: 5,
                background: 'linear-gradient(135deg,#0f9e8a,#065f52)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                  <path d="M2 12V4l4 4 2-4 2 4 4-4v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, fontWeight: 600, letterSpacing: '0.06em' }}>
                MEDLEY HR
              </span>
            </div>
          </div>

          {/* Bottom description card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              style={{
                borderRadius: 16, padding: '24px 24px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: '#14161a',
              }}
            >
              <h3 style={{
                fontSize: 22, fontWeight: 700, color: 'white',
                margin: '0 0 12px', letterSpacing: '-0.02em',
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: 0 }}>
                {item.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
