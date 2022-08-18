import styles from '../styles/ProjectCard.module.css'
import { useEffect } from 'react'
import React from 'react'

import ProjectCardDesc from './ProjectCardDesc'



const ProjectCard = ({
  projectImageName,
  title,
  tags,
  links,
  desc,
  descLong,
  sections
}) => {
  useEffect(() => {
    console.log('sections:', sections)
  }, [])
  return (
    <div className={styles.project_desc_container}>
      <img src={`/${projectImageName}`} className={styles.preview} />
      <div>
        <h1>{title}</h1>
        <div>
          {
            sections.map(({heading, content}, index) => (
              <ProjectCardDesc heading={heading} content={content} key={index} />
            ))
          }
        </div>
        <div className={styles.project_links}>
          {links.map(({ name, link, active }, index) =>
            active ? (
              <a href={link} className={styles.link_active} key={index}>
                {name}
              </a>
            ) : (
              <a className={styles.link_inactive} key={index}>
                {name}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
