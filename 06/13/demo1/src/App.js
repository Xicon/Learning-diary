import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { observer } from 'mobx-react-lite'

import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'

function App() {
	return (<BrowserRouter>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/login">Login</Link>
		<Link to="/register">Register</Link>

		<Routes>
			<Route path="/" element={ <Home /> }></Route>
			<Route path="/about" element={ <About /> }></Route>
			<Route path="/login" element={ <Login /> }></Route>
			<Route path="/register" element={ <Register /> }></Route>
		</Routes>
	</BrowserRouter>)
}

export default observer(App)