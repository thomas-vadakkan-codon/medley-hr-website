import Logo from '@/components/ui/Logo'

const FOOTER_LINKS = [
  { label: 'Features', href: '#features-overview' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="container-wide py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-4 text-[#94a3b8] text-sm leading-relaxed">
              Payroll and HR management built for India. From 10-person startups to 2,000-person
              enterprises — one platform, honest pricing.
            </p>
            <p className="mt-4 text-sm text-[#475569]">Made in India 🇮🇳</p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#475569] mb-4">
              Quick links
            </p>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + Social */}
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-[#475569] mb-4">
              Get in touch
            </p>
            <a
              href="mailto:hello@medleyhr.com"
              className="text-sm text-[#94a3b8] hover:text-white transition-colors block mb-6"
            >
              hello@medleyhr.com
            </a>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-[#1e293b] flex items-center justify-center text-[#475569] hover:border-[#0f9e8a] hover:text-[#0f9e8a] transition-all duration-150"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#475569]">
            © {new Date().getFullYear()} Medley HR. All rights reserved.
          </p>
          <p className="text-xs text-[#475569]">
            India-compliant payroll &amp; HR software
          </p>
        </div>
      </div>
    </footer>
  )
}
