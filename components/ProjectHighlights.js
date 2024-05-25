import React from "react";
import Link from "next/link";
import styles from "../styles/ProjectHighlights.module.css";
import ProjectCard from "./ProjectCard";

const ProjectHighlights = ({ highlightProjects }) => {
  return (
    <div className={styles.container} id="projects">
      <h1 className={styles.title}>Project Highlights</h1>
      <br />
      <div className={styles.project_container}>
        {highlightProjects !== undefined &&
          highlightProjects.map(
            (
              {
                projectImageName,
                projectTitle,
                tags,
                links,
                desc,
                descLong,
                sections,
              },
              index
            ) => (
              <React.Fragment key={index}>
                <ProjectCard
                  projectImageName={projectImageName}
                  title={projectTitle}
                  tags={tags}
                  links={links}
                  desc={desc}
                  descLong={descLong}
                  sections={sections}
                />
                {index != highlightProjects.length - 1 ? (
                  <svg width="100%" height="10">
                    <line
                      x1="0"
                      y1="5"
                      x2="100%"
                      y2="5"
                      style={{stroke: "black", strokeWidth:4}}
                    />
                  </svg>
                ) : undefined}
              </React.Fragment>
            )
          )}
      </div>
      {/* <Link href="/projects">
          <h2>See more of my projects</h2>
      </Link> */}
    </div>
  );
};

export default ProjectHighlights;
