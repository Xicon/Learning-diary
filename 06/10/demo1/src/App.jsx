'use strict'

import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import './App.css'


import { TodoListComp } from './components/todoList.comp'

function App() {
	const [count, setCount] = useState([
		{ _id: 1, _text: '學習React' },
		{ _id: 2, _text: '完成mobx' },
	])


	return (<>
		<TodoListComp count={ count } setCount={ setCount } />
	</>)
}

export default observer(App)