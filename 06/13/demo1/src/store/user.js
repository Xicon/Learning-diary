import { makeAutoObservable } from 'mobx'

class UserStore {
	user = {
		email: '',
		password: '',
		nickname: '',
		residence: '',
		phone: '',
		intro: '',
		gender: '',
	}

	constructor() {
		makeAutoObservable(this)
	}
}

export default UserStore