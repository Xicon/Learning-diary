import * as echarts from 'echarts'
import { useRef, useState } from 'react'

function App() {
	const [count, setCount] = useState(0)

	const dom = useRef()

	const option = {
		title: {
			text: 'Referer of a Website',
			subtext: 'Fake Data',
			left: 'center',
		},
		tooltip: {
			trigger: 'item',
		},
		legend: {
			orient: 'vertical',
			left: 'left',
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				radius: '50%',
				data: [
					{ value: 1048, name: 'Search Engine' },
					{ value: 735, name: 'Direct' },
					{ value: 580, name: 'Email' },
					{ value: 484, name: 'Union Ads' },
					{ value: 300, name: 'Video Ads' },
				],
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
				},
			},
		],
	}
	console.log(ref)
	echarts.init(ref).setOption(option)

	return (
			<>
				<canvas ref={ (ref) => {
					console.log(ref)
				} } width="60vw" height="60vh"></canvas>
			</>
	)
}


export default App