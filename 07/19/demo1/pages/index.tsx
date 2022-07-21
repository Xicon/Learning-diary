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


  return {
    props: {
      allPostsData,

    },
  }
}

const Home: NextPage<any> = ({ allNewsNetData}) => {
  return <>
    <ul>

    </ul>
  </>
}

export default Home