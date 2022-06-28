import { useCallback, useState } from 'react'

import { from } from 'rxjs'

const useData = () => {
	const [data, setData] = useState([])

	const callback = useCallback(async () => {
		try {
			from(new Promise(async (resolve, reject) => {
				const response = await fetch('http://localhost:4001/api/data', {
					method: 'get',
					headers: { 'Content-Type': 'application/json' },
				})

				if ( response.ok ) await resolve(response.json())
				else reject(response.statusText)

			})).subscribe({
				next(val) {
					setData([...data, ...(val?.body ?? [])])
				}, error(e) {
					console.error(e)
				}, complete() {
					console.info('%c end', 'color:green')
				},
			})
		}
		catch (e) {
			throw new Error(e)
		}

	}, [setData])

	return [data, callback]
}

function App() {
	const [count, setCount] = useData()

	return (<>
		<ul>
			{ count.map(_ => <li key={ _.id }>{ _.name }</li>) }
		</ul>

		<button onClick={ setCount }>getJSON</button>
	</>)
}

export default App