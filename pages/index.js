import Head from 'next/head'
import Landing from '../components/Landing'
import ProjectHighlights from '../components/ProjectHighlights'
import AboutMeEducation from '../components/AboutMeEducation'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import auroralStyles from "../styles/auroral.module.css";
import { useEffect, useState } from 'react'

const Home = ({ highlightProjects = [] }) => {

  const auroralStyleArr = [
    'auroral-northern',
    'auroral-northern-intense',
    'auroral-northern-dimmed',
    'auroral-northern-dusk',
    'auroral-northern-warm',
    'auroral-agrabah'
  ];

  const [currStyle, setCurrStyle] = useState(null)
  const [currStyleIndex, setCurrStyleIndex] = useState(0)

  useEffect(() => {
    var now = new Date();
    console.log(now);
    // const newStyleClassName = auroralStyleArr[Math.floor(now.getHours() / 6)];
    transitionAuroraStyle(currStyleIndex);
  }, [])

  const transitionAuroraStyle = async (newStyleIndex) => {
    console.log(newStyleIndex)
    setCurrStyle(auroralStyleArr[newStyleIndex]);

    setTimeout(() => transitionAuroraStyle((newStyleIndex + 1) % auroralStyleArr.length) , 500 * 10)
    // await setTimeout(transitionAuroraStyle((newStyleIndex + 1) % auroralStyleArr.length), 1000 * 10)
  };
  
  return (
    <div style={{
      width: "100%"
    }}>
      <div className={`${auroralStyles['container']}`}>
        <div className={`${auroralStyles['auroral-northern']}`} style={{opacity: currStyle == "auroral-northern" ? 1 : 0}}></div>
        <div className={`${auroralStyles['auroral-northern-intense']}`} style={{opacity: currStyle == "auroral-northern-intense" ? 1 : 0}}></div>
        <div className={`${auroralStyles['auroral-northern-dimmed']}`}style={{opacity: currStyle == "auroral-northern-dimmed" ? 1 : 0}}></div>
        <div className={`${auroralStyles['auroral-northern-dusk']}`}style={{opacity: currStyle == "auroral-northern-dusk" ? 1 : 0}}></div>
        <div className={`${auroralStyles['auroral-northern-warm']}`}style={{opacity: currStyle == "auroral-northern-warm" ? 1 : 0}}></div>
        <div className={`${auroralStyles['auroral-agrabah']}`}style={{opacity: currStyle == "auroral-agrabah" ? 1 : 0}}></div>
      </div>
      <div className={`${auroralStyles['star-container']}`}>
        <div className={`${auroralStyles['auroral-stars']}`}></div>
      </div>
      <Head>
        <title>by Nathan</title>
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
  const res = await fetch(`http://localhost:3002/highlights`)
  const highlightProjects = await res.json()

  return {
    props: {
      highlightProjects,
    },
  }
}

export default Home;
