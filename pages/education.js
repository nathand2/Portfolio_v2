import React from 'react'
import Education from '../components/Education'
import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Education</title>
      </Head>
      <Education />
    </div>
  )
}

export default Home