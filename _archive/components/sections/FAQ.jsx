'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AccordionItem from '@/components/ui/AccordionItem'

const FAQS = [
  {
    question: 'Is Medley HR suitable for small businesses?',
    answer:
      "Yes — Medley HR is built for businesses of all sizes, from a 10-person startup to a 2,000-person enterprise. Our Starter plan supports teams up to 25 employees at a price that won't eat into your runway. You get the same India-compliant payroll, leave management, and self-service features regardless of your plan.",
  },
  {
    question: 'Does it handle PF, ESI, and TDS automatically?',
    answer:
      'Completely. PF, ESI, TDS, Professional Tax, and Statutory Bonus are built into the payroll engine — not add-ons you pay for separately. Medley HR calculates contributions, generates challans, and keeps your filings current. When statutory rates change, the platform updates automatically.',
  },
  {
    question: 'Can employees use it on a browser without installing anything?',
    answer:
      "Yes. The employee self-service portal is fully web-based — employees access it from any browser on any device. They can view payslips, apply for leave, mark attendance, and check salary details without installing an app. Mobile browsers are fully supported.",
  },
  {
    question: 'How long does it take to set up?',
    answer:
      'Most teams are running payroll within a week. Setup involves importing your employee data (we support CSV and Excel imports), configuring your salary structures, and setting up leave policies. Our onboarding team walks you through it. For Growth and Enterprise plans, we assign a dedicated onboarding specialist.',
  },
  {
    question: 'Is our data secure?',
    answer:
      'Your data is encrypted at rest and in transit. Medley HR is hosted on SOC 2-certified infrastructure with regular security audits. Role-based access controls ensure employees only see data relevant to them. We never share or sell your data.',
  },
  {
    question: 'Can I migrate from our current payroll tool?',
    answer:
      "Yes. Medley HR supports migration from most common HR and payroll tools including Excel-based setups, greytHR, and Zoho Payroll. We provide migration templates and our team reviews your import before the first payroll run to catch any discrepancies.",
  },
  {
    question: 'What support do you offer?',
    answer:
      'All plans include email support with a 24-hour response time. Growth plan customers get priority email and chat support. Enterprise customers get a dedicated account manager and SLA-backed response times. We also maintain a detailed help center for self-service.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-14"
        >
          <span className="text-label text-[#0f9e8a] block mb-3">FAQ</span>
          <h2 className="text-h2 text-[#0f172a] mb-4">
            Questions worth asking before you switch.
          </h2>
          <p className="text-body-lg text-[#475569] max-w-xl mx-auto">
            Honest answers to the things buyers in this category actually want to know.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
