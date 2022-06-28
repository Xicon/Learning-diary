import { useState } from 'react'

export const useWindowScroll = () => {
  const [y, setY] = useState(0)

  window.addEventListener('scroll', () => {
    console.log(document.documentElement.scrollTop)
    setY(document.documentElement.scrollTop)
  })

  return [y]
}
