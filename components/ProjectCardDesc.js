import React from "react";

const ProjectCardDesc = ({ heading, content }) => {
  return (
    <div>
      <>
        {heading !== undefined && <h1 style={{
              fontSize: "22px"
            }}>{heading}</h1>}
        {content.map((section, index) => (
          <React.Fragment key={index}>
            <p style={{
              fontSize: "16px"
            }}>{section}</p>
          </React.Fragment>
        ))}
        <br />
      </>
    </div>
  );
};

export default ProjectCardDesc;
