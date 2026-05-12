'use client'
import { motion } from 'framer-motion'

const TEAL = '#0f9e8a'
const AMBER = '#F5C518'
const DARK = '#0D0F14'
const BORDER = `2px solid ${DARK}`
const FF = 'Plus Jakarta Sans, sans-serif'
const ANTON = 'Anton, Impact, sans-serif'

const FEATURES = [
  {
    id: 'payroll', num: '01',
    tag: 'Payroll',
    headline: ['Your Payroll', 'Belongs In', 'A System.', 'Not A Sheet.'],
    accentLine: 3,
    bg: DARK, headColor: 'white', accentColor: AMBER,
    body: "Automated runs with full visibility into what your team costs — before you approve. Tax breakdowns, deductions, and bank advice in one flow.",
    bullets: ['Automated runs with approval workflow', 'TDS, PF, ESI, PT — calculated automatically', 'Bank advice download or direct payment', 'Multi-branch payroll under one org'],
  },
  {
    id: 'people', num: '02',
    tag: 'People & HR',
    headline: ['Everything', 'About Your', 'People, In', 'One Place.'],
    accentLine: 2,
    bg: 'white', headColor: DARK, accentColor: TEAL,
    body: "From first offer to salary revision — every employee record, document, and approval in a single system.",
    bullets: ['Employee database and salary management', 'Offer letters and onboarding flow', 'Salary revision approvals with audit trail', 'Loans and reimbursement tracking'],
  },
  {
    id: 'leave', num: '03',
    tag: 'Leave & Attendance',
    headline: ['Know Who\'s In,', 'Who\'s Out,', 'And Why.'],
    accentLine: 1,
    bg: TEAL, headColor: 'white', accentColor: AMBER,
    body: "Real-time leave visibility for managers. Employees apply and track their own balance. No WhatsApp messages.",
    bullets: ['Configurable approval chains', 'Attendance and working hours tracking', 'Real-time team availability view', 'Rectification requests'],
  },
  {
    id: 'team-status', num: '04',
    tag: null, tagSpecial: '✦ UNIQUE TO MEDLEYHR',
    headline: ['HR Meets', 'Work —', 'Finally.'],
    accentLine: 2,
    bg: AMBER, headColor: DARK, accentColor: DARK,
    body: "Daily standups, task boards, and escalation tracking — inside your HR platform. Not available in any other HRMS. Included in Scale.",
    bullets: ['Daily standup submissions', 'Task assignment and tracking', 'Escalation management', 'No separate tool needed'],
  },
  {
    id: 'employee-portal', num: '05',
    tag: 'Employee Portal',
    headline: ['Employees Don\'t', 'Need HR To', 'Find Their Own', 'Information.'],
    accentLine: 0,
    bg: DARK, headColor: 'white', accentColor: TEAL,
    body: "Payslips, Form 16, leave balance — employees access everything themselves. Every self-served request is one less email to HR.",
    bullets: ['Payslips and Form 16 anytime', 'Leave application and balance tracking', 'Investment declarations and reimbursements', 'Company announcements and policies'],
  },
  {
    id: 'reports', num: '06',
    tag: 'Reports & Compliance',
    headline: ['The Numbers', 'Leadership', 'Actually Needs.'],
    accentLine: 0,
    bg: 'white', headColor: DARK, accentColor: TEAL,
    body: "Statutory reports ready to file. Payroll cost breakdowns by department or branch. Real data, not a spreadsheet from 2019.",
    bullets: ['PF, ESI, TDS, Form 16 reports', 'Payroll cost by department and branch', 'Custom report builder', 'Multi-branch consolidated view'],
  },
]

// ─── Chrome bar shared ────────────────────────────────────────────
function Chrome({ label, light }) {
  return (
    <div style={{
      background: light ? '#f1f5f9' : '#161a1f',
      padding: '9px 14px',
      borderBottom: `1px solid ${light ? '#e2e8f0' : 'rgba(255,255,255,0.06)'}`,
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <div style={{ display: 'flex', gap: 5 }}>
        {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
        ))}
      </div>
      <span style={{
        fontSize: 9, letterSpacing: '0.07em', fontFamily: ANTON,
        color: light ? '#94a3b8' : 'rgba(255,255,255,0.3)',
      }}>{label}</span>
    </div>
  )
}

