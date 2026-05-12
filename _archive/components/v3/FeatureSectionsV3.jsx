'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TEAL = '#0f9e8a'

function DotPattern({ color, type = 'dots' }) {
  const id = `fp-${color.replace('#','')}-${type}`
  if (type === 'circles') return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.45 }}>
      <defs><pattern id={id} width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="14" cy="14" r="10" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
      </pattern></defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <line x1="-30" y1="200" x2="440" y2="-20" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />
    </svg>
  )
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }}>
      <defs><pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.4" fill={color} opacity="0.55" />
      </pattern></defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <line x1="-40" y1="240" x2="440" y2="-30" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
      <line x1="100" y1="240" x2="520" y2="-10" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
    </svg>
  )
}

function MockupCard({ label, dark, color }) {
  return (
    <div style={{
      border: `1px solid ${dark ? 'rgba(255,255,255,0.09)' : '#e2e8f0'}`,
      borderRadius: 16, overflow: 'hidden',
      background: dark ? '#14161a' : 'white',
      height: '100%', minHeight: 280,
    }}>
      <div style={{
        padding: '10px 16px',
        borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.06)' : '#f1f5f9'}`,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        {['#ef4444','#f59e0b','#22c55e'].map((c,i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.5 }} />
        ))}
      </div>
      <div style={{
        height: 160, position: 'relative',
        background: dark ? `linear-gradient(135deg,#0f1318,${color}18)` : `linear-gradient(135deg,#f8fafb,${color}10)`,
        overflow: 'hidden',
      }}>
        <DotPattern color={color} />
      </div>
      <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{
          padding: '6px 16px',
          background: dark ? `${color}15` : `${color}10`,
          border: `1px solid ${color}30`,
          borderRadius: 6, fontSize: 12, color: dark ? `${color}cc` : color,
          fontWeight: 500, fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>
          [ {label} ]
        </span>
      </div>
    </div>
  )
}

