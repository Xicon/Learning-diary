'use strict'

const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use('/static', express.static('public'))

// index
app.all('/', (req, res) => {
	res.send({
		body: 'Hello Welcome Express!',
		statusCode: 200,
		statusText: 'Ok',
	})
})

// router
app.use('/api/img', require('./routes/img'))

app.listen(4001, 'localhost', () => {
	console.info('%c node server running', 'color:green')
})