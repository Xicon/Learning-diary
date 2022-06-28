'use strict'

import { makeAutoObservable } from 'mobx'

class TodoStore {

	todoList = []

	constructor() {
		makeAutoObservable(this)
	}
}

const todoListStore = new TodoStore()

export { todoListStore }