import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First post</h1>
      <h2>
        <Link href="/">
          <a>back to home page</a>
        </Link>
        <br />
        <Link href="/posts/second-post">
          <a>jump to second post</a>
        </Link>
      </h2>
    </Layout>
  );
}
