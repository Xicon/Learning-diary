import { addAction } from '../../actions/add.action'
import { store } from '../../store'

const Home = () => {
	const getStore = store.dispatch(addAction)
	return (
			<>
				<button onClick={ getStore }>getJSON</button>
			</>
	)
}

export default Home