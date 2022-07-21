interface IProps {
  userID: string
  id: string
  title: string
  body: string
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const result = await res.json()

  return {
    props: {
      result,
    },

  }
}

export default function Blog (props: { result: Array<IProps> }) {
  const { result } = props

  return <>
    {
      result?.map((i: IProps) => {
        return <li key={ i.id }>{ i.title }</li>
      })
    }
  </>
}