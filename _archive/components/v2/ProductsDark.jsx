'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const MODULES = [
  {
    num: '001',
    title: 'Payroll Engine',
    desc: 'Run compliant payroll for your entire team in minutes. Auto-calculates PF, ESI, TDS — no manual math.',
    color: '#0f9e8a',
    pattern: 'dots-grid',
  },
  {
    num: '002',
    title: 'Attendance & Leave',
    desc: 'Real-time attendance tracking, geo-fencing, and leave workflows that managers and employees both love.',
    color: '#3b82f6',
    pattern: 'dots-scatter',
  },
  {
    num: '003',
    title: 'Compliance Suite',
    desc: 'PF, ESI, TDS, and Form 16 — built in, not bolted on. Auto-filings and statutory updates handled for you.',
    color: '#8b5cf6',
    pattern: 'circles',
  },
  {
    num: '004',
    title: 'Employee Portal',
    desc: 'Payslips, leave requests, reimbursements, documents — employees self-serve and HR stops being a helpdesk.',
    color: '#f59e0b',
    pattern: 'dots-grid',
  },
]

function DotPattern({ type, color }) {
  const id = `pat-${type}-${color.replace('#', '')}`

  if (type === 'circles') {
    return (
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }}>
        <defs>
          <pattern id={id} width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="10" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
        {/* Diagonal lines */}
        <line x1="-50" y1="250" x2="500" y2="-50" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />
        <line x1="80" y1="250" x2="550" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      </svg>
    )
  }
  if (type === 'dots-scatter') {
    return (
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.6 }}>
        <defs>
          <pattern id={id} width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2" fill={color} opacity="0.5" />
            <circle cx="16" cy="16" r="1.2" fill={color} opacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
        <line x1="-20" y1="0" x2="420" y2="280" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
        <line x1="60" y1="0" x2="480" y2="260" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      </svg>
    )
  }
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.55 }}>
      <defs>
        <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill={color} opacity="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <line x1="-40" y1="280" x2="440" y2="-40" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
      <line x1="100" y1="280" x2="560" y2="-20" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
    </svg>
  )
}

export default function ProductsDark() {
  const scrollRef = useRef(null)
  const [active, setActive] = useState(1)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 380, behavior: 'smooth' })
  }

  return (
    <section style={{
      background: '#0c0d10', padding: '96px 0',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span style={{
            display: 'inline-block', padding: '5px 14px',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999,
            fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500,
            letterSpacing: '0.04em', marginBottom: 20,
          }}>
            Our Modules
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 800,
            color: 'white', lineHeight: 1.1, letterSpacing: '-0.025em',
            margin: 0,
          }}>
            Everything your team needs —<br />in one platform
          </h2>
        </motion.div>

        {/* Card carousel */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none', paddingBottom: 8,
          }}
        >
          {MODULES.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                flex: '0 0 340px', scrollSnapAlign: 'start',
                background: '#14161a', borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.07)',
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
              }}
            >
              {/* Graphic area */}
              <div style={{
                position: 'relative', height: 220,
                background: `linear-gradient(135deg, #0f1318 0%, ${mod.color}18 100%)`,
                overflow: 'hidden',
              }}>
                <DotPattern type={mod.pattern} color={mod.color} />
                {/* Number tag */}
                <div style={{
                  position: 'absolute', top: 14, right: 14,
                  fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600,
                  letterSpacing: '0.06em',
                }}>
                  / {mod.num}
                </div>
                {/* Arrow */}
                <div style={{
                  position: 'absolute', top: 14, left: 14,
                  width: 28, height: 28, borderRadius: 7,
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)', fontSize: 13,
                }}>
                  ↗
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontSize: 22, fontWeight: 700, color: 'white',
                  margin: '0 0 10px', letterSpacing: '-0.02em',
                }}>
                  {mod.title} ↗
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: '0 0 24px', flex: 1 }}>
                  {mod.desc}
                </p>
                <a href="#" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                  paddingBottom: 2, width: 'fit-content',
                }}>
                  Learn more &gt;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 32 }}>
          {['←', '→'].map((arrow, i) => (
            <button
              key={arrow}
              onClick={() => scroll(i === 0 ? -1 : 1)}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'transparent', color: 'rgba(255,255,255,0.6)',
                fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
