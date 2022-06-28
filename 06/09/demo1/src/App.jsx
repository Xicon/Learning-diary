import { useState } from 'react'


function App() {
	const [count, setCount] = useState([
		{ id: 0, text: '学习React' },
		{ id: 1, text: '学习mobx' },
	])

	console.log(count)

	return (
			<>
				<header>
					<cite>todos</cite>
				</header>
				<main>
					<label htmlFor="inp">
						<input type="search" name="inp" id="inp" />
					</label>
					<ol>
						{ count.map(_ => {
							return (
									<li>
										<input key={ _.id } type="radio" name={ _.text } id={ _.text } value={ _.text } />
										<label htmlFor={ _.text }>{ _.text }</label>
									</li>
							)
						}) }
					</ol>
				</main>

				<footer>
					任务总数: { count }, 已完成:
				</footer>
			</>
	)
}

export default App