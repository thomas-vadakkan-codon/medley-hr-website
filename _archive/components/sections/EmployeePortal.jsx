'use client'

import { motion } from 'framer-motion'

const EMPLOYEE_FEATURES = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 2H10L13 5V14H4V2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M10 2V5H13" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M6 8H10M6 10.5H8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    label: 'View & download payslips',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 1.5V3.5M11 1.5V3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M2 6H14" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="5.5" cy="10" r="1" fill="currentColor" />
        <circle cx="10.5" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    label: 'Apply for leave and track approvals',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Mark daily attendance',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="11" cy="5" r="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2 13C2 11.343 3.343 10 5 10H11C12.657 10 14 11.343 14 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    label: 'Check team availability for standups',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 4V3C5 2.448 5.448 2 6 2H10C10.552 2 11 2.448 11 3V4" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 8H8M5 10.5H7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    label: 'View salary components and revision history',
  },
]

function EmployeePortalMockup() {
  return (
    <div className="relative max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="relative z-10 mx-auto w-72">
        <div
          className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-[#0f172a]"
          style={{ background: '#0f172a' }}
        >
          {/* Status bar */}
          <div className="bg-[#0f172a] px-6 py-2 flex justify-between items-center">
            <span className="text-white text-xs font-medium">9:41</span>
            <div className="flex gap-1.5">
              <div className="w-4 h-2.5 rounded-sm border border-white/40" />
              <div className="w-1 h-2.5 rounded-sm bg-white/60" />
            </div>
          </div>

          {/* App UI */}
          <div className="bg-[#f8fafb]">
            {/* Header */}
            <div
              className="px-5 py-5"
              style={{ background: 'linear-gradient(135deg, #0f9e8a, #0c8a78)' }}
            >
              <p className="text-[#e6f7f5] text-xs font-semibold mb-1">Good morning,</p>
              <p className="text-white text-lg font-bold">Priya Sharma</p>
              <p className="text-[#e6f7f5] text-xs mt-1">Software Engineer · ₹85,000/month</p>
            </div>

            {/* Quick actions */}
            <div className="px-4 py-4 grid grid-cols-3 gap-2">
              {[
                { label: 'Payslip', bg: '#e6f7f5', text: '#0f9e8a' },
                { label: 'Leave', bg: '#dbeafe', text: '#2563eb' },
                { label: 'Attendance', bg: '#fef9c3', text: '#854d0e' },
              ].map((action) => (
                <button
                  key={action.label}
                  className="py-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5"
                  style={{ background: action.bg, color: action.text }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: action.text + '20' }}>
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ background: action.text }} />
                  </div>
                  {action.label}
                </button>
              ))}
            </div>

            {/* Leave balance */}
            <div className="mx-4 mb-3 bg-white rounded-xl border border-[#e2e8f0] p-4">
              <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-3">Leave Balance</p>
              <div className="flex gap-3">
                {[
                  { type: 'Annual', days: 12, color: '#0f9e8a' },
                  { type: 'Casual', days: 4, color: '#6366f1' },
                  { type: 'Sick', days: 6, color: '#f59e0b' },
                ].map((leave) => (
                  <div key={leave.type} className="flex-1 text-center">
                    <p className="text-lg font-bold" style={{ color: leave.color }}>{leave.days}</p>
                    <p className="text-[9px] text-[#94a3b8] font-medium">{leave.type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team status */}
            <div className="mx-4 mb-4 bg-white rounded-xl border border-[#e2e8f0] p-4">
              <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2.5">Team Today</p>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Rahul M.', status: 'In office', dot: '#22c55e' },
                  { name: 'Ananya P.', status: 'WFH', dot: '#6366f1' },
                  { name: 'Vikram S.', status: 'On leave', dot: '#f59e0b' },
                ].map((member) => (
                  <div key={member.name} className="flex items-center justify-between">
                    <span className="text-xs text-[#0f172a] font-medium">{member.name}</span>
                    <span className="flex items-center gap-1 text-[10px] text-[#475569]">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: member.dot }} />
                      {member.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 -right-4 bg-white rounded-xl shadow-lg border border-[#e2e8f0] p-3 w-44"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#dcfce7] flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6L4.5 8.5L10 3" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#0f172a]">Leave approved</p>
            <p className="text-[10px] text-[#94a3b8]">3 days from Jun 10</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute bottom-16 -left-4 bg-white rounded-xl shadow-lg border border-[#e2e8f0] p-3 w-44"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#e6f7f5] flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 1.5H7.5L10 4V10.5H3V1.5Z" stroke="#0f9e8a" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#0f172a]">May payslip ready</p>
            <p className="text-[10px] text-[#94a3b8]">₹72,540 credited</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function EmployeePortal() {
  return (
    <section id="employee-portal" className="section-padding bg-[#f8fafb]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mockup first on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <EmployeePortalMockup />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-label text-[#0f9e8a] block mb-3">Employee self-service</span>
            <h2 className="text-h2 text-[#0f172a] mb-4">
              Give your team the access they deserve.
            </h2>
            <p className="text-body-lg text-[#475569] mb-8">
              Employees can view payslips, apply for leave, mark attendance, and check their
              salary details — without sending a single message to HR.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {EMPLOYEE_FEATURES.map((feat) => (
                <li key={feat.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#e6f7f5] flex items-center justify-center text-[#0f9e8a] flex-shrink-0">
                    {feat.icon}
                  </div>
                  <span className="text-[#0f172a] font-medium text-sm">{feat.label}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-[#e6f7f5] rounded-xl border border-[#0f9e8a]/20">
              <p className="text-sm text-[#0f172a] font-medium">
                HR teams using Medley HR report spending{' '}
                <span className="text-[#0f9e8a] font-bold">60% less time</span> answering
                routine employee questions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
