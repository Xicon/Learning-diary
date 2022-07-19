import Head from 'next/head'
import Link from 'next/link'

const FirstPost = () => {
  return <>
    <Head>
      <title>this is first-post page</title>
    </Head>
    <Link href="/">
      <a>Back Home</a>
    </Link>
  </>
}

export default FirstPost