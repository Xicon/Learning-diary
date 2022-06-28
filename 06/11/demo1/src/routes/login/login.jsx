'use strict'
import { useNavigate } from 'react-router-dom'

import './login.scss'

export const Login = () => {
	const navigate = useNavigate()

	return <>
		<form action="">
			<label htmlFor="username">
				<input type="text" name="usr" id="usr" placeholder="鍵入賬戶" />
			</label>

			<label htmlFor="password">
				<input type="password" name="password" id="password" placeholder="鍵入密碼" />
			</label>

			<label htmlFor="">
				<input type="checkbox" name="" id="" />我已閲讀並同意 <a href="">用戶協議</a>和 <a href="">隱私條款</a>
			</label>

			<label htmlFor="submit">
				<input type="submit" name="submit" id="submit" value="登錄" />
			</label>
		</form>

	</>
}