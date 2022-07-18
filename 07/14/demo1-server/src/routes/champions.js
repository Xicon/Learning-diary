/*
 * Copyright (c) 2022. Lookeke<xiconz@qq.com>
 */

'use strict'

/* @Description:
 * @Author: Lookeke<xiconz@qq.com>
 * @IDE: WebStorm
 * @DATE: 2022/7/14:13:30
 * @Last Modification Time: $ $ $
 */
const express = require('express')
const router = express.Router()

const champions = [
  {
    id: 10,
    uri: 'http://localhost:4000/images/Anivia_0.webp',
    name: '克烈',
    region: '诺克萨斯',
  },
  {
    id: 11,
    uri: 'http://localhost:4000/images/Kled_0.webp',
    name: '金克斯',
    region: '祖安',
  },
  {
    id: 12,
    uri: 'http://localhost:4000/images/Taric_0.webp',
    name: '塔里克',
    region: '巨神峰',
  },
  {
    id: 13,
    uri: 'http://localhost:4000/images/Ziggs_0.webp',
    name: '吉格斯',
    region: '祖安',
  },
  {
    id: 14,
    uri: 'http://localhost:4000/images/Anivia_0.webp',
    name: '艾尼维亚',
    region: '费雷尔卓德',
  },

]

router.get('/', (req, res) => {
  res.send({
    statusCode: 200,
    statusText: 'OK',
    data: champions,
  })
})

module.exports = router