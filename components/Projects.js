import React from 'react'
import styles from '../styles/ProjectHighlights.module.css'
import ProjectCard from './ProjectCard'
const Projects = ({ projects }) => {
  return (
    <div className={styles.container} id='projects' >
      <h1>My Projects</h1>
      <br/>
      <div className={styles.project_container}>
        {
          projects !== undefined && projects.map(({ projectImageName, projectTitle, tags, links, desc, descLong, sections }, index) => (
            <ProjectCard  key={index} projectImageName={projectImageName} title={projectTitle} tags={tags} links={links} desc={desc} descLong={descLong} sections={sections} />
          ))
          }
      </div>
    </div>
  )
}

export default Projects