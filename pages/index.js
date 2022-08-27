import Head from 'next/head'
import Landing from '../components/Landing'
import ProjectHighlights from '../components/ProjectHighlights'
import AboutMe from '../components/AboutMe'
import AboutMeEducation from '../components/AboutMeEducation'

const Home = ({ highlightProjects }) => {

  return (
    <div>
      <Head>
        <title>Nathan Dong</title>
      </Head>
      <Landing />
      <ProjectHighlights highlightProjects={highlightProjects} />
      <AboutMeEducation />
      <AboutMe />
    </div>
  )
}

// Function runs at build time
export async function getStaticProps() {
  const res2 = await fetch(`https://api.nathandong.com/projects/highlights`)
  const highlightProjects = await res2.json()

  return {
    props: {
      highlightProjects,
    },
  }
}

export default Home;
