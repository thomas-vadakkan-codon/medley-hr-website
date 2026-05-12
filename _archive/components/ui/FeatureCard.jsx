'use client'

import { motion } from 'framer-motion'

export default function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className="group bg-white rounded-xl p-6 border border-[#e2e8f0] hover:border-[#0f9e8a]/30 hover:shadow-lg transition-all duration-200"
    >
      <div className="w-10 h-10 rounded-lg bg-[#e6f7f5] flex items-center justify-center mb-4 group-hover:bg-[#0f9e8a] transition-colors duration-200">
        <span className="text-[#0f9e8a] group-hover:text-white transition-colors duration-200">
          {icon}
        </span>
      </div>
      <h3 className="font-semibold text-[#0f172a] text-base mb-1.5">{title}</h3>
      <p className="text-[#475569] text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
