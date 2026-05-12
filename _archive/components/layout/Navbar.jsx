'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/ui/Logo'

const NAV_LINKS = [
  { label: 'Features', href: '#features-overview' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const SIGNUP_URL = 'https://app.medleyhr.com/signup'
const DEMO_URL = '#cta-footer'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex-shrink-0" aria-label="Medley HR home">
              <Logo />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0f172a] hover:bg-[#f1f5f9] rounded-lg transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={DEMO_URL}
                className="px-4 py-2 text-sm font-semibold text-[#0f172a] border-2 border-[#e2e8f0] rounded-lg hover:border-[#0f9e8a] hover:text-[#0f9e8a] transition-all duration-150"
              >
                Book a demo
              </a>
              <a
                href={SIGNUP_URL}
                className="px-5 py-2 text-sm font-semibold bg-[#0f9e8a] text-white rounded-lg hover:bg-[#0c8a78] active:scale-[0.98] transition-all duration-150 shadow-sm"
              >
                Start free trial
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-[#475569] hover:bg-[#f1f5f9] transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                {mobileOpen ? (
                  <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M3 6H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 11H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-16 flex flex-col"
          >
            <nav className="flex-1 flex flex-col px-6 pt-8 gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-4 text-lg font-medium text-[#0f172a] hover:bg-[#f1f5f9] rounded-xl transition-colors border-b border-[#f1f5f9]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="px-6 pb-10 flex flex-col gap-3">
              <a
                href={DEMO_URL}
                onClick={() => setMobileOpen(false)}
                className="w-full py-3.5 text-center font-semibold text-[#0f172a] border-2 border-[#e2e8f0] rounded-xl hover:border-[#0f9e8a] transition-all"
              >
                Book a demo
              </a>
              <a
                href={SIGNUP_URL}
                className="w-full py-3.5 text-center font-semibold bg-[#0f9e8a] text-white rounded-xl hover:bg-[#0c8a78] transition-colors shadow-sm"
              >
                Start free trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
