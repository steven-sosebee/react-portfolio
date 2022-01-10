import React from "react";
import { useProjectContext } from "./projects";
import { projects } from "../data/projects";
export default function Project() {
  // const { projects } = useProjectContext();
  // console.log(projects);
  const projectStyle = {
    backgroundColor: "red",
  };
  return (
    <div>
      <p>Projects List:</p>
      <ul>
        {projects.map((project) => (
          <li style={projectStyle} key={project.name}>
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
