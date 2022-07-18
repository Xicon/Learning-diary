/*
 * Copyright (c) 2022. Lookeke<xiconz@qq.com>
 */

'use strict'

/* @Description:
 * @Author: Lookeke<xiconz@qq.com>
 * @IDE: WebStorm
 * @DATE: 2022/7/14:13:10
 * @Last Modification Time: $ $ $
 */

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Add from '../pages/Add/index'

import './index.scss'
import Champions from '../pages/Champions/index.jsx'

const Routers = () => {
  return (<BrowserRouter>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">宇宙</Link>
          </li>
          <li>
            <Link to="/add">添加</Link>
          </li>
          <li>
            <Link to="/featured">专题</Link>
          </li>
          <li>
            <Link to="/champions">英雄</Link>
          </li>
          <li>
            <Link to="/regions">地区</Link>
          </li>
          <li>
            <Link to="/comics">漫画</Link>
          </li>
          <li>
            <Link to="/collections">集锦</Link>
          </li>
          <li>
            <Link to="/altUniverse">另一个宇宙</Link>
          </li>
          <li>
            <Link to="/map">地图</Link>
          </li>
          <li>
            <Link to="/explore">探索</Link>
          </li>
          <li>
            <Link to="/search">搜索</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={ <>Index</> } />
        <Route path="/add" element={ <Add /> } />
        <Route path="/featured" element={ <>专题</> } />
        <Route path="/champions" element={ <>英雄</> } />
        <Route path="/regions" element={ <>地区</> } />
        <Route path="/comics" element={ <>漫画</> } />
        <Route path="/collections" element={ <>集锦</> } />
        <Route path="/altUniverse" element={ <>另一个宇宙</> } />
        <Route path="/map" element={ <>地图</> } />
        <Route path="/explore" element={ <>探索</> } />
        <Route path="/search" element={ <>搜索</> } />
      </Routes>
    </header>

    <main>
      <Champions />
    </main>
  </BrowserRouter>)
}

export default Routers