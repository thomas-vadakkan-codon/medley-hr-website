'use client'

import { motion } from 'framer-motion'

const SIGNUP_URL = 'https://app.medleyhr.com/signup'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-white"
    >
      {/* Subtle teal wash — top right */}
      <div
        className="absolute top-0 right-0 w-[50vw] h-[70vh] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(15,158,138,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 py-24">
        <div className="max-w-4xl">

          {/* Soft launch badge — honest */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#475569]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f9e8a] animate-pulse" />
              Soft launch · Early access
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-display text-[#0f172a] mb-6 leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.07 }}
          >
            Payroll and HR that doesn't{' '}
            <em
              className="not-italic"
              style={{
                color: '#0f9e8a',
                fontStyle: 'normal',
              }}
            >
              cost a fortune.
            </em>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-body-lg text-[#475569] mb-10 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.13 }}
          >
            One platform for payroll, leaves, attendance, compliance, and employee self-service.
            Built for Indian businesses — not Fortune 500 budgets.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0f9e8a] text-white font-semibold rounded-xl hover:bg-[#0c8a78] active:scale-[0.98] transition-all duration-150 text-base shadow-md hover:shadow-lg"
            >
              Start free trial
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#admin-features"
              className="text-base font-medium text-[#475569] hover:text-[#0f172a] transition-colors underline underline-offset-4 decoration-[#e2e8f0] hover:decoration-[#0f9e8a]"
            >
              See how it works
            </a>
          </motion.div>

          {/* Trust line — honest for soft launch */}
          <motion.p
            className="mt-6 text-sm text-[#94a3b8]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            No credit card required · India-compliant out of the box
          </motion.p>
        </div>

        {/* Decorative element — a clean horizontal rule with teal accent */}
        <motion.div
          className="mt-20 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          aria-hidden="true"
        >
          <div className="w-8 h-px bg-[#0f9e8a]" />
          <div className="flex-1 h-px bg-[#f1f5f9]" />
        </motion.div>

        {/* Key claims — no fake stats, just true qualitative claims */}
        <motion.div
          className="mt-8 flex flex-wrap gap-x-10 gap-y-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {[
            'India-first compliance — PF, ESI, TDS, PT built in',
            'All-in-one: payroll + HR + self-service',
            'Priced for real businesses, not enterprise budgets',
          ].map((claim) => (
            <p key={claim} className="text-sm text-[#475569]">
              {claim}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
