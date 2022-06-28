'use strict'

import { createContext, useContext } from 'react'
import { todoListStore } from './todo.store'

class IndexStore {
	constructor() {
		this.todoListStore = todoListStore
	}
}

export const indexStore = () => useContext(createContext(new IndexStore()))