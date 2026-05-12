'use client'

import { motion } from 'framer-motion'

function PayrollMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-[#e2e8f0] overflow-hidden">
      <div className="bg-[#f8fafb] border-b border-[#e2e8f0] px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">Payroll Run</p>
          <p className="text-sm font-bold text-[#0f172a] mt-0.5">May 2026 — 42 Employees</p>
        </div>
        <span className="px-3 py-1 bg-[#dcfce7] text-[#166534] text-xs font-semibold rounded-full">
          Processed ✓
        </span>
      </div>
      <div className="p-5">
        {[
          { label: 'Basic Pay', value: '₹28,40,000', bar: 66 },
          { label: 'HRA', value: '₹7,20,000', bar: 30 },
          { label: 'Special Allowance', value: '₹4,80,000', bar: 20 },
          { label: 'PF Deduction', value: '₹3,60,000', bar: 15, negative: true },
          { label: 'TDS', value: '₹1,20,000', bar: 8, negative: true },
        ].map((item) => (
          <div key={item.label} className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-[#475569]">{item.label}</span>
              <span className={`font-semibold ${item.negative ? 'text-[#dc2626]' : 'text-[#0f172a]'}`}>
                {item.negative ? '−' : ''}{item.value}
              </span>
            </div>
            <div className="h-1.5 bg-[#f1f5f9] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${item.bar}%`,
                  background: item.negative ? '#fca5a5' : '#0f9e8a',
                }}
              />
            </div>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t border-[#f1f5f9] flex justify-between">
          <span className="text-sm font-semibold text-[#0f172a]">Net Payable</span>
          <span className="text-sm font-bold text-[#0f9e8a]">₹35,60,000</span>
        </div>
      </div>
    </div>
  )
}

function ApprovalMockup() {
  const approvals = [
    { type: 'Salary Revision', name: 'Priya Sharma', amount: '+₹15,000/mo', status: 'pending', time: '2h ago' },
    { type: 'Leave Request', name: 'Rahul Mehta', amount: '5 days — Annual', status: 'approved', time: '1h ago' },
    { type: 'Reimbursement', name: 'Ananya Patel', amount: '₹4,200', status: 'pending', time: '30m ago' },
    { type: 'Salary Revision', name: 'Vikram Singh', amount: '+₹20,000/mo', status: 'approved', time: 'Just now' },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-[#e2e8f0] overflow-hidden">
      <div className="bg-[#f8fafb] border-b border-[#e2e8f0] px-5 py-4">
        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">Approval Queue</p>
        <p className="text-sm font-bold text-[#0f172a] mt-0.5">4 pending review</p>
      </div>
      <div className="divide-y divide-[#f1f5f9]">
        {approvals.map((item) => (
          <div key={`${item.name}-${item.type}`} className="px-5 py-4 flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-0.5">
                {item.type}
              </p>
              <p className="text-sm font-medium text-[#0f172a] truncate">{item.name}</p>
              <p className="text-xs text-[#475569]">{item.amount}</p>
            </div>
            <div className="flex items-center gap-3 ml-4">
              <span className="text-[10px] text-[#94a3b8]">{item.time}</span>
              {item.status === 'pending' ? (
                <div className="flex gap-1.5">
                  <button className="px-3 py-1.5 bg-[#0f9e8a] text-white text-xs font-semibold rounded-lg hover:bg-[#0c8a78] transition-colors">
                    Approve
                  </button>
                  <button className="px-3 py-1.5 bg-[#f1f5f9] text-[#475569] text-xs font-semibold rounded-lg hover:bg-[#e2e8f0] transition-colors">
                    Reject
                  </button>
                </div>
              ) : (
                <span className="px-2 py-1 bg-[#dcfce7] text-[#166534] text-xs font-semibold rounded-full">
                  Approved ✓
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ComplianceMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-[#e2e8f0] overflow-hidden">
      <div className="bg-[#f8fafb] border-b border-[#e2e8f0] px-5 py-4">
        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">Compliance Status — FY 2025–26</p>
      </div>
      <div className="p-5 grid grid-cols-2 gap-3">
        {[
          { label: 'Form 16', sub: '42 generated', status: 'done' },
          { label: 'PF Filing', sub: 'Apr–May done', status: 'done' },
          { label: 'ESI Return', sub: 'Apr–May done', status: 'done' },
          { label: 'TDS Return', sub: 'Q1 filed', status: 'done' },
          { label: 'Professional Tax', sub: '14 states', status: 'done' },
          { label: 'Statutory Bonus', sub: 'Due Jul 2026', status: 'upcoming' },
        ].map((item) => (
          <div
            key={item.label}
            className={`rounded-xl p-3.5 border ${
              item.status === 'done' ? 'bg-[#f0fdf4] border-[#bbf7d0]' : 'bg-[#fefce8] border-[#fde68a]'
            }`}
          >
            <div className="flex items-start justify-between mb-1">
              <p className="text-xs font-semibold text-[#0f172a]">{item.label}</p>
              <span className={`text-[10px] font-bold ${item.status === 'done' ? 'text-[#16a34a]' : 'text-[#d97706]'}`}>
                {item.status === 'done' ? '✓' : '→'}
              </span>
            </div>
            <p className="text-[10px] text-[#475569]">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReportsMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-[#e2e8f0] overflow-hidden">
      <div className="bg-[#f8fafb] border-b border-[#e2e8f0] px-5 py-4">
        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">Reports</p>
        <p className="text-sm font-bold text-[#0f172a] mt-0.5">One-click exports</p>
      </div>
      <div className="p-5">
        {[
          { label: 'Payroll Summary', period: 'May 2026', format: 'XLSX' },
          { label: 'Headcount Report', period: 'Q1 FY26', format: 'PDF' },
          { label: 'PF ECR', period: 'May 2026', format: 'TXT' },
          { label: 'TDS Challan', period: 'Q4 FY25', format: 'PDF' },
          { label: 'Leave Register', period: 'FY 2025–26', format: 'XLSX' },
        ].map((report, i) => (
          <div
            key={report.label}
            className={`flex items-center justify-between py-3 ${i > 0 ? 'border-t border-[#f1f5f9]' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#e6f7f5] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 1H9L12 4V13H3V1Z" stroke="#0f9e8a" strokeWidth="1.2" strokeLinejoin="round" />
                  <path d="M9 1V4H12" stroke="#0f9e8a" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0f172a]">{report.label}</p>
                <p className="text-[10px] text-[#94a3b8]">{report.period}</p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f1f5f9] hover:bg-[#e6f7f5] text-[#0f9e8a] text-xs font-semibold rounded-lg transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2V8M3 6L6 9L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {report.format}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

const BLOCKS = [
  {
    tag: 'Payroll',
    headline: 'Run payroll in minutes, not hours.',
    body: "Medley HR calculates every component — basic pay, HRA, deductions, PF, ESI — and generates payslips automatically. Review, approve, and process payroll for your entire team in a single workflow. No spreadsheets. No errors.",
    mockup: <PayrollMockup />,
    imageLeft: false,
  },
  {
    tag: 'Approval Workflows',
    headline: "Approvals that don't get lost in email threads.",
    body: "Salary revisions, leave requests, rectification requests — every approval flows through a clear, trackable chain. No more chasing managers. No more missed requests. Every action timestamped and visible.",
    mockup: <ApprovalMockup />,
    imageLeft: true,
  },
  {
    tag: 'Compliance',
    headline: 'India-compliant by default, not by add-on.',
    body: 'Form 16 generation, PF, ESI, TDS, Professional Tax — all built directly into Medley HR. When compliance rules change, Medley HR updates. You don\'t have to.',
    mockup: <ComplianceMockup />,
    imageLeft: false,
  },
  {
    tag: 'Reports',
    headline: 'Every report your auditor, CA, or board will ever ask for.',
    body: 'Payroll summaries, headcount reports, leave reports, compliance filings — export any report in one click, in the format you need.',
    mockup: <ReportsMockup />,
    imageLeft: true,
  },
]

export default function AdminFeatures() {
  return (
    <section id="admin-features" className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-16"
        >
          <span className="text-label text-[#0f9e8a] block mb-3">Admin portal</span>
          <h2 className="text-h2 text-[#0f172a] mb-4">Built for HR teams who move fast.</h2>
          <p className="text-body-lg text-[#475569] max-w-2xl mx-auto">
            Every core HR and payroll function — designed so your team spends less time in the
            software and more time on what matters.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {BLOCKS.map((block) => (
            <motion.div
              key={block.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                block.imageLeft ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Copy */}
              <div className={block.imageLeft ? 'lg:col-start-2' : ''}>
                <span className="text-label text-[#0f9e8a] block mb-3">{block.tag}</span>
                <h3 className="text-h3 text-[#0f172a] mb-4">{block.headline}</h3>
                <p className="text-body-lg text-[#475569] leading-relaxed">{block.body}</p>
              </div>

              {/* Mockup */}
              <div className={block.imageLeft ? 'lg:col-start-1' : ''}>
                {block.mockup}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
