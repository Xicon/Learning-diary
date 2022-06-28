'use strict'

const express = require('express')
const app = express()

const cors = require('cors')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

// 获取HTTP的POST正文(body)内容
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 处理跨越请求
app.use(cors())

// 1. 配置传送服务
let mailTransport = nodemailer.createTransport({
	// host: 'smtp.qq.email',
	service: 'qq',
	secure: true,	//安全方式发送,建议都加上
	auth: {
		user: 'xiconz@qq.com', // 发送人qq邮箱地址
		pass: 'tezxmfuinmtldich', // SMTP的授权码
	},
})

// 生成5个随机数,作为验证码
const getRandom = (min = 0, max = 9) => {
	min = Math.ceil(min)
	max = Math.floor(max)

	let arr = ''
	while ( arr.length < 5 ) {
		arr += Math.floor(Math.random() * (max - min)) + min
	}

	return arr
}

let arr = getRandom()

// 2. 邮件发送服务
app.post('/send', function (req, res) {
	let options = {
		from: '<xiconz@qq.com>', // 发送人 发送的账号
		to: `<${ req.body.email }>`, // 接受者
		bcc: '密送',
		subject: '[管理系统]验证码',  // 邮件标题
		text: '邮件内容', // 邮件内容
		html: `<strong>您好,你的邮箱正在请求验证码,以下内容是验证码:</strong><code>${ arr }</code>`, // 邮件正文
	}
	mailTransport.sendMail(options, function (err, msg) {
		if ( err ) {
			console.log(err)
			res.send(err)
		}
		else {
			res.send({
				statusCode: 200,
				statusText: 'Ok',
				number: arr,
			})
		}
	})
})

app.listen(4002, '127.0.0.1', () => {
	console.log('network')
})