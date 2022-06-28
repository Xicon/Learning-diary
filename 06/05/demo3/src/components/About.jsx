// import { useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const About = () => {
	// const [params] = useSearchParams()
	const params = useParams()
	console.log(params)
	console.log(params.id)
	const id = params.id

	return <>this is About{ id }</>
}