export const metadata = {
  title: 'MedleyHR — HR and payroll your team can own.',
  description: "The self-serve HRMS that any company can set up, run, and scale — without an implementation project.",
}

export default function V4Layout({ children }) {
  return (
    <div style={{ background: '#F0F4F1', minHeight: '100vh' }}>
      {children}
    </div>
  )
}
