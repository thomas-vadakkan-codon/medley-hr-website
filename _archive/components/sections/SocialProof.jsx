'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '2,000+', label: 'Employees managed' },
  { value: '99.9%', label: 'Payroll accuracy' },
  { value: '100%', label: 'India-compliant' },
  { value: '< 5 min', label: 'Average payroll run' },
  { value: '0 add-ons', label: 'Compliance is built in' },
]

export default function SocialProof() {
  return (
    <section id="social-proof" className="bg-white border-y border-[#e2e8f0] py-8">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-12 lg:gap-x-16"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-4">
              {i > 0 && (
                <div className="hidden sm:block w-px h-8 bg-[#e2e8f0]" aria-hidden="true" />
              )}
              <div className="text-center sm:text-left">
                <p className="text-2xl font-800 font-extrabold text-[#0f172a] leading-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-[#94a3b8] font-medium mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
