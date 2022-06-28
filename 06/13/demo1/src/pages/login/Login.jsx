import IndexStore from '@/store/index'

import { Button, Checkbox, Form, Input, message } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

	const navigate = useNavigate()
	const useStore = IndexStore()

	const onFinish = async ({ username, password }) => {
//		useStore.loginStore.getAxiosToken({ username, password })
		await useStore.loginStore.getToken({ username, password })

		message.success('登录成功,正在跳转到首页')

	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (<Form
			name="basic"
			labelCol={ {
				span: 8,
			} }
			wrapperCol={ {
				span: 16,
			} }
			initialValues={ {
				remember: true,
			} }
			onFinish={ onFinish }
			onFinishFailed={ onFinishFailed }
			autoComplete="off"
	>
		<Form.Item
				label="Username"
				name="username"
				rules={ [{
					required: true, message: 'Please input your username!',
				}] }
		>
			<Input />
		</Form.Item>

		<Form.Item
				label="Password"
				name="password"
				rules={ [{
					required: true, message: 'Please input your password!',
				}] }
		>
			<Input.Password />
		</Form.Item>

		<Form.Item
				name="remember"
				valuePropName="checked"
				wrapperCol={ {
					offset: 8, span: 16,
				} }
		>
			<Checkbox>Remember me</Checkbox>
		</Form.Item>

		<Form.Item
				wrapperCol={ {
					offset: 8, span: 16,
				} }
		>
			<Button type="primary" htmlType="submit">
				Submit
			</Button>
		</Form.Item>
	</Form>)
}

export default Login