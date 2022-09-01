import React from 'react'
import styles from '../styles/ProjectHighlights.module.css'
import ProjectCard from './ProjectCard'

const ProjectHighlights = ({ highlightProjects }) => {
  return (
    <div className={styles.container}>
      <h1>Notable Projects</h1>
      <br/>
      <div className={styles.project_container}>
        {
          highlightProjects !== undefined && highlightProjects.map(({ projectImageName, projectTitle, tags, links, desc, descLong, sections }, index) => (
            <ProjectCard  key={index} projectImageName={projectImageName} title={projectTitle} tags={tags} links={links} desc={desc} descLong={descLong} sections={sections} />
          ))
          }
      </div>
    </div>
  )
}

export default ProjectHighlights