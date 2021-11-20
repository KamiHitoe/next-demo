import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function SecondPost() {
  return (
    <Layout>
      <Head>
        <title>Second Post</title>
      </Head>

      <section>
        <h1>
          Second post
        </h1>
        <Link href="/">
          <a>back to home page</a>
        </Link>
        <br />
        <Link href="/posts/first-post">
          <a>jump to first post</a>
        </Link>
      </section>
    </Layout>
  )
}

