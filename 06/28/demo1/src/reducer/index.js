'use strict'

export const reducer = (state = { value: 1 }, action) => {
	const { type, val } = action
	switch (type) {
		case 'count/add':
			return { ...state, value: state.value + 1 }
		case 'count/sub':
			return { ...state, value: state.value - 1 }
		default:
			return { ...state }
	}
}