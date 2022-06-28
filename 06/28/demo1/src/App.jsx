import { useState } from 'react'

import { Provider, useDispatch, useSelector } from 'react-redux'

import store from './store'
//import { actions } from './actions'

const Count = () => {

	const value = useSelector(state => state.value)

	console.log(value)
	const dispatch = useDispatch()

	return <>
		<button onClick={ () => dispatch({ type: 'count/add' }) }>+</button>
		<code>{ value }</code>
		<button onClick={ () => dispatch({ type: 'count/sub' }) }>-</button>
	</>
}

function App() {
	const [count, setCount] = useState(0)

	return (<>
		<Provider store={ store }>
			<Count />
		</Provider>
	</>)
}

export default App