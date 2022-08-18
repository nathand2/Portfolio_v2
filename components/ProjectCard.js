import styles from '../styles/ProjectCard.module.css'
import { useEffect } from 'react'



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
        {/* <div className="project-tags">
                {tags.map((tag, index) => <Tag key={index} label={tag.tag} color={tag.color} />)}
            </div> */}
        <div>
          {
            sections.map(({heading, content}) => (
              <>
                {heading !== undefined && <h1>{heading}</h1>}
                {content.map((section) => (
                  <>
                    <p1>{section}</p1><br />
                  </>
                ))}
                <br/>
              </>
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
