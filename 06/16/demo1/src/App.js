import { of } from 'rxjs'

function App() {

	const arr = of([123])
	const newArr$ = arr.subscribe({
		next(val) {
			console.log(val)
		},
	})

	return (
			<>
				矩阵输出: { newArr$.map(item => { return li }) }
			</>
	)
}

export default App