import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Login } from './routes/login/login'
import { Home } from './views/Home'

function App() {
	const [count, setCount] = useState(0)


	return (<>
		<BrowserRouter>
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>

			<Routes>
				<Route path="/" element={ <Home /> }>首页</Route>
				<Route path="/login" element={ <Login /> }>登录</Route>
			</Routes>


		</BrowserRouter>

	</>)
}

export default App