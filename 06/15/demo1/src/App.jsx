import { useState } from 'react'

import { of } from 'rxjs'

function App() {
	const [count, setCount] = useState(0)

	const getArrC = (arrA, arrB) => {}

	const arrA$ = [
		{
			autoplay: true,
			controls: true,
			responsive: true,
			fluid: true,
			sources: [],
		},
		{
			autoplay: true,
			controls: true,
			responsive: true,
			fluid: true,
			sources: [],
		},
	]
	const arrB$ = [
		{
			src: '//71739_1.MP4',
			type: 'video/mp4',
		},
		{
			src: '//71736_1.MP4',
			type: 'video/mp4',
		},
	]
	const arrC = of(arrA$, arrB$).subscribe((v) => {})
	console.log(arrC)
	return <>s</>
}

export default App