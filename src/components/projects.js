import React, { useContext, createContext } from "react";

const ProjectContext = createContext();

export const useProjectContext = () => useContext(ProjectContext);

export const ProjectProvider = ({ projects }) => {
  const initialState = {
    projects: [
      {
        name: "Timed Quiz",
      },
      { name: "Regex Tutorial" },
    ],
  };

  return (
    <ProjectContext.Provider value={initialState}>
      {projects}
    </ProjectContext.Provider>
  );
};
