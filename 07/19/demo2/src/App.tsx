import { FC, useCallback, useState } from 'react'

import './App.css'

interface INewsList {
  id: number | string
  name: string
  uri: string
}

const useNewList = () => {
  const [data, setData] = useState<Array<INewsList>>([
    {
      id: 0,
      name: '0',
      uri: '0',
    }])
  const getJSON = useCallback((uri:string) => {
    (async () => {
      const response = await fetch(uri, {
        headers: { 'Context-Type': 'application/json' },
      })
      if (response.ok) {
        const list = await response.json().then(({ body }) => body)
        setData(list)
      }
      else {
        console.error(response.statusText)
      }
    })()
  }, [setData])
  return [data, getJSON] as const
}

const ShowNewsList = () => {
  const [data, setData] = useNewList()
  return <>
    <button onClick={ () => setData('http://localhost:4000/api/newsList') }>Update</button>
    <ul>
      {
        (data as Array<INewsList>)?.map((k: INewsList) => {
          return <li key={ k.id }>
            <p>{ k.name }</p>
            <img width='100px' height='100px' src={ k.uri } alt={ k.name } />
          </li>
        })
      }
    </ul>
  </>
}

const App: FC = () => {
  return <>
    <ShowNewsList />
  </>
}

export default App