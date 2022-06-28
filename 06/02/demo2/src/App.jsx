import { useEffect, useState } from 'react'

// 默认状态

function App() {
	const [count, setCount] = useState(0)
	//  状态1: 当依赖项执行的时候, 副作用函数就会执行, 初始化也会执行一次
	//  状态2: 当依赖项为空的时候,则只会执行一次, 即初始化执行一次
	// 默认状态: 初始化时执行一次, 副作用函数更新时也会执行
	useEffect(() => {
		document.title = count
	}, [count])
	return (
			<>
				<button onClick={ () => setCount(count + 1) }>{ count }</button>
			</>
	)
}

export default App