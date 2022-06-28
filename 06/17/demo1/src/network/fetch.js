'use strict'
const useJSON = (vo) => {
	const [data, setData] = useState({})

	if ( typeof vo !== 'object' ) {
		throw new Error('请传入对象!')
	}

	const getData = useCallback(async () => {
		const response = await fetch('/api', {
			body: JSON.stringify({
				...vo,
			}),
		})
	}, [setData])

	return [data, getData]
}