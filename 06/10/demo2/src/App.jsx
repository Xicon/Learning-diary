import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState([1, 2, 123, 13])

	const updateList = () => {
		setCount({
			count: [...count, 12],
		})
		console.log(count)
	}
	return (
			<>
				{ count.map(_ => <p key={ _ }>{ _ }</p>) }
				<button onClick={ updateList }>updateList</button>
			</>
	)
}

export default App