import React from "react";
import useProjects from "../Hooks/useProjects";
import Project from "../ShowProject/Project";

const Projects = () => {
  const [projects, setProjects] = useProjects();
  return (
    <div className="m-10 py-10">
      <h1 className="text-4xl text-center mb-6">My Complete Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-14 gap-10">
        {
          projects.map(project => <Project
            key={project._id}
            project={project}
            ></Project>)
        }
      </div>
    </div>
  );
};

export default Projects;
