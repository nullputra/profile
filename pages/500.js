import Head from 'next/head'
import Layout from '../components/layout'

const msg = '500 Internal Server Error'
export default function Custom500() {
  return (
    <Layout>
      <Head>
        <title>{msg}</title>
      </Head>
      <h1>{msg}</h1>
    </Layout>
  )
}
