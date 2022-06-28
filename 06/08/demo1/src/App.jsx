import { observer } from 'mobx-react-lite'

import { v4 as uuid } from 'uuid'

import { mainStore } from './store/index'

function App() {
	const { count, addCount } = mainStore().countStore
	const { list, listFilter } = mainStore().listStore

	return (<>
		<strong>{ count }</strong>
		<button onClick={ addCount }>Plus</button>

		<ul>
			{ listFilter.map(_ => <li key={ uuid() }>{ _ }</li>) }
		</ul>
	</>)
}

export default observer(App)