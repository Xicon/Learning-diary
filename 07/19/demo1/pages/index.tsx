import type { NextPage } from 'next'
import { getSortedPostsData } from '../utils/posts'
import  Fetch  from '../utils/fetch'

interface INewsNetData {
  id: string | number
  name: string
  uri: string
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const response = await Fetch<Array<INewsNetData>>()
  const allNewsNetData = await response.json().then((data: { body: INewsNetData }) => data.body)
  return {
    props: {
      allPostsData,
      allNewsNetData,
    },
  }
}

export const getStaticPaths = async () => {
  const response = await Fetch<{ name:string }>('http://localhost:4000/user')
  const userID = await response.json().then(({ body }:string)=> body.name)
  console.log(userID)
  return{
    props:{
      userID
    }
  }
}

const Home: NextPage<any> = ({ allNewsNetData }) => {

  return <>
    <ul>
      {
        allNewsNetData?.map((_: any) => {
          return (<li key={ _.id }>
            <p>{ _.name }</p>
            <img src={ _.uri } alt={ _.name } />
          </li>)
        })
      }
    </ul>
  </>
}

export default Home