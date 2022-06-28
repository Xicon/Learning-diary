import { useCallback, useState } from 'react'

const useData = () => {
	const [data, setData] = useState({})

	const getJSON = useCallback(async () => {
		const response = await fetch('http://101.42.233.244:443/goods?page=1')
		if ( response.ok ) {
			setData({ data: await response.json() })
		}
		else {
			setData({ statusText: response.statusText })
		}
	}, [setData])
	console.log(data)
	return [data, getJSON]
}

const GetCount = ({ count }) => {

	const getCount = () => {
		console.log(count.data.results)
	}

	return <>
		<button onClick={ getCount }>getCount</button>
	</>
}


const App = () => {
	const [count, setCount] = useData()
	const [data, getData] = useJSON()


	return <>
		<button onClick={ setCount }>setCount</button>
		<GetCount count={ count }></GetCount>
	</>
}

export default App