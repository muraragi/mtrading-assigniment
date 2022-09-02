import './index.css'

import { TraderHeaderField } from './trader-header-field'
import { useIsMobile } from 'hooks/'
import { Button, Chart, TraderCard } from 'components/'
import { Trader } from 'types/'

type TraderDetailsProps = {
  trader: Trader
}

export function TraderDetails({ trader }: TraderDetailsProps) {
  const isMobile = useIsMobile()

  function logTraderInfo() {
    console.log(trader)
  }

  return (
    <div className="trader-details">
      <div className="trader-details-header">
        {isMobile && (
          <TraderCard
            iconUrl={trader.flag}
            growth={trader.monthlyProfit}
            name={trader.name}
          />
        )}
        <div className="trader-details-fields">
          <TraderHeaderField label="Monthly profit">{`${trader.monthlyProfit}%`}</TraderHeaderField>
          <TraderHeaderField label="Total profit">{`${trader.totalProfit}%`}</TraderHeaderField>
          {!isMobile && (
            <TraderHeaderField label="In management">{`${trader.capital} USD`}</TraderHeaderField>
          )}
          {!isMobile && <Button onClick={logTraderInfo}>Copy Now</Button>}
        </div>
      </div>
      <div className="trader-details-chart">
        <Chart chartPoints={trader.chart} />
      </div>
      {isMobile && <Button onClick={logTraderInfo}>Copy Now</Button>}
    </div>
  )
}
