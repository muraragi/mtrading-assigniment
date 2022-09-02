import './index.css'

import { getRandomTraders } from 'data/'
import { useEffect, useState } from 'react'
import { Trader } from 'types/'
import { Carousel, TraderCard, TraderDetails } from 'components/'
import { useIsMobile } from 'hooks/'

export function BestTraders() {
  const isMobile = useIsMobile()

  const [traders, setTraders] = useState<Trader[] | null>(null)
  const [activeTrader, setActiveTrader] = useState<number>(0)

  useEffect(() => {
    const randomTraders = [...getRandomTraders()]

    setTraders(
      randomTraders
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)
        .sort((a, b) => b.monthlyProfit - a.monthlyProfit)
    )
    setActiveTrader(0)
  }, [])

  return (
    <div className="best-traders">
      <h1>Copy the best masters</h1>
      <div className="traders">
        {!isMobile && (
          <div className="traders-list">
            {traders?.map((trader, index) => (
              <TraderCard
                key={trader.name}
                iconUrl={trader.flag}
                growth={trader.monthlyProfit}
                name={trader.name}
                active={index === activeTrader}
                position={index + 1}
                onClick={() => setActiveTrader(index)}
              />
            ))}
          </div>
        )}
        {traders && <TraderDetails trader={traders[activeTrader]} />}
      </div>
      {isMobile && traders && (
        <Carousel
          onItemClick={item => setActiveTrader(item)}
          activeItem={activeTrader}
          numberOfItems={traders?.length}
        />
      )}
    </div>
  )
}
