import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Jubaeir</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I am A.K.M Jubaeir Islam. I'm 21 and currently studying Computer Science in an University. Below I have shared some of my Projects</p>
        <p>
          {' '}
          I have built this website using NextJs. Thanks to their amazing 
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2> 
              <Link href='https://github.com/Zubiii333/DiceRoller'>
                <a>Dice Roller App using Kotlin</a>
              </Link>
              <br />
              <Link href= 'https://github.com/Zubiii333/next-blog'>
                <a> My personal blog </a>
              </Link>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
