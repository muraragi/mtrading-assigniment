import './index.css'

type TraderCardProps = {
  iconUrl: string
  growth: number
  name: string
  position?: number
  active?: boolean
  onClick?: () => void
}

export function TraderCard({
  iconUrl,
  growth,
  name,
  position,
  active,
  onClick
}: TraderCardProps) {
  return (
    <div
      className={`trader-card ${active && 'trader-card-active'}`}
      onClick={onClick}
    >
      <img className="trader-icon" src={iconUrl} alt={name} />
      <div className="trader-info">
        <div className="trader-name">
          {position ? `${position}. ${name}` : name}
        </div>
        <div className="trader-growth">+ {growth}%</div>
      </div>
    </div>
  )
}
