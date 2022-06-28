import { createStore } from 'redux'

import { reducer } from './reducer/getAction'

const store = createStore(reducer)

let x = () => {
  return 1
}

x.prototype

export default store
