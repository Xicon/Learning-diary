import { useState } from 'react'

import { map, of } from 'rxjs'


function App() {
	const [count, setCount] = useState(0)


	of(1, 23, 4)
			.pipe(map(x => x * x))
			.subscribe(console.log)


	return (
			<>

			</>
	)
}

export default App