import { server } from '../config'

import Head from 'next/head'
import Landing from '../components/Landing'
import ProjectHighlights from '../components/ProjectHighlights'
import AboutMe from '../components/AboutMe'

const Home = ({ projects, highlightProjects }) => {

  return (
    <div>
      <Head>
        <title>Nathan Dong</title>
      </Head>
      <Landing />
      <ProjectHighlights highlightProjects={highlightProjects} />
      <AboutMe />
    </div>
  )
}

// Function runs at build time
export async function getStaticProps() {
  const res = await fetch(`${server}/api/projects`)
  const projects = await res.json()

  const res2 = await fetch(`${server}/api/highlightprojects`)
  const highlightProjects = await res2.json()

  return {
    props: {
      projects, highlightProjects,
    },
  }
}

export default Home;
