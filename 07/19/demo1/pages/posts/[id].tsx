interface IPosts {
  id: number,
  title: string
  uri: string
}

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const posts = await response.json()
  const paths = posts?.map((post: IPosts) => ({
    params: {
      id: post.id,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (props: { params: { id: string } }) => {
  const { params } = props
  console.log(params.id)
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ params?.id }`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const post = await response.json()

  return { props: { post } }
}

const Post = (props: { post: Array<IPosts> }) => {
  const { post } = props

  return <>
    <ul>
      {
        post?.map((post: IPosts) => {
          return <li>
            <p>{ post.id }</p>
            <p>{ post.title }</p>
            <img src={ post.uri } alt={ post.title } width="100px" height="100px" />
          </li>
        })
      }

    </ul>
  </>
}

export default Post