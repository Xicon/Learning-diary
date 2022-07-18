import { useState } from 'react'

import { gql, useMutation } from '@apollo/client'

const Add = () => {
  const [isbn, setIsbn] = useState('uri')
  const [bookName, setBookName] = useState('书名')
  const [author, setAuthor] = useState('作者')

  const [
    addBook, {
      data,
      loading,
      error,
    }] = useMutation(ADD_BOOK, {
    variables: {
      title: bookName,
      author,
      uri: isbn,
    },
  })

  const ADD_BOOK = gql`
		mutation CreateBook($title:title!,$author:author!,$uri:uri!){
			addBook(title:$title,author:$author,uri:$uri){
				title
				author
				uri
			}
		}
  `

  const submitHandle = (e) => {
    e.preventDefault()

    if (loading) { return 'loading' }
    if (error) { return `error: ${ error.message }` }

    addBook({
      variables: {
        title: bookName,
        author,
        uri: isbn,
      },
    })
  }

  return <>
    <form action="" onSubmit={ (e) => submitHandle(e) }>
      <label htmlFor="">ISBN:
        <input type="text" name="" id="" onChange={ (e) => setIsbn(
          e.target.value) } />
      </label>
      <label htmlFor="">书名
        <input type="text" name="" id=""
               onChange={ (e) => setBookName(e.target.value) } />
      </label>
      <label htmlFor="">作者
        <input type="text" name="" id=""
               onChange={ (e) => setAuthor(e.target.value) } />
      </label>
      <label htmlFor="">提交
        <input type="submit" name=""
               id="" />
      </label>
    </form>
  </>
}

export default Add