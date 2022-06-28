'use strict'

import { computed, makeAutoObservable } from 'mobx'

class ListStore {
	list = [1, 23, 4, 4]

	constructor() {
		makeAutoObservable(this, {
			listFilter: computed,
		})

	}

	get listFilter() {
		return this.list.filter(_ => {
			return _ > 2
		})
	}
}

export const listStore = new ListStore()