import styles from '../styles/ProjectCard.module.css'

const ProjectCard = ({
  projectImageName,
  title,
  tags,
  links,
  desc,
  descLong,
}) => {
  return (
    <div className={styles.project_desc_container}>
      <img src={`/${projectImageName}`} className={styles.preview} />
      <div>
        <h1 className="project-item-title">{title}</h1>
        {/* <div className="project-tags">
                {tags.map((tag, index) => <Tag key={index} label={tag.tag} color={tag.color} />)}
            </div> */}
        <p className="desc-text project-desc">{desc}</p>
        <div className="project-links">
          {links.map(({ name, link, active }, index) =>
            active ? (
              <a href={link} className="link-active" key={index}>
                {name}
              </a>
            ) : (
              <a className="link-inactive" key={index}>
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
