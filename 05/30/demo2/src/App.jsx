import React from 'react'

import PropTypes from 'prop-types'

/*
 * Props默认参数
 *
 1. 函数组件默认值
 + 1. 函数的默认参数
 + 2. 函数名.propTypes = { 参数: 默认值 }
 *
 2. 类组件默认值
 + 1. 静态属性: static defaultValue = 默认值
 + 2. 函数名.propTypes = { 参数: 默认值 }
 *  */

// 方式1: 默认参数(推荐)
const CompA = ({ number = 10 }) => {

	return (
			<>
				<p>{ number }</p>
			</>
	)
}

// 方式二: defaultValue
CompA.propTypes = {
	number: PropTypes.number,
}

class App extends React.Component {
//方式1: 静态属性
	static defaultProps = {
		number: 10,
	}
	state = {
		number: 20,
	}

	render() {
		return (
				<>
					<CompA></CompA>
				</>
		)
	}
}

// 方式2:
App.defaultProps = {
	number: 30,
}
export default App