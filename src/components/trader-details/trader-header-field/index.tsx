import './index.css'

type TraderHeaderFieldProps = {
  children: JSX.Element | string
  label: string
}

export function TraderHeaderField({ children, label }: TraderHeaderFieldProps) {
  return (
    <div className="trader-header-field">
      <div className="trader-header-label">{label}</div>
      {children}
    </div>
  )
}
