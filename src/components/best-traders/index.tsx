import { getRandomTraders } from 'data/'
import { useEffect, useState } from 'react'
import { Trader } from 'types/'

export function BestTraders() {
  const [traders, setTraders] = useState<Trader[] | null>(null)

  useEffect(() => {
    const randomTraders = getRandomTraders()

    setTraders(randomTraders)
  }, [])

  return (
    <div>
      <h1>BestTraders</h1>
      <pre>{String(JSON.stringify(traders))}</pre>
    </div>
  )
}
