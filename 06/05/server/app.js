const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())

app.get('/api', (req, res) => {
	res.send({
		code: 200,
		text: '/',
		data: 0,
	})
})

app.listen(4001, '127.0.0.1', () => {
	console.log('network!')
})