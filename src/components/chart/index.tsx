import './index.css'

import { createChart, LineData } from 'lightweight-charts'

import { useEffect, useRef } from 'react'

type ChartProps = {
  chartPoints: LineData[]
}

export function Chart({ chartPoints }: ChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: chartContainerRef.current.clientHeight,
        timeScale: {
          borderColor: '#DDE0E9'
        },
        rightPriceScale: {
          borderColor: '#DDE0E9'
        },
        grid: {
          horzLines: {
            visible: false
          },
          vertLines: {
            visible: false
          }
        },
        layout: {
          fontFamily: 'Roboto',
          fontSize: 14,
          textColor: '#DDE0E9'
        },
        crosshair: {
          horzLine: {
            color: '#DDE0E9'
          },
          vertLine: {
            visible: true,
            color: '#DDE0E9'
          }
        },
        localization: {
          locale: 'en-US'
        }
      })

      const handleResize = () => {
        chart.applyOptions({
          width: chartContainerRef.current?.clientWidth,
          height: chartContainerRef.current?.clientHeight
        })
      }

      const areaSeries = chart.addLineSeries({
        color: '#8A24F3',
        lineWidth: 3,
        crosshairMarkerBackgroundColor: '#FFF',
        crosshairMarkerBorderColor: '#8A24F3'
      })

      areaSeries.setData(chartPoints)

      chart.timeScale().fitContent()

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)

        chart.remove()
      }
    }
  }, [chartPoints])

  return <div ref={chartContainerRef} id="chart-root"></div>
}
