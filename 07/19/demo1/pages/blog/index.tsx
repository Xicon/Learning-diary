export const getStaticProps = async () => {
  const response = await fetch(`http://localhost:4000/posts/a`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (response.ok) {
    const paths = await response.json()
    console.log(paths)
    return {
      props: {
        paths,
      },
    }
  }
}

const Blog = (props: any) => {
  return <>
    {
      props?.paths?.map((i: any) => {
        return <li key={ i.id }>
          <p>{ i.id }</p>
          <p>{ i.title }</p>
          <p>{ i.uri }</p>
        </li>
      })
    }
  </>
}

export default Blog