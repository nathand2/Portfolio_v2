import Projects from '../components/Projects'
import Head from 'next/head'

const fs = require('fs').promises; // Import fs promises API

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
  // const res2 = await fetch(`http://localhost:3002/projects`);
  // const projects = await res2.json();
  const data = await fs.readFile('data.json', 'utf8');
  const jsonData = JSON.parse(data);
  const projects = jsonData.projectData;

  return {
    props: {
      projects,
    },
  }
}

export default Home