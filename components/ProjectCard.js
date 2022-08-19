import styles from '../styles/ProjectCard.module.css'
import React from 'react'
import Image from "next/image";

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
  return (
    <div className={styles.project_desc_container}>
      <div className={styles.image_container} >
        <Image src={`/${projectImageName}`} className={styles.preview} alt={projectImageName} layout='fill' />
      </div>
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
