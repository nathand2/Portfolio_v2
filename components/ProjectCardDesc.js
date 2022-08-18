import React from "react";

const ProjectCardDesc = ({ heading, content }) => {
  return (
    <div>
      <>
        {heading !== undefined && <h1>{heading}</h1>}
        {content.map((section, index) => (
          <React.Fragment key={index}>
            <p1>{section}</p1>
            <br />
          </React.Fragment>
        ))}
        <br />
      </>
    </div>
  );
};

export default ProjectCardDesc;
