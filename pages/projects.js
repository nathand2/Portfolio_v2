import Projects from '../components/Projects'
import Head from 'next/head'

const Home = ({ projects = [] }) => {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <Projects projects={projects} />
    </div>
  )
}

// Function runs at build time
export async function getStaticProps() {
  const res2 = await fetch(`http://localhost:3002/projects`);
  const projects = await res2.json();

  return {
    props: {
      projects,
    },
  }
}

export default Home