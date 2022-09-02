import { useState, useEffect } from 'react'

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.screen.width < 360)
    }

    window.addEventListener('resize', handleResize)

    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}
