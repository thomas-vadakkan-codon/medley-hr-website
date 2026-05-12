'use client'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0f9e8a] disabled:opacity-40 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-[#0f9e8a] text-white hover:bg-[#0c8a78] active:scale-[0.98] shadow-sm hover:shadow-md',
    outline:
      'border-2 border-[#0f9e8a] text-[#0f9e8a] hover:bg-[#e6f7f5] active:scale-[0.98]',
    ghost:
      'text-[#0f172a] hover:bg-[#f1f5f9] active:scale-[0.98]',
    dark:
      'bg-[#0f172a] text-white hover:bg-[#1e293b] active:scale-[0.98] shadow-sm',
    white:
      'bg-white text-[#0f172a] hover:bg-[#f8fafb] active:scale-[0.98] shadow-sm',
  }

  const sizes = {
    sm: 'h-9 px-4 text-sm gap-1.5',
    md: 'h-11 px-6 text-base gap-2',
    lg: 'h-13 px-8 text-base gap-2',
    xl: 'h-14 px-10 text-lg gap-2',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
