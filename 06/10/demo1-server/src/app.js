'use strict'

const app = require('express')()
		, cors = require('cors')

app.use(cors())

app.all('/', (req, res) => {
	res.send('ok')
})

app.get('/api/todoList', (req, res) => {


	res.send({
		body: [
			{ _id: 126, _text: '來自後臺的任務1' },
			{ _id: 7123, _text: '來自後臺的任務2' },
			{ _id: 7122, _text: '來自後臺的任務3' },
		],
		stateCode: 200,
		stateText: 'OK',
	})
})

app.listen(4001, '127.0.0.1', () => {
	console.log('network server')
})