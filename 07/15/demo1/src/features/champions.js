/*
 * Copyright (c) 2022. Lookeke<xiconz@qq.com>
 */

'use strict'

/* @Description:
 * @Author: Lookeke<xiconz@qq.com>
 * @IDE: WebStorm
 * @DATE: 2022/7/14:13:52
 * @Last Modification Time: $ $ $
 */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

const champions = createSlice({
  name: 'champions',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = action.payload
    },
  },
})
export const {add } =champions.actions
export default champions.reducer