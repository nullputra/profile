import Head from 'next/head'
import Layout from '../components/layout'

// 例によって getStaticProps を使えば,
// 実行時に props としてデータをフェッチできる.
const msg = '404 Page Not Found'
export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>{msg}</title>
      </Head>
      <h1>{msg}</h1>
    </Layout>
  )
}
