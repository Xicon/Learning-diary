import { makeAutoObservable } from 'mobx'

class LoginStore {
	constructor() {
		makeAutoObservable(this)
	}

	getToken = async ({ username, password }) => {
		console.log(username, password)
		console.log(`
					mobile: ${ username },
					code: ${ password },
				`)
		try {
			const response = await fetch('http://geek.itheima.net/v1_0/authorizations', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: `mobile=${ username }&code=${ password }`,
			})

			console.log(response.headers.get('Content-Type'))
			if ( response.status >= 200 && response.status < 300 ) {
				return await response.json().then((data) => {
					console.log(data)
					this.token = data
				})
			}
			else {
				console.error(response.statusText)
			}
		}
		catch (e) {
			console.error(e)
		}
	}

}

export default LoginStore