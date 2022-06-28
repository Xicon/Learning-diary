import { useCallback, useState } from 'react'

import { nanoid } from 'nanoid'

console.log(nanoid())
import { from } from 'rxjs'

const useData = () => {
	const [json, setJSON] = useState([])
	const getImg = useCallback((url) => {
		from(new Promise(async (resolve, reject) => {
			const response = await fetch(url, {
				headers: { 'Content-Type': 'application/json' },
			})
			if ( response.ok ) resolve(response.json())
			else reject(response.statusText)
		})).subscribe({
			next({ body }) {
				setJSON(body)
			}, error(err) {
				console.error(err)
			}, complete() {
				console.info('%c get steam end!', 'color:blue')
			},
		})
	}, [setJSON])
	return [json, getImg]
}

function App() {
	const [data, setData] = useData()

	return (<>
		<ul>
			{ data.map(_ => <li key={ _.id }>
				<span>{ _.id }</span>
				<img src={ _.url } alt="" />
			</li>) }
		</ul>
		<button onClick={ () => setData('http://localhost:4001/api/img') }>getImages</button>

		<form action="http://localhost:8080/api/data1" method="get">
			<label htmlFor="usr">usr
				<input type="text" name="usr" id="usr" />
			</label>
			<label htmlFor="pass">password
				<input type="password" name="pass" id="pass" />
			</label>
			<label htmlFor="">
				<input onClick={ () => setData('http://localhost:8080/api/data1') } type="submit" name="" id="" />
			</label>
		</form>

	</>)
}

export default App