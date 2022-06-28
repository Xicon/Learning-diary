import { useState } from 'react'

import { HashRouter, Link, Route, Routes } from 'react-router-dom'

import { About } from './views/About'
import { Home } from './views/Home'
import { News } from './views/News'

import { Hot } from './views/news/Hot'
import { Current } from './views/news/Current'

function App() {
	const [count, setCount] = useState(0)

	return (
			<>
				<HashRouter>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/news">News</Link>

					<Routes>
						<Route path="/" element={ <Home /> }></Route>
						<Route path="/about" element={ <About /> }></Route>
						<Route path="/news" element={ <News /> }>
							<Route index element={ <Hot /> }>
								热门
							</Route>
							<Route path="current" element={ <Current /> }>
								时事
							</Route>
						</Route>
					</Routes>
				</HashRouter>
			</>
	)
}

export default App