'use strict'

const express = require('express')
const app = express()

const cors = require('cors')
const uuid = require('uuid').v4

app.use(cors())

app.get('/', (req, res) => {
	res.send('hello')
})

app.get('/api/data', (req, res) => {
	console.log(uuid())
	res.send({
		statusCode: 200,
		statusText: 'Ok',
		body: [
			{ id: uuid(), name: 'xm' },
			{ id: uuid(), name: 'xh' },
			{ id: uuid(), name: 'xr' },
		],
	})
})

app.listen(4001, 'localhost', () => {
	console.log('netStart')
})