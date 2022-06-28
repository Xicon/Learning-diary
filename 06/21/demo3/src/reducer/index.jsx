const defaultState = {
  type: 'defaultState',
  value: '0',
}

export const reducer = (state = defaultState, action) => {
  console.log(state)
  if (state.type === 'addAction') {
    return { ...state, value: 'newAction' }
  } else {
    return defaultState
  }
}
