import styles from '../styles/ProjectCard.module.css'
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion"

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
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={styles.project_desc_container}>
      <div className={styles.image_container} >
        <Image src={`https://cdn.jsdelivr.net/gh/nathand2/Portfolio_v2@master/public/${projectImageName}`} className={styles.preview} alt={projectImageName} fill />
      </div>
      <div>
        <h1>{title}</h1>
        <div>
          {
            sections ? sections.map(({heading, content}, index) => (
              <ProjectCardDesc heading={heading} content={content} key={index} />
            )) : <></>
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
    </motion.div>
  );
};

export default ProjectCard;
