const defaultVal = {
	type: 'default',
	value: 'defaultVal',
}

export const getAction = (state = defaultVal, action) => {
	console.log(state)
	if ( state.type === 'add' ) {
		return { ...state, ...action }
	}
	else {
		return state
	}
}