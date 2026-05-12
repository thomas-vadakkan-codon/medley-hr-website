export const metadata = {
  title: 'Medley HR — Modern HR & Payroll for India',
  description: "Enterprise-grade HR and payroll software built for India's growing businesses.",
}

export default function V2Layout({ children }) {
  return (
    <div style={{ background: '#0c0d10', minHeight: '100vh' }}>
      {children}
    </div>
  )
}
