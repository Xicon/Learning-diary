import { gql, useQuery } from '@apollo/client'

const Layout = () => {
	const TACKS = gql`
      query TracksForHome {
          tracksForHome {
              id
              title
              author {
                  id
                  name
                  photo
              }
          }
      }
	`

	const { data, loading, error } = useQuery(TACKS)

	if ( loading ) return <strong>Loading...</strong>
	if ( error ) return <strong>error...</strong>
	console.log(data.tracksForHome)
	return <>
		{ data.tracksForHome.map((item, index) => {
			return (<article key={ item.id + index }>
				<figure>
					<cite>{ item.title }</cite>
					<img src={ item.author.photo } alt={ item.author.name } />
					<figcaption>
						<p>{ item.author.photo }</p>
						<p>length:{ item.length }</p>
						<p>modulesCount:{ item.modulesCount }</p>
						<p>thumbnail:{ item.thumbnail }</p>
					</figcaption>
				</figure>
			</article>)
		}) }
	</>
}

function App() {
	return (<>
		<Layout />
	</>)
}

export default App