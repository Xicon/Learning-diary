import { HashRouter, Link, Route, Routes } from 'react-router-dom'

import './App.css'

import { Home } from './components/Home'
import { About } from './components/About'
import { Login } from './components/Login'

function App() {
	return (
			<>
				<HashRouter>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/login">Login</Link>

					<Routes>
						<Route path="/" element={ <Home /> } />
						<Route path="/about/:id" element={ <About /> } />
						<Route path="/login" element={ <Login /> } />
					</Routes>
				</HashRouter>
			</>
	)
}

export default App