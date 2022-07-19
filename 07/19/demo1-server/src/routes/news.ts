import express = require('express')
const router = express.Router()

interface INewsList {
  id: number,
  name: string
  uri: string
}

const newsList: Array<INewsList> = [
  {
    id: 0,
    name: '标题1',
    uri: 'http://localhost:4000/images/img1.jpg',
  }, {
    id: 1,
    name: '标题2',
    uri: 'http://localhost:4000/images/img2.jpg',
  }, {
    id: 2,
    name: '标题3',
    uri: 'http://localhost:4000/images/img3.jpg',
  }, {
    id: 3,
    name: '标题4',
    uri: 'http://localhost:4000/images/img4.jpg',
  },
]

router.get('/', (req, res) => {
  res.send({
    statusText: 'OK',
    statusCode: 200,
    body: newsList,
  })
})

export default router