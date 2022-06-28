'use strict'
const path = require('path')
const fs = require('fs')

const express = require('express')
const router = express.Router()

const { nanoid } = require('nanoid')
console.log(nanoid())

const baseImgPath = path.resolve(__dirname, '../public/images')
const imagesDir = fs.readdirSync(baseImgPath)

const imgArr = imagesDir.map((imgFile, index) => {
	return {
		id: index,
		url: `http://localhost:4001/static/images/${ imgFile }`,
	}
})

router.get('/', (req, res) => {
	res.send({
		statusText: 'Ok', statusCode: 200, body: imgArr,
	})
})

module.exports = router