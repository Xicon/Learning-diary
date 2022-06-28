'use strict'

import { useEffect } from 'react'
import { v4 as uuid } from 'uuid'

export const TodoListComp = ({ count, setCount }) => {
	const updateList = _ => {
		if ( _.keyCode === 13 ) {
			setCount([...count, {
				_id: uuid(),
				_text: _.target.value,
			}])
		}
	}

			, setDone = id => setCount(count.filter(_ => !(_._id === id)))

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('http://localhost:4001/api/todoList')

				if ( response.ok )
					response.json().then(({ body }) => setCount([...count, ...body]))
			}
			catch (e) {
				throw  new Error(e)
			}
		})()
	}, [])

	return <>
		<header>
			<cite>todos</cite>
		</header>

		<main>
			<label htmlFor="change">
				<input
						type="text" name="change" id="change" placeholder="今天要做些什麽呢?"
						onKeyUp={ _ => updateList(_) }
				/>
			</label>

			<aside>
				{ count.map((_) => {
					return (<label htmlFor={ _._text } key={ _._id }>
						<input
								type="checkbox"
								name={ _.text }
								id={ _._id }
								onChange={ () => setDone(_._id) }
						/>
						{ _._text }
					</label>)
				}) }
			</aside>

		</main>

		<footer>
			<strong>任務數:{ count.length }</strong>
		</footer>
	</>
}