import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const toggle = () => {
    navigate('/about/11', { replace: true })
  }

  return (
      <>
        login
        <button onClick={ toggle }>to about</button>
      </>
  )
}