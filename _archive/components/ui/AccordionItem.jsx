'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#e2e8f0] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group focus-visible:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#0f172a] text-base leading-snug group-hover:text-[#0f9e8a] transition-colors">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 mt-0.5 ${
            isOpen
              ? 'border-[#0f9e8a] bg-[#0f9e8a] text-white'
              : 'border-[#cbd5e1] text-[#94a3b8] group-hover:border-[#0f9e8a] group-hover:text-[#0f9e8a]'
          }`}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className={`transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
          >
            <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#475569] leading-relaxed text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
