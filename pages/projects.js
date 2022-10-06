import Projects from '../components/Projects'

const Home = ({ projects }) => {
  return (
    <div>
      projects
      <Projects projects={projects} />
    </div>
  )
}

// Function runs at build time
export async function getStaticProps() {
  const res2 = await fetch(`https://api.nathandong.com/projects/projects`)
  const projects = await res2.json()

  return {
    props: {
      projects,
    },
  }
}

export default Home