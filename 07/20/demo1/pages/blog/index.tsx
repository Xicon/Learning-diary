export const getStaticProps = async () => {
  const res = await fetch('')
  const blog = res.json()

  return {
    props: {
      blog,
    },
    revalidate: 10,
  }
}

export default function Blog () {
  return <>

  </>
}