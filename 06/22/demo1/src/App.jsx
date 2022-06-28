import { useState } from 'react'

//import Home from './pages/Home'
import Login from './pages/Login'

function App() {
	const [count, setCount] = useState(0)

	return (
			<>
				{/* <Home /> */ }
				<Login />
			</>
	)
}

export default App