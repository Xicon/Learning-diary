import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const toggle = () => {
    navigate('/about?id=100&name=1abc&id=123', { replace: true })
  }

  return (
      <>
        login
        <button onClick={ toggle }>to about</button>
      </>
  )
}