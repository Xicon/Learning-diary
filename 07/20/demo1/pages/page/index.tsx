interface IProps {
  id: string
  userID: string
  title: string
  body: string
}

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

const Page = (props: { posts: Array<IProps> }) => {
  const { posts } = props
  return <>
    {
      posts.map((post: IProps) => {
        return <article key={ post.id }>
          <p>{ post.title }</p>
          <figure>
            <figcaption>
              <p>{ post.userID }</p>
              <p>{ post.title }</p>
            </figcaption>
          </figure>
        </article>
      })
    }
  </>
}

export default Page