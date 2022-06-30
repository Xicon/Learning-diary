import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'

const getLocation = gql`
	query GetLocations {
		locations{
			id
			name
			description
			photo
		}
	}
`

const Layout = () => {
	const { loading, error, data } = useQuery(getLocation)
	if ( loading ) { return <p>Loading...</p> }
	if ( error ) { return <p>Error :(</p> }
	return data.locations.map(({ id, name, description, photo }) => {
		return (<article key={ id }>
			<figure>
				<h3>{ name }</h3>
				<b>About this location:</b>
				<p>{ description }</p>
				<figcaption>
					<img src={ photo } alt="" />
				</figcaption>
			</figure>
		</article>)
	})
}

function App() {
	const [count, setCount] = useState(0)

	return (
			<>
				<Layout />
			</>
	)
}

export default App