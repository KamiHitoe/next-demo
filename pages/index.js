import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm virtual blonde beauty</p>
        <p>
          this is my first Next app
        </p>
        <Link href="/posts/first-post">
          <a>Jump to first post</a>
        </Link>
        <br />
        <Link href="/posts/second-post">
          <a>Jump to second post</a>
        </Link>
      </section>
    </Layout>
  )
}