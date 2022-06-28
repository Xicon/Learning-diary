'use strict'

import { useNavigate } from 'react-router-dom'

export const Home = () => {
	const navigate = useNavigate()
	const toggleLogin = () => {
		navigate('/login', { replace: true })
	}
	return (<>
		<button onClick={ toggleLogin }>跳转到登录页</button>
	</>)
}