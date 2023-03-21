import AboutMe from '../components/AboutMe'
import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <AboutMe />
    </div>
  )
}

export default Home