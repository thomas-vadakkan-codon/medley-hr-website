export default function Logo({ variant = 'default', className = '' }) {
  const textColor = variant === 'light' ? '#ffffff' : '#0f172a'
  const dotColor = '#0f9e8a'

  return (
    <svg
      width="140"
      height="32"
      viewBox="0 0 140 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Medley HR"
    >
      {/* Mark: abstract M made of connected nodes */}
      <rect x="0" y="6" width="5" height="20" rx="2.5" fill={dotColor} />
      <rect x="10" y="6" width="5" height="20" rx="2.5" fill={dotColor} />
      <rect x="20" y="6" width="5" height="20" rx="2.5" fill={dotColor} />

      {/* Connector lines suggesting the M shape */}
      <path
        d="M2.5 8 L12.5 18 L22.5 8"
        stroke={dotColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Small accent dot */}
      <circle cx="33" cy="16" r="2.5" fill={dotColor} opacity="0.4" />

      {/* Wordmark: "Medley HR" */}
      <text
        x="42"
        y="21.5"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontWeight="700"
        fontSize="16"
        fill={textColor}
        letterSpacing="-0.02em"
      >
        Medley
      </text>
      <text
        x="104"
        y="21.5"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontWeight="800"
        fontSize="16"
        fill={dotColor}
        letterSpacing="-0.02em"
      >
        HR
      </text>
    </svg>
  )
}
