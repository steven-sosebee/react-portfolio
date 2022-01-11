import React from "react";
import Project from "../components/project";
// import { ProjectProvider } from "../components/projects";

export default function Portfolio() {
  return (
    <div>
      <div>This is the portfolio page.</div>
      {/* <ProjectProvider> */}
      <Project />
      {/* </ProjectProvider> */}
    </div>
  );
}
