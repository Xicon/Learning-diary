/*
 * Copyright (c) 2022. Lookeke<xiconz@qq.com>
 */

import { useCallback, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { of } from 'rxjs'

import { up } from '../../features/champions.js'

import './index.scss'

const useChampions = (uri = 'http://localhost:4000/champions') => {
  const [champions, setChampions] = useState([])

  const getNetChampions = useCallback(() => {
    of(new Promise(async (resolve, reject) => {
      const response = await fetch(uri, {
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.ok) {
        resolve(response.json())
      }
      else {
        reject(response.statusCode)
      }
    })).subscribe({
      next (data) {
        data.then(({ data }) => {
          setChampions([...data])
        })
      },
      error (err) {
        console.error(err)
      },
      complete () {
        console.log('执行完成')
      },
    })
  }, [setChampions])
  return [champions, getNetChampions]
}

const Champions = () => {
  const [champions, setChampions] = useChampions()

  const championList = useSelector(state => state.champions.value)
  const dispatch = useDispatch()

  console.log(championList)
  const nav = useNavigate()

  useEffect(() => {
    setChampions()
  }, [])

  return (<article className="champions">
    <article>
      <Button onClick={ () => dispatch(up(champions)) }>获取图片</Button>
      <Button onClick={ () => nav('/add') }>上传</Button>
    </article>

    <figure>
      <cite>英雄</cite>
      <figcaption>

        <ul>
          { championList.map((champ) => {
            return (<li key={ champ.id }>
              <img src={ champ.uri } alt={ champ.name } />
              <article>
                <p>{ champ.name }</p>
                <p>{ champ.region }</p>
              </article>
              <aside>
                <p>探索</p>
                <svg version="1.0" x="0px" y="0px" viewBox="0 0 162 70.28" fill="#937341" style="width: 12.5px;">
                  <circle fill="#937341" cx="31.57" cy="35.21" r="11.57"></circle>
                  <g>
                    <polygon fill="#937341"
                             points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"></polygon>
                    <rect x="84.61" y="29.76" fill="#937341" width="65" height="11.06"></rect>
                  </g>
                </svg>
              </aside>
            </li>)
          }) }
        </ul>
      </figcaption>
    </figure>
  </article>)
}
export default Champions