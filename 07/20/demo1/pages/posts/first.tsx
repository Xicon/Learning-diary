interface IPosts {
  id: number | string
  body: string
  title: string
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const post = await res.json()
  return {
    props: {
      post,
    },
  }
}

const First = (params: { post: Array<IPosts> }) => {
  const { post } = params
  return <>
    <ul>
      {
        post?.map((item: IPosts) => {
          return <li key={ item.id }>
            <p>{ item.id }</p>
            <p>{ item.title }</p>
            <p>{ item.body }</p>
          </li>
        })
      }
    </ul>
  </>
}

export default First