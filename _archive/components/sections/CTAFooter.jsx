'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/layout/Footer'

const SIGNUP_URL = 'https://app.medleyhr.com/signup'

export default function CTAFooter() {
  return (
    <>
      {/* CTA Section */}
      <section
        id="cta-footer"
        className="relative overflow-hidden py-24"
        style={{ background: 'linear-gradient(135deg, #065f52 0%, #0f172a 100%)' }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(15,158,138,0.15), transparent)',
          }}
        />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="text-label text-[#0f9e8a] block mb-4">Get started today</span>

            <h2 className="text-h1 text-white mb-5">
              Start running payroll the smarter way.
            </h2>

            <p className="text-body-lg mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Create your free account and explore Medley HR — no credit card, no commitment.
              Set up payroll for your first employee in under 10 minutes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f9e8a] text-white font-semibold rounded-xl hover:bg-[#0c8a78] active:scale-[0.98] transition-all duration-150 shadow-lg hover:shadow-xl text-base"
              >
                Start your free trial
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="mailto:hello@medleyhr.com"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl border-2 border-white/20 hover:border-white/50 active:scale-[0.98] transition-all duration-150 text-base"
              >
                Talk to our team
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {['No credit card required', 'Free to explore', 'Cancel anytime'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="6" stroke="rgba(15,158,138,0.8)" strokeWidth="1.5" />
                    <path d="M4.5 7L6 8.5L9.5 5" stroke="rgba(15,158,138,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
