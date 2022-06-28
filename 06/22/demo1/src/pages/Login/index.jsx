'use strict'

import { useCallback, useState } from 'react'

import { from } from 'rxjs'

const useData = () => {
	const [data, setData] = useState('')

	const getJSON = useCallback((username, password) => {
		from(new Promise(async (resolve, reject) => {
			try {
				const response = await fetch(`http://localhost:4001/api/login?username=${ username }&password=${ password }`, {
					headers: { 'Context-Type': 'application/json' }, method: 'GET',
				})
				if ( response.ok ) resolve(await response.json().then(({ body }) => body))
				else reject(response.statusText)
			}
			catch (err) {
				throw new Error(err)
			}
		})).subscribe({
			next(val) {
				setData(val)
			}, error(err) {
				setData(err)
			}, complete() {
				console.info('%c 網路請求操作完成!', 'color:green')
			},
		})

	}, [setData])

	return [data, getJSON]
}


const Login = () => {
	const [data, setData] = useData('等待進行網絡請求操作')
	const [count, setCount] = useState(0)
	const [username, setUsername] = useState('admin')
	const [password, setPassword] = useState('12345')

	console.log(data)

	if ( data ) window.alert('恭喜您,登陸成功')
	else window.alert('登陸失敗,檢查密碼與賬號是否正確')

	if ( count >= 3 ) {

		window.alert('你的賬戶已被鎖定, 請發送郵件至管理員!')
	}
	else console.log(count)

	return <>
		<label htmlFor="usr">UserName:
			<input type="text" name="usr" id="usr" onChange={ (e) => setUsername(e.target.value) } />
		</label>

		<label htmlFor="pas">Password:
			<input type="password" name="pas" id="pas" onChange={ (e) => setPassword(e.target.value) } />
		</label>

		<button type="button" onClick={ () => {
			setData(username, password)
			setCount(count + 1)
		} }>Login
		</button>
	</>
}

export default Login