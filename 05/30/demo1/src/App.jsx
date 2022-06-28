import React from 'react'

import PropTypes from 'prop-types'
// 函数组件给Props限定类型: 添加第三方的包: PropsTypes

const CompA = ({ list }) => {
	console.log(list)
	return (
			<>
				<ul>
					{ list.map(item => <li key={ item }>{ item }</li>) }
				</ul>
			</>
	)
}

class CompB extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<ul>
					{ this.props.list.map(item => <li key={ item }>{ item }</li>) }
				</ul>
		)
	}
}

// 给函数添加propType
CompA.propTypes = {
	list: PropTypes.array,
}

// 给类添加类型限制
CompB.propTypes = {
	list: PropTypes.array.isRequired,
}

function App() {
	const list = [1, 2, 3]
//	const list = "[1, 2, 3]"
	return (
			<>
				<CompA list={ list }></CompA>
				<CompB list={ list }></CompB>
			</>
	)
}

export default App