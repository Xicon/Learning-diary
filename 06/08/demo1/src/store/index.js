'use strict'
import { createContext, useContext } from 'react'
import { countStore } from './count.Store'

import { listStore } from './list.Store'

class IndexShore {
	constructor() {
		this.listStore = listStore
		this.countStore = countStore
	}
}

//const indexStore = new IndexShore()
//const context = React.createContext(indexStore)
//const mainStore = () => React.useContext(context)
//export default mainStore

export const mainStore = () => useContext(createContext(new IndexShore()))