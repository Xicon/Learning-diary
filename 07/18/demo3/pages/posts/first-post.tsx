import Layout from '../../components/Layout'
import { FC, ReactElement, ComponentType } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const CompA: FC<IProps> = (props) => {
  return <>
    this is CompA
    <props.comp />
  </>
}

interface IProps {
  comp: ComponentType
}

const CompB = () => {
  return <Layout>
    <Head>
      <title>First-post</title>
    </Head>
    <h1>First Post</h1>
    <h2>
      <Link href="/">
        <a>Back to Home Page</a>
      </Link>
    </h2>
    {/* <img src="" alt="user" /> */ }
    <Image
      width="400px"
      height="400px"
      src="/images/user.jpg"
      alt="user"
    />
  </Layout>
}

const FirstPost = () => {
  return <>
    <CompA comp={ CompB } />
  </>
}

export default FirstPost