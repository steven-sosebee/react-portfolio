import React from "react";
// import quiz from "../images/quiz.jpg";
// import { useProjectContext } from "./projects";
import { projects } from "../data/projects";
const imgsrc = require("../images/quiz.jpg");
export default function Project() {
  // const { projects } = useProjectContext();
  // console.log(projects);
  // const quiz = "../images/quiz.jpg";
  return (
    <div>
      <p>Projects List:</p>
      <ul className="project-list">
        {projects.map((project) => (
          <li className="project" key={project.name}>
            <a href={project.link}>
              <img src={project.image} alt="demo"></img>
            </a>
            <div className="projectbody">
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
