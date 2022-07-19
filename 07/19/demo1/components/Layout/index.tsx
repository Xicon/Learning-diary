import Head from 'next/head'
import Link from 'next/link'

import './index.scss'

export const Layout = ()=>{
  return<>
    <Head>
      <title>{}</title>
    </Head>
    <footer>
      <Link href='/'>
        <a href="">Back Home</a>
      </Link>
    </footer>
  </>
}