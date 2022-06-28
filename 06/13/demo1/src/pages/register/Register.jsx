import { Button, Cascader, Col, Form, Input, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'

const { Option } = Select

const residences = [{
	value: '广西壮族自治区', label: '广西壮族自治区', children: [{
		value: '崇左市', label: '崇左市', children: [{
			value: '江州区', label: '江州区',
		}, {
			value: '扶绥县', label: '扶绥县',
		}, {
			value: '大新县', label: '大新县',
		}, {
			value: '天等县', label: '天等县',
		}, {
			value: '宁明县', label: '宁明县',
		}, {
			value: '龙州县', label: '龙州县',
		}, {
			value: '凭祥市', label: '凭祥市',
		}],
	},

		{
			value: '南宁市', label: '南宁市', children: [{
				value: '江南区', label: '江南区',
			}],
		},

		{
			value: '柳州市', label: '柳州市', children: [{
				value: '江南区', label: '江南区',
			}],
		},


		{
			value: '桂林市', label: '桂林市', children: [{
				value: '江南区', label: '江南区',
			}],
		},


		{
			value: '梧州市', label: '梧州市', children: [{
				value: '江南区', label: '江南区',
			}],
		},


		{
			value: '北海市', label: '北海市', children: [{
				value: '江南区', label: '江南区',
			}],
		},


		{
			value: '钦州市', label: '钦州市', children: [{
				value: '江南区', label: '江南区',
			}],
		},


		{
			value: '贵港市', label: '贵港市', children: [{
				value: '江南区', label: '江南区',
			}],
		},


		{
			value: '玉林市', label: '玉林市', children: [{
				value: '江南区', label: '江南区',
			}],
		},


		{
			value: '百色市', label: '百色市', children: [{
				value: '江南区', label: '江南区',
			}],
		},


		{
			value: '贺州市', label: '贺州市', children: [{
				value: '江南区', label: '江南区',
			}],
		},


		{
			value: '河池市', label: '河池市', children: [{
				value: '江南区', label: '江南区',
			}],
		},


		{
			value: '来宾市', label: '来宾市', children: [{
				value: '江南区', label: '江南区',
			}],
		},

	],
}, {
	value: '广东省', label: '广东省', children: [{
		value: '深圳市', label: '深圳市', children: [{
			value: '宝安区', label: '宝安区',
		}],
	}, {
		value: '广州市', label: '广州市', children: [{
			value: '白云区', label: '白云区',
		}],
	}],
}]
const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		}, sm: {
			span: 8,
		},
	}, wrapperCol: {
		xs: {
			span: 24,
		}, sm: {
			span: 16,
		},
	},
}
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24, offset: 0,
		}, sm: {
			span: 16, offset: 8,
		},
	},
}

const Register = () => {
	const [count, setCount] = useState({})
	const [form] = Form.useForm()

	// 提交到后台进行发送邮件
//	const setUserInfo = (body) => {
//		return new Promise(async (resolve, reject) => {
//			try {
//				const response = await fetch('http://localhost:4002/send', {
//					method: 'POST',
//					body: JSON.stringify(body),
//				})
//				if ( response.ok || response.statusText === 'Ok' ) {
//					resolve(response.json())
//				}
//				else {
//					reject('请求失败')
//				}
//			}
//			catch (e) {
//				console.error(e)
//			}
//		})
//	}

	useEffect(() => {
		(async (body = count) => {

			const response = await fetch('http://localhost:4002/send', {
				method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
			})

			console.log(await response.json())
		})()

	}, [count])

	const onFinish = (values) => {
		console.log(values)
		setCount(values)
	}
	const prefixSelector = (<Form.Item name="prefix" noStyle>
		<Select
				style={ {
					width: 70,
				} }
		>
			<Option value="86">+86</Option>
			<Option value="87">+87</Option>
		</Select>
	</Form.Item>)

	return (<Form
			{ ...formItemLayout }
			form={ form }
			name="register"
			onFinish={ onFinish }
			initialValues={ {
				residence: ['广西壮族自治区', '崇左市', '江州区'], prefix: '86',
			} }
			scrollToFirstError
	>
		<Form.Item
				name="email"
				label="电子邮箱"
				rules={ [{
					type: 'email', message: '请输入正确的邮箱地址格式! 带@xx.com结尾的地址!',
				}, {
					required: true, message: '请输入正确的邮箱地址格式! 带@xx.com结尾的地址!',
				}] }
		>
			<Input />
		</Form.Item>

		<Form.Item
				name="password"
				label="密码"
				rules={ [{
					type: 'password', message: '请输入正确的密码格式! ',
				}, {
					required: true, message: '请输入正确的密码格式!',
				}] }
				hasFeedback
		>
			<Input.Password />
		</Form.Item>

		<Form.Item
				name="confirm"
				label="确认密码"
				dependencies={ ['password'] }
				hasFeedback
				rules={ [{
					type: 'password', message: '请输入正确的密码格式! ',
				}, {
					required: true, message: '请输入正确的密码格式!',
				}, ({ getFieldValue }) => ({
					validator(_, value) {
						if ( !value || getFieldValue('password') === value ) {
							return Promise.resolve()
						}

						return Promise.reject(new Error('两次输入的密码不一致!'))
					},
				})] }
		>
			<Input.Password />
		</Form.Item>

		<Form.Item
				name="nickname"
				label="昵称"
				tooltip="我们应该称呼你?"
				rules={ [{
					required: true, message: '请输入正确的昵称格式!', whitespace: true,
				}] }
		>
			<Input />
		</Form.Item>

		<Form.Item
				name="residence"
				label="籍贯"
				rules={ [{
					type: 'array', required: true, message: '请选择正确的地区格式!',
				}] }
		>
			<Cascader options={ residences } />
		</Form.Item>

		<Form.Item
				name="phone"
				label="手机号"
				rules={ [{
					required: true, message: '请输入正确的手机号格式!',
				}] }
		>
			<Input
					addonBefore={ prefixSelector }
					style={ {
						width: '100%',
					} }
			/>
		</Form.Item>

		<Form.Item
				name="intro"
				label="个人介绍"
				rules={ [{
					required: false,
				}] }
		>
			<Input.TextArea showCount maxLength={ 100 } />
		</Form.Item>

		<Form.Item
				name="gender"
				label="性别"
				rules={ [{
					required: true, message: '请选择你的性别!',
				}] }
		>
			<Select placeholder="选择你的性别">
				<Option value="male">男性</Option>
				<Option value="female">女性</Option>
				<Option value="other">其他</Option>
			</Select>
		</Form.Item>

		<Form.Item label="验证码" extra="保证你是否是人类">
			<Row gutter={ 8 }>
				<Col span={ 12 }>
					<Form.Item
							name="captcha"
							noStyle
							rules={ [{
								required: true, message: '请输入你得到的验证码',
							}] }
					>
						<Input />
					</Form.Item>
				</Col>
			</Row>
		</Form.Item>

		<Form.Item { ...tailFormItemLayout }>
			<Button type="primary" htmlType="submit">
				Register
			</Button>
		</Form.Item>
	</Form>)
}

export default Register