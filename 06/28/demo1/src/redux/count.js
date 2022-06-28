const redux = (state = 1, action) => {
	console.log(state, action)
	switch (action.type) {
		case 'count/add':
			return { ...state, value: state.value + 1 }
		case 'count/sub':
			return { ...state, value: state.value - 1 }
		default:
			return { ...state, value: state }
	}
}

export default redux