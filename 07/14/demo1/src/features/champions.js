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
  value: [
    {
      id: 3,
      uri: 'https://game.gtimg.cn/images/lol/universe/v1/assets/images/champion/splash/Syndra_0.jpg',
      region: '艾欧尼亚',
      name: '辛德拉',
    }, {
      id: 4,
      uri: 'https://game.gtimg.cn/images/lol/universe/v1/assets/images/champion/splash/Vayne_0.jpg',
      region: '德马西亚',
      name: '薇恩',
    }, {
      id: 5,
      uri: 'https://game.gtimg.cn/images/lol/universe/v1/assets/images/champion/splash/Aatrox_0.jpg',
      region: '符文之地',
      name: '阿卡丽',
    }, {
      id: 6,
      uri: 'https://game.gtimg.cn/images/lol/universe/v1/assets/images/champion/splash/Akali_0.jpg',
      region: '艾欧尼亚',
      name: '阿卡丽',
    }, {
      id: 7,
      uri: 'https://game.gtimg.cn/images/lol/universe/v1/assets/images/champion/splash/Rengar_0.jpg',
      region: '艾欧尼亚',
      name: '雷恩加尔',
    }],
}

const champions = createSlice({
  name: 'champions',
  initialState,
  reducers: {
    up: (state, action) => {
      state.value = [...state.value, ...action.payload]
    },
    createChampion: (state, action) => {
      state.value = [...state.value, ...action.payload]
    },
  },
})
export const {
  up,
  createChampion,
} = champions.actions
export default champions.reducer