function BulletList({ items, dark }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <div style={{
            width: 16, height: 16, borderRadius: '50%', flexShrink: 0, marginTop: 2,
            background: `${TEAL}20`, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1.5 4L3 5.5L6.5 2" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontSize: 14, color: dark ? 'rgba(255,255,255,0.48)' : '#64748b', lineHeight: 1.5 }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

const SECTIONS = [
  {
    id: 'payroll', dark: true, flip: false, color: TEAL,
    badge: 'Payroll', num: '001',
    headline: "Payroll that runs on your schedule, not your vendor's.",
    body: "Automated payroll runs with full visibility into what your team costs — before you approve. Tax breakdowns, deductions, and bank advice generated in one flow.",
    bullets: [
      'Automated payroll runs with approval workflow',
      'Complete tax breakdown — TDS, PF, ESI, PT',
      'Salary components, deductions, and benefits',
      'Bank advice download or direct bank integration',
      'Multi-branch payroll under one organisation',
    ],
    placeholder: 'Payroll Dashboard',
  },
  {
    id: 'people', dark: false, flip: true, color: '#3b82f6',
    badge: 'People & HR', num: '002',
    headline: 'Everything about your people, in one place.',
    body: 'From first offer to salary revision — every employee record, document, and approval in a single system. No spreadsheets. No email threads.',
    bullets: [
      'Employee database and salary management',
      'Offer letter generation and onboarding flow',
      'Salary revision approvals with audit trail',
      'Reimbursements and loan repayment tracking',
      'Document storage — contracts, policies, ID',
    ],
    placeholder: 'Employee Records',
  },
  {
    id: 'leave', dark: true, flip: false, color: '#8b5cf6',
    badge: 'Leave & Attendance', num: '003',
    headline: "Know who's in, who's out, and why.",
    body: "Real-time leave visibility for managers. Employees apply and track their own balance. Nobody sends a WhatsApp message to ask if they can take a day off.",
    bullets: [
      'Leave requests with configurable approval chains',
      'Attendance tracking and working hours',
      'Company holidays and leave types',
      'Real-time team availability view',
      'Attendance rectification requests',
    ],
    placeholder: 'Leave Calendar',
  },
  {
    id: 'team-status', dark: false, flip: true, color: '#f59e0b',
    badge: null, badgeSpecial: 'Unique to MedleyHR', num: '004',
    headline: 'HR meets work — finally.',
    body: "Daily standups, task boards, and escalation tracking — built right into your HR platform. This is not available in any other HRMS. Included in the Scale plan.",
    bullets: [
      'Daily standup submissions from your team',
      'Task assignment and completion tracking',
      'Escalation management — flagged and resolved',
      'Team member activity view for managers',
      'No separate project tool needed',
    ],
    placeholder: 'Team Status Board',
  },
  {
    id: 'employee-portal', dark: true, flip: false, color: TEAL,
    badge: 'Employee Portal', num: '005',
    headline: "Your employees don't need HR to find their own information.",
    body: "Payslips, Form 16, leave balance, attendance — employees access everything themselves. Every self-served request is one less email to HR.",
    bullets: [
      'Payslip and Form 16 access anytime',
      'Leave application and balance tracking',
      'Attendance marking and holiday calendar',
      'Investment declarations and reimbursements',
      'Company announcements, policies, team directory',
    ],
    placeholder: 'Employee Self-Service',
  },
  {
    id: 'reports', dark: false, flip: true, color: '#06b6d4',
    badge: 'Reports & Compliance', num: '006',
    headline: 'The numbers your leadership actually needs.',
    body: "Statutory reports ready to file. Payroll cost breakdowns by department, branch, or employee. Real data for real decisions.",
    bullets: [
      'KPI tracking across your organisation',
      'Payroll cost reports by department and branch',
      'Statutory reports — PF, ESI, TDS, Form 16',
      'Custom report builder',
      'Multi-branch consolidated reporting',
    ],
    placeholder: 'Reports Dashboard',
  },
]

function FeatureSection({ s }) {
  const bg = s.dark ? '#0c0d10' : 'white'
  const headColor = s.dark ? 'white' : '#0f172a'
  const bodyColor = s.dark ? 'rgba(255,255,255,0.43)' : '#64748b'
  const borderColor = s.dark ? 'rgba(255,255,255,0.05)' : '#f1f5f9'

  return (
    <section id={s.id} style={{
      background: bg, padding: '96px 40px',
      borderTop: `1px solid ${borderColor}`,
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center',
          direction: s.flip ? 'rtl' : 'ltr',
        }}>
          <motion.div
            initial={{ opacity: 0, x: s.flip ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ direction: 'ltr' }}
          >
            {/* Badge */}
            {s.badge && (
              <span style={{
                display: 'inline-block', padding: '5px 14px',
                border: `1px solid ${s.dark ? 'rgba(255,255,255,0.14)' : '#d1d5db'}`,
                borderRadius: 999, fontSize: 12,
                color: s.dark ? 'rgba(255,255,255,0.5)' : '#6b7280',
                fontWeight: 500, letterSpacing: '0.05em', marginBottom: 20,
              }}>
                {s.badge}
              </span>
            )}
            {s.badgeSpecial && (
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '5px 14px', marginBottom: 20,
                background: `${s.color}15`, border: `1px solid ${s.color}35`,
                borderRadius: 999, fontSize: 12, color: s.color,
                fontWeight: 600, letterSpacing: '0.04em',
              }}>
                ✦ {s.badgeSpecial}
              </span>
            )}

            {/* Number tag */}
            <div style={{
              fontSize: 11, color: s.dark ? 'rgba(255,255,255,0.2)' : '#94a3b8',
              fontWeight: 600, letterSpacing: '0.08em', marginBottom: 16,
            }}>
              / {s.num}
            </div>

            <h2 style={{
              fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800,
              color: headColor, letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 16px',
            }}>
              {s.headline}
            </h2>
            <p style={{ fontSize: 15, color: bodyColor, lineHeight: 1.65, margin: '0 0 28px' }}>
              {s.body}
            </p>
            <BulletList items={s.bullets} dark={s.dark} />

            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              marginTop: 28, fontSize: 13, fontWeight: 600,
              color: s.dark ? 'rgba(255,255,255,0.5)' : '#475569',
              borderBottom: `1px solid ${s.dark ? 'rgba(255,255,255,0.15)' : '#e2e8f0'}`,
              paddingBottom: 2,
            }}>
              Learn more &gt;
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: s.flip ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ direction: 'ltr' }}
          >
            <MockupCard label={s.placeholder} dark={s.dark} color={s.color} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function FeatureSectionsV3() {
  return <>{SECTIONS.map(s => <FeatureSection key={s.id} s={s} />)}</>
}
