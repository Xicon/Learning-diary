const countAdd = (value = 0) => {
	return {
		type: 'count/add',
		value
	}
}

const countSub = (value = 0) => {
	return {
		type: 'count/sub',
		value
	}

}

export default { countAdd, countSub }