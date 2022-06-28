const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())

app.get('/api/login', (req, res) => {
	console.log(req.query)

	if ( req.query.username === 'admin' &&
			req.query.password === '123456' ) {
		res.send({
			body: 1,
			statusText: 'Ok',
			statusCode: 200,
		})
	}
	else {
		res.send({
			body: 0,
			statusText: 'Ok',
			statusCode: 200,
		})
	}
})

app.listen(4001, 'localhost', () => {
	console.log('net start')
})