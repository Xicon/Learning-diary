/*
 * Copyright (c) 2022. Lookeke<xiconz@qq.com>
 */

'use strict'

/* @Description:
 * @Author: Lookeke<xiconz@qq.com>
 * @IDE: WebStorm
 * @DATE: 2022/7/14:13:50
 * @Last Modification Time: $ $ $
 */

import { configureStore } from '@reduxjs/toolkit'

import champions from '../features/champions'

export const store = configureStore({
  reducer: {
    champions,
  },
})