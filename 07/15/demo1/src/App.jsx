/*
 * Copyright (c) 2022. Lookeke
 */

import { useCallback, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { of } from 'rxjs'
import add  from './features/champions.js'

const useChampions = (uri = 'http://localhost:4000/api/data1') => {
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

  useEffect(() => {
    setChampions()
  }, [])

  return (<article>
    <button onClick={()=>dispatch(add({
      type:'desc',
      champions
    }))}>存储到redux</button>
  </article>)
}

function App () {
  return (
    <>
      <Champions />
    </>
  )
}

export default App