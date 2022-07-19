import express = require('express')
import { Application } from 'express'

import cors = require('cors')

import { resolve } from 'path'

import { newsRouter } from './routes/index'
import { userRouter } from './routes/index'

const app: Application = express()

// static image
app.use('/images', express.static(resolve(__dirname, './public/images')))
app.use(cors())

app.all('/', (req, res) => {
  res.send('OK')
})

// news Router
app.use('/api/newsList', newsRouter)
// user Router
app.use('/user', userRouter)

app.listen(4000, () => {
  console.log('net')
})