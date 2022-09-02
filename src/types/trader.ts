import { LineData } from 'lightweight-charts'

export type Trader = {
  name: string
  totalProfit: number
  monthlyProfit: number
  capital: string
  flag: string
  chart: LineData[]
}
