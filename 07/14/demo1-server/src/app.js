/*
 * Copyright (c) 2022. Lookeke<xiconz@qq.com>
 */

'use strict'

/* @Description:
 * @Author: Lookeke<xiconz@qq.com>
 * @IDE: WebStorm
 * @DATE: 2022/7/14:13:27
 * @Last Modification Time: $ $ $
 */

const { resolve } = require('path')
const express = require('express')
const app = express()
const cors = require('cors')

const champions = require('./routes/champions')

app.use(cors())
app.use('/images', express.static(resolve(__dirname, './public/images')))

app.use('/champions', champions)

app.all('/', (req, res) => {
  res.send('OK')
})

app.listen(4000, () => {
  console.log('net!')
})