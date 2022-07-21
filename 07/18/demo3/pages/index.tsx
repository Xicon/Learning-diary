import Layout, { siteTitle } from '../components/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import utilStyle from '../styles/utils.module.scss'

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className={ utilStyle.headingMd }>
        <p>[your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{ ' ' }
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}

export default Home