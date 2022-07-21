import express = require('express')

const router = express.Router()

interface IPosts {
  id: string,
  title: string
  uri: string
}

const postsList: Array<IPosts> = [
  {
    id: 'a0',
    title: '标题1',
    uri: 'http://localhost:4000/images/img1.jpg',
  }, {
    id: 'a1',
    title: '标题2',
    uri: 'http://localhost:4000/images/img2.jpg',
  }, {
    id: 'a2',
    title: '标题3',
    uri: 'http://localhost:4000/images/img3.jpg',
  }, {
    id: 'a3',
    title: '标题4',
    uri: 'http://localhost:4000/images/img4.jpg',
  },
]

router.get('/:id', (req, res) => {
  let posts: Array<IPosts> | IPosts = postsList
  postsList.filter((post) => {
    if (post.id === `${ req.params.id }`) {
      (posts as IPosts) = post
    }
  })
  res.send(posts as Array<IPosts>)
})

export default router