export const metadata = {
  title: 'MedleyHR — HR and payroll your team can own.',
  description: "The self-serve HRMS that any company can set up, run, and scale — without an implementation project.",
}

export default function V4Layout({ children }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .v4-display {
          font-family: 'Anton', Impact, sans-serif;
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 0.95;
          text-transform: uppercase;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-slow { animation: spin-slow 24s linear infinite; }
        @keyframes marquee-v4 {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-v4 { animation: marquee-v4 50s linear infinite; }

        /* ═══════════════════════════════════════
           RESPONSIVE — V4
        ═══════════════════════════════════════ */

        /* Hamburger — hidden on desktop */
        .v4-hamburger { display: none; }
        /* Mobile menu — hidden on desktop (≥ 1024px) */
        @media (min-width: 1024px) {
          .v4-mobile-menu { display: none !important; }
        }

        /* ── Tablet + Mobile nav (< 1024px) ─── */
        @media (max-width: 1023px) {
          .v4-nav-links { display: none !important; }
          .v4-nav-ctas  { display: none !important; }
          .v4-hamburger { display: flex !important; align-items: center; }
        }

        /* ── Mobile (< 768px) ──────────────── */
        @media (max-width: 767px) {
          /* Hero */
          .v4-hero-grid  { grid-template-columns: 1fr !important; }
          .v4-hero-left  { padding: 28px 24px 32px !important; min-height: auto !important; }
          .v4-hero-right { padding: 24px !important; }

          /* Problem */
          .v4-problem-header { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; }
          .v4-problem-grid   { grid-template-columns: 1fr !important; }
          .v4-problem-large  { grid-column: auto !important; }

          /* How it works */
          .v4-how-header { flex-direction: column !important; align-items: flex-start !important; gap: 14px !important; padding: 20px 24px !important; }
          .v4-how-steps  { grid-template-columns: 1fr !important; }

          /* Features */
          .v4-feat-card-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
          .v4-feat-text   { order: 1 !important; padding: 28px 24px !important; }
          .v4-feat-mockup { order: 2 !important; border-left: none !important; border-right: none !important; border-top: 2px solid #0D0F14 !important; padding: 24px 16px !important; }

          /* Pricing */
          .v4-pricing-header       { flex-direction: column !important; align-items: flex-start !important; padding: 24px !important; }
          .v4-pricing-header-right { align-items: flex-start !important; }
          .v4-pricing-tiers        { grid-template-columns: 1fr !important; }
          .v4-pricing-callouts     { grid-template-columns: 1fr !important; }

          /* Founders */
          .v4-founders-grid  { grid-template-columns: 1fr !important; }
          .v4-founders-left  { border-right: none !important; padding: 32px 24px !important; }
          .v4-founders-right { padding: 32px 24px !important; }

          /* FAQ */
          .v4-faq-grid { grid-template-columns: 1fr !important; }
          .v4-faq-left { border-right: none !important; border-bottom: 2px solid #0D0F14 !important; }

          /* Final CTA */
          .v4-finalcta-grid { grid-template-columns: 1fr !important; padding: 36px 24px !important; gap: 24px !important; }

          /* Footer */
          .v4-footer-grid { grid-template-columns: 1fr !important; padding: 32px 24px !important; }
        }

        /* ── Tablet (768px – 1023px) ────────── */
        @media (min-width: 768px) and (max-width: 1023px) {
          /* Hero */
          .v4-hero-grid { grid-template-columns: 1fr !important; }

          /* Problem */
          .v4-problem-grid  { grid-template-columns: 1fr 1fr !important; }
          .v4-problem-large { grid-column: 1 / 3 !important; }

          /* How it works */
          .v4-how-steps { grid-template-columns: 1fr 1fr !important; }

          /* Features */
          .v4-feat-card-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
          .v4-feat-text   { order: 1 !important; }
          .v4-feat-mockup { order: 2 !important; border-left: none !important; border-right: none !important; border-top: 2px solid #0D0F14 !important; }

          /* Pricing */
          .v4-pricing-header       { flex-direction: column !important; align-items: flex-start !important; }
          .v4-pricing-header-right { align-items: flex-start !important; }
          .v4-pricing-tiers        { grid-template-columns: 1fr 1fr !important; }
          .v4-pricing-callouts     { grid-template-columns: 1fr !important; }

          /* Founders */
          .v4-founders-grid { grid-template-columns: 1fr !important; }
          .v4-founders-left { border-right: none !important; border-bottom: 2px solid rgba(255,255,255,0.08) !important; }

          /* FAQ */
          .v4-faq-grid { grid-template-columns: 1fr !important; }
          .v4-faq-left { border-right: none !important; border-bottom: 2px solid #0D0F14 !important; }

          /* Final CTA */
          .v4-finalcta-grid { gap: 28px !important; }

          /* Footer */
          .v4-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
        }
      `}</style>
      <div style={{ background: '#F0F4F1', minHeight: '100vh' }}>
        {children}
      </div>
    </>
  )
}
