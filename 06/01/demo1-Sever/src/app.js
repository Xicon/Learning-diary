const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors())

app.get('/api/data', (req, res, next) => {

	const result = [
		[
			{
				key: '1',
				name: '胡彦斌',
				age: 32,
				address: '西湖区湖底公园1号',
			},
			{
				key: '2',
				name: '胡彦祖',
				age: 42,
				address: '西湖区湖底公园1号',
			},
		],
		[
			{
				title: '姓名',
				dataIndex: 'name',
				key: 'name',
			},
			{
				title: '年龄',
				dataIndex: 'age',
				key: 'age',
			},
			{
				title: '住址',
				dataIndex: 'address',
				key: 'address',
			},
		],
	]

	res.send({
		code: 200, data: result, text: 'OK',
	})

})

app.listen(port, () => {
	console.log(`Example app listening on port ${ port }`)
})