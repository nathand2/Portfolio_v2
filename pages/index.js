import Head from 'next/head'
import Landing from '../components/Landing'
import ProjectHighlights from '../components/ProjectHighlights'
import AboutMeEducation from '../components/AboutMeEducation'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import ContactMe from '../components/ContactMe'
import Auroral from '../components/Auroral'

import styles from "../styles/Index.module.css";

const fs = require('fs').promises; // Import fs promises API

import { useEffect, useState } from 'react'

const Home = ({ highlightProjects = [] }) => {
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <Head>
        <title>by Nathan</title>
      </Head>
      <Auroral mouseX={mousePosition.x} mouseY={mousePosition.y} />
      <section className={styles.section}>
        <Landing />
      </section>
      <section className={styles.about_container} id="about">
        <AboutMe />
        <Skills />
        {/* <AboutMeEducation /> */}
      </section>
      <section className={styles.section}>
        <ProjectHighlights highlightProjects={highlightProjects} />
      </section>
      {/* <Testimonials /> */}
      <ContactMe/>
    </div>
  )
}

// Function runs at build time
export async function getStaticProps() {
  // const res = await fetch(`http://localhost:3002/highlights`)
  // const highlightProjects = await res.json()
  const data = await fs.readFile('data.json', 'utf8');
  const jsonData = JSON.parse(data);
  const highlightProjects = jsonData.highlightProjectData;

  return {
    props: {
      highlightProjects,
    },
  }
}

export default Home;