// ─── Mockup 01: Payroll (actual screenshot) ───────────────────────
function MockupPayroll() {
  return (
    <div style={{
      width: '100%', maxWidth: 620,
      borderRadius: 12, overflow: 'hidden',
      border: '1.5px solid rgba(255,255,255,0.12)',
      boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
    }}>
      {/* Browser chrome */}
      <div style={{
        background: '#1e2030', padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 5,
          padding: '3px 10px', fontSize: 9, color: 'rgba(255,255,255,0.3)',
          fontFamily: FF, textAlign: 'center',
        }}>
          app.medleyhr.com/payroll/run
        </div>
      </div>
      {/* Actual screenshot */}
      <img
        src="/mockup-payroll.png"
        alt="MedleyHR Payroll Run screen"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  )
}

// ─── Mockup 02: People & HR (actual screenshot) ───────────────────
function MockupPeople() {
  return (
    <div style={{
      width: '100%', maxWidth: 620,
      borderRadius: 12, overflow: 'hidden',
      border: '1.5px solid #d1d5db',
      boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
    }}>
      <div style={{
        background: '#f1f5f9', padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'white', borderRadius: 5, border: '1px solid #e2e8f0',
          padding: '3px 10px', fontSize: 9, color: '#94a3b8',
          fontFamily: FF, textAlign: 'center',
        }}>
          app.medleyhr.com/employees
        </div>
      </div>
      <img
        src="/mockup-people.png"
        alt="MedleyHR Employee List screen"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  )
}

// ─── Mockup 03: Leave & Attendance (actual screenshot) ────────────
function MockupLeave() {
  return (
    <div style={{
      width: '100%', maxWidth: 620,
      borderRadius: 12, overflow: 'hidden',
      border: '1.5px solid #d1d5db',
      boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
    }}>
      <div style={{
        background: '#f1f5f9', padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'white', borderRadius: 5, border: '1px solid #e2e8f0',
          padding: '3px 10px', fontSize: 9, color: '#94a3b8',
          fontFamily: FF, textAlign: 'center',
        }}>
          app.medleyhr.com/leave-attendance
        </div>
      </div>
      <img
        src="/mockup-leave.png"
        alt="MedleyHR Leave & Attendance screen"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  )
}

// ─── Mockup 04: Team Status (actual screenshot) ───────────────────
function MockupTeamStatus() {
  return (
    <div style={{
      width: '100%', maxWidth: 620,
      borderRadius: 12, overflow: 'hidden',
      border: '1.5px solid #d1d5db',
      boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
    }}>
      <div style={{
        background: '#f1f5f9', padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'white', borderRadius: 5, border: '1px solid #e2e8f0',
          padding: '3px 10px', fontSize: 9, color: '#94a3b8',
          fontFamily: FF, textAlign: 'center',
        }}>
          app.medleyhr.com/team-status
        </div>
      </div>
      <img
        src="/mockup-team-status.png"
        alt="MedleyHR Team Status Kanban board"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  )
}

// ─── Mockup 05: Employee Portal (actual screenshot) ───────────────
function MockupEmployeePortal() {
  return (
    <div style={{
      width: '100%', maxWidth: 580,
      borderRadius: 12, overflow: 'hidden',
      border: '1.5px solid #d1d5db',
      boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
    }}>
      <div style={{
        background: '#f1f5f9', padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'white', borderRadius: 5, border: '1px solid #e2e8f0',
          padding: '3px 10px', fontSize: 9, color: '#94a3b8',
          fontFamily: FF, textAlign: 'center',
        }}>
          app.medleyhr.com/dashboard
        </div>
      </div>
      <img
        src="/mockup-leave.png"
        alt="MedleyHR Employee Portal dashboard"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  )
}

// ─── Mockup 06: Reports (actual screenshot) ───────────────────────
function MockupReports() {
  return (
    <div style={{
      width: '100%', maxWidth: 620,
      borderRadius: 12, overflow: 'hidden',
      border: '1.5px solid #d1d5db',
      boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
    }}>
      <div style={{
        background: '#f1f5f9', padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'white', borderRadius: 5, border: '1px solid #e2e8f0',
          padding: '3px 10px', fontSize: 9, color: '#94a3b8',
          fontFamily: FF, textAlign: 'center',
        }}>
          app.medleyhr.com/reports
        </div>
      </div>
      <img
        src="/mockup-reports.png"
        alt="MedleyHR Generate Reports screen"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  )
}

const MOCKUP_MAP = {
  'payroll': MockupPayroll,
  'people': MockupPeople,
  'leave': MockupLeave,
  'team-status': MockupTeamStatus,
  'employee-portal': MockupEmployeePortal,
  'reports': MockupReports,
}

function BulletItem({ text, dark }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
      <span style={{ fontFamily: ANTON, fontSize: 14, color: dark ? 'rgba(255,255,255,0.35)' : '#94a3b8', flexShrink: 0, marginTop: 1 }}>—</span>
      <span style={{ fontSize: 13, color: dark ? 'rgba(255,255,255,0.55)' : '#64748b', lineHeight: 1.5 }}>{text}</span>
    </li>
  )
}

export default function FeaturesV4() {
  return (
    <div id="features" style={{ padding: '16px 16px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {FEATURES.map((f, i) => {
        const isDark = f.bg === DARK || f.bg === TEAL
        const flip = i % 2 !== 0
        const Mockup = MOCKUP_MAP[f.id]

        const mockupPanelBg =
          f.bg === DARK ? 'rgba(255,255,255,0.05)' :
          f.bg === 'white' ? '#f1f5f9' :
          f.bg === TEAL ? 'rgba(0,0,0,0.12)' :
          'rgba(0,0,0,0.07)'

        const innerBorder =
          isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid #e2e8f0'

        return (
          <motion.section
            key={f.id}
            id={f.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ background: f.bg, borderRadius: 20, border: 'var(--v4-border)', overflow: 'hidden' }}
          >
            <div className="v4-feat-card-grid" style={{
              display: 'grid',
              gridTemplateColumns: flip ? '1.3fr 1fr' : '1fr 1.3fr',
              minHeight: 480,
            }}>

              {/* ── Text column ── */}
              <div className="v4-feat-text" style={{
                order: flip ? 2 : 1,
                padding: '44px 48px',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ marginBottom: 20 }}>
                  {f.tag && (
                    <span style={{
                      display: 'inline-block', padding: '4px 12px',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : '#d1d5db'}`,
                      borderRadius: 999, fontSize: 11, fontWeight: 700,
                      color: isDark ? 'rgba(255,255,255,0.5)' : '#6b7280',
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}>{f.tag}</span>
                  )}
                  {f.tagSpecial && (
                    <span style={{
                      display: 'inline-block', padding: '4px 12px',
                      background: 'var(--color-v4-dark)', border: `1px solid ${DARK}`,
                      borderRadius: 999, fontSize: 11, fontWeight: 700,
                      color: 'var(--color-v4-amber)', letterSpacing: '0.04em',
                    }}>{f.tagSpecial}</span>
                  )}
                </div>

                <h2 className="v4-display" style={{ fontSize: 'clamp(38px,4vw,66px)', margin: '0 0 28px' }}>
                  {f.headline.map((line, li) => (
                    <span key={li} style={{ color: li === f.accentLine ? f.accentColor : f.headColor, display: 'block' }}>
                      {line}
                    </span>
                  ))}
                </h2>

                <p style={{ fontSize: 15, lineHeight: 1.7, margin: '0 0 20px', color: isDark ? 'rgba(255,255,255,0.5)' : '#64748b' }}>
                  {f.body}
                </p>

                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {f.bullets.map(b => <BulletItem key={b} text={b} dark={isDark} />)}
                </ul>

                <div style={{ paddingTop: 32 }}>
                  <span style={{ fontFamily: ANTON, fontSize: 13, letterSpacing: '0.1em', color: isDark ? 'rgba(255,255,255,0.2)' : '#cbd5e1' }}>
                    / {f.num}
                  </span>
                </div>
              </div>

              {/* ── Mockup column ── */}
              <div className="v4-feat-mockup" style={{
                order: flip ? 1 : 2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '36px 40px',
                background: mockupPanelBg,
                borderLeft: flip ? 'none' : BORDER,
                borderRight: flip ? BORDER : 'none',
              }}>
                <Mockup />
              </div>

            </div>
          </motion.section>
        )
      })}
      </div>
    </div>
  )
}
