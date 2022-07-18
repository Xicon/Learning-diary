/*
 * Copyright (c) 2022. Lookeke<xiconz@qq.com>
 */

'use strict'

/* @Description:
 * @Author: Lookeke<xiconz@qq.com>
 * @IDE: WebStorm
 * @DATE: 2022/7/14:17:40
 * @Last Modification Time: $ $ $
 */

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createChampion } from '../../features/champions.js'
import { Button, Form, Input, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const Add = () => {
  const [num, setNum] = useState('num')
  const [file, setFile] = useState('file')
  const [name, setName] = useState('name')
  const [gr, setGr] = useState('re')

  const dispatch = useDispatch()

  const props = {
    beforeUpload: (file) => {
      const isImg = file.type === 'image/*'

      if (!isImg) {
        message.error(`${ file.name } is not a png file`)
      }

      return isImg || Upload.LIST_IGNORE
    },
    onChange: (info) => {
      console.log(info.fileList)
    },
  }

  return <>
    <Form action="" onSubmit={ (e) => {
      e.preventDefault()
      dispatch(createChampion([
        {
          id: num,
          uri: file,
          name,
          region: gr,
        },
      ]))
    } }>
      
      <Form.Item htmlFor="">ID
        <Input type="number" name="" id="" onChange={ (e) => setNum(e.target.value) } />
      </Form.Item>
      <Upload { ...props }>
        <Button icon={ <UploadOutlined /> }>上传文件</Button>
      </Upload>
      <Form.Item htmlFor="">名称
        <Input type="text" name="" id="" onChange={ (e) => setName(e.target.value) } />
      </Form.Item>
      <Form.Item htmlFor="">地区
        <Input type="text" name="" id="" onChange={ (e) => setGr(e.target.value) } />
      </Form.Item>
      <Form.Item htmlFor="">
        <Input type="submit" name="" id="" />
      </Form.Item>
    </Form>
  </>
}

export default Add