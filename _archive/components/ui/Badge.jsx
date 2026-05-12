export default function Badge({ children, variant = 'brand', className = '' }) {
  const variants = {
    brand: 'bg-[#e6f7f5] text-[#0f9e8a]',
    success: 'bg-[#dcfce7] text-[#166534]',
    warning: 'bg-[#fef9c3] text-[#854d0e]',
    error: 'bg-[#fee2e2] text-[#991b1b]',
    info: 'bg-[#dbeafe] text-[#1e40af]',
    neutral: 'bg-[#f1f5f9] text-[#475569]',
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
