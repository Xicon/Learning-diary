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
  const getJSON = useCallback((uri: string) => {
    (async () => {

      const posts = await fetch('https://jsonplaceholder.typicode.com/posts', {
        headers: { 'Content-Type': 'application/json' },
      })
      const res = await posts.json()

      const paths = res.map((item) => {
          console.log([{ params: { id: item.id } }])
          return {
            paths:[
              {params:{'id':`${ item.id}`}},
              {params:{'id': item.id.toString()}}
            ]
          }
        },
      )
      setData(paths)

    })()
  }, [setData])
  return [data, getJSON] as const
}

const ShowNewsList = () => {
  const [data, setData] = useNewList()
  return <>
    <button onClick={ () => setData('http://localhost:4000/posts/1') }>Update</button>
    <ul>


      {/* { */ }
      {/*   (data as Array<INewsList>)?.map((k: INewsList) => { */ }
      {/*     return <li key={ k.id }> */ }
      {/*       <p>{ k.name }</p> */ }
      {/*       <img width='100px' height='100px' src={ k.uri } alt={ k.name } /> */ }
      {/*     </li> */ }
      {/*   }) */ }
      {/* } */ }

    </ul>
  </>
}

const App: FC = () => {
  return <>
    <ShowNewsList />
  </>
}

export default App