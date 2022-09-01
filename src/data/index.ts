import tradersData from './traders.json'
import { Trader } from 'types/'

export function getRandomTraders(): Trader[] {
  return tradersData
    .map(trader => ({
      name: trader.name,
      totalProfit: trader.total_profit,
      monthlyProfit: trader.monthly_profit,
      capital: trader.capital,
      flag: trader.flag,
      chart: trader.chart
    }))
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)
}
