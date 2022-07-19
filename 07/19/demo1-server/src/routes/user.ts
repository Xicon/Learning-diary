import express = require('express')
const router = express.Router()

interface IUSer {
  id?: string,
  name: string
}

const user: IUSer = {
  name:'zhangsan',
}

router.get('/', (req, res) => {
  res.send({
    statusText: 'OK',
    statusCode: 200,
    body: user,
  })
})

export default router