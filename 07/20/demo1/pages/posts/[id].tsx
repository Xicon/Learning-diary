interface IPosts {
  id: number | string
  body: string
  title: string
}

export const getStaticPaths = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts', {
    headers: { 'Content-Type': 'application/json' },
  })
  const res = await posts.json()

  const paths = res.map((item: IPosts) => {
      return {
        params: { 'id': item.id.toString() },
      }
    },
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: { params: { id: string | number } }) => {
  const { params } = context
  console.log(params)
  console.log(params.id)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ params.id }`)
//  const res = await fetch(`http://localhost:3000/posts${params.id}`)
  const post = await res.json()
  return {
    props: {
      post,
    },
  }
}

const Post = (props: { post: IPosts }) => {
  const { post } = props
  return <>
    <ul>
      <li key={ post.id }>
        <p>{ post.id }</p>
        <p>{ post.title }</p>
        <p>{ post.body }</p>
      </li>
    </ul>
  </>
}

export default Post