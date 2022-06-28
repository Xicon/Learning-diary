import { useState } from 'react'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Home } from './components/Home'
import { About } from './components/About'
import { Login } from './components/Login'

function App() {
	const [count, setCount] = useState(0)

	return (
			<>
				<BrowserRouter>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/login">Login</Link>

					<Routes>
						<Route path="/" element={ <Home></Home> }></Route>
						<Route path="/about" element={ <About></About> }></Route>
						<Route path="/login" element={ <Login></Login> }></Route>
					</Routes>
				</BrowserRouter>
			</>
	)
}

export default App