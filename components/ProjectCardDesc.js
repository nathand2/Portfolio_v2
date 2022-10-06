import React from "react";

const ProjectCardDesc = ({ heading, content }) => {
  return (
    <div>
      <>
        {heading !== undefined && <h1>{heading}</h1>}
        {content.map((section, index) => (
          <React.Fragment key={index}>
            <p>{section}</p>
          </React.Fragment>
        ))}
        <br />
      </>
    </div>
  );
};

export default ProjectCardDesc;
