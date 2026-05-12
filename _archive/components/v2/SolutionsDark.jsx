'use client'
import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: '₹',
    title: 'Payroll Processing',
    desc: 'Auto-calculate salaries, deductions, and net pay for your entire team. Bulk disbursal to bank accounts with a single click.',
    num: '01',
    highlight: true,
  },
  {
    icon: '⚖',
    title: 'Compliance Auto-Filing',
    desc: 'PF, ESI, PT, TDS — Medley tracks due dates, prepares challans, and generates returns so you never miss a deadline.',
    num: '02',
    highlight: false,
  },
  {
    icon: '📋',
    title: 'Leave Management',
    desc: 'Multi-tier approval workflows, leave balance tracking, holiday calendars, and real-time team availability at a glance.',
    num: '03',
    highlight: false,
  },
  {
    icon: '📄',
    title: 'Form 16 & Reports',
    desc: 'One-click Form 16 generation and distribution. Payroll registers, cost summaries, and audit-ready reports always available.',
    num: '04',
    highlight: false,
  },
]

export default function SolutionsDark() {
  return (
    <section style={{
      background: '#0c0d10', padding: '96px 0',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 40px',
        display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start',
      }}>
        {/* Left */}
        <div>
          <span style={{
            display: 'inline-block', padding: '5px 14px',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999,
            fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500,
            letterSpacing: '0.04em', marginBottom: 20,
          }}>
            Enterprise Solutions
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800,
              color: 'white', lineHeight: 1.1, letterSpacing: '-0.025em',
              margin: '0 0 16px',
            }}
          >
            Tailored HR Solutions to Elevate Your Business
          </motion.h2>

          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, marginBottom: 28 }}>
            Harness the power of automation and smart workflows for unparalleled HR efficiency.
          </p>

          <a
            href="https://app.medleyhr.com/signup"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '11px 22px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 8, color: 'white', fontSize: 14, fontWeight: 600,
            }}
          >
            Get Started →
          </a>
        </div>

        {/* Right — asymmetric card grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                borderRadius: 16, padding: '24px 24px 28px',
                background: f.highlight ? 'rgba(15,158,138,0.08)' : '#14161a',
                border: f.highlight ? '1px solid rgba(15,158,138,0.2)' : '1px solid rgba(255,255,255,0.07)',
                position: 'relative', overflow: 'hidden',
                minHeight: 190,
              }}
            >
              {/* Ghost number */}
              <div style={{
                position: 'absolute', bottom: -10, right: 12,
                fontSize: 80, fontWeight: 900, color: 'rgba(255,255,255,0.03)',
                lineHeight: 1, letterSpacing: '-0.04em', userSelect: 'none',
                pointerEvents: 'none',
              }}>
                {f.num}
              </div>

              {/* Icon */}
              <div style={{
                width: 38, height: 38, borderRadius: 9,
                background: f.highlight ? 'rgba(15,158,138,0.2)' : 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, marginBottom: 14,
              }}>
                {f.icon}
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
                <h3 style={{
                  fontSize: 16, fontWeight: 700, color: 'white',
                  margin: 0, letterSpacing: '-0.015em', lineHeight: 1.3,
                }}>
                  {f.title}
                </h3>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14, marginLeft: 8 }}>↗</span>
              </div>

              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
