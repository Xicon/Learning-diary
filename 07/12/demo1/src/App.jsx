import { useSelector, useDispatch } from 'react-redux'
import { gql, useQuery } from '@apollo/client'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'

import Add from './pages/Add/index'

const ShowBook = () => {
  const books = gql`
		query BookList {
			books {
				id
				title
				author
				uri
			}
		}
  `
  const { data, loading, error, } = useQuery(books)

  if (loading) return <strong>Loading</strong>
  if (error) return <p>Error</p>

  return (<ul>
    {
      data.books.map((item) => {
        return (<li key={ item.id }>
          <img src={ item.uri } alt={ item.title } />
          <strong>{ item.author }</strong>
        </li>)
      })
    }
  </ul>)
}

function App () {
  const books = useSelector(state => state.bookList.value)
  const dispatch = useDispatch()

  return (
    <>
      <BrowserRouter>
        <Link to='/add'>Add</Link>

        <Routes>
          <Route path='/add' element={<Add/>}></Route>
        </Routes>
      <ShowBook />
      </BrowserRouter>

    </>
  )
}

export default App