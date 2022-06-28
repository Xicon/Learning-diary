'use strict'

let xlsx = require('xlsx')

let workbook = xlsx.readFile('计科195班花名册.xlsx') //workbook就是xls文档对象
//console.log(workbook)
let sheetNames = workbook.SheetNames //获取表明

let sheet = workbook.Sheets[sheetNames[0]] //通过表明得到表对象

var data = xlsx.utils.sheet_to_json(sheet) //通过工具将表对象的数据读出来并转成json

//console.log(data)