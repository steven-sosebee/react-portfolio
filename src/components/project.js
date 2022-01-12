import React from "react";
// import { useProjectContext } from "./projects";
import { projects } from "../data/projects";
// import "../assets/images";
export default function Project() {
  // const { projects } = useProjectContext();
  // console.log(projects);

  return (
    <div>
      <p>Projects List:</p>
      <ul class="project-list">
        {projects.map((project) => (
          <li class="project" key={project.name}>
            <a href={project.link}>
              <img src={project.image} alt="demo"></img>
            </a>
            <projectbody>
              <p>
                <span>{project.name}</span>
                <br></br>
                {project.description}
                <br></br>
                <br></br>
                <a href={project.link} target={"_blank"} rel="noreferrer">
                  Deployed App
                </a>
                <br></br>
                <a href={project.github} target={"_blank"} rel="noreferrer">
                  Github Repo
                </a>
              </p>
            </projectbody>
          </li>
        ))}
      </ul>
    </div>
  );
}
