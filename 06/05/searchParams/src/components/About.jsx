import { useSearchParams } from 'react-router-dom'

export const About = () => {
  const [params] = useSearchParams()

  let id = params.get(id)
  return (
      <>
        this is About
        { id }
      </>
  )
}