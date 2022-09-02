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
      chart: trader.chart.map((point, pointIndex) => ({
        time: generateDate(pointIndex),
        value: point
      }))
    }))
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)
    .sort((a, b) => b.monthlyProfit - a.monthlyProfit)
}

const generateDate = (index: number): string => {
  let month = 1
  let day = 1 + index

  if (day > 30) {
    month++
    day = index - 30 + 1
  }

  return `2022-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`
}
