import Head from 'next/head'
import Landing from '../components/Landing'
import ProjectHighlights from '../components/ProjectHighlights'
import AboutMeEducation from '../components/AboutMeEducation'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'

const Home = ({ highlightProjects = [] }) => {

  
  return (
    <div>
      <Head>
        <title>Nathan Dong</title>
      </Head>
      <Landing />
      <ProjectHighlights highlightProjects={highlightProjects} />
      <Skills />
      <AboutMeEducation />
      <Testimonials />
    </div>
  )
}

// Function runs at build time
export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/highlightprojects`)
  const highlightProjects = await res.json()

  return {
    props: {
      highlightProjects,
    },
  }
}

export default Home;
