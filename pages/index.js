import Head from 'next/head'
import Landing from '../components/Landing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nathan Dong</title>
      </Head>
      <Landing />
      <h1>Welcome to Next</h1>
    </div>
  )
}
