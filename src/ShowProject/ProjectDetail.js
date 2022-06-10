import React from "react";
import { useParams } from "react-router-dom";
import useDetail from "../Hooks/useDetail";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project] = useDetail(projectId);
  return (
    <div className="grid gap-5 justify-items-center m-24">
      <div class="w-64 rounded-xl">
        <img src={project.img} alt="" />
      </div>
      <h1>{project.name}</h1>
      <a href={project.livesite} target="_blank">Live Site</a>
      <a href={project.gitClient} target="_blank">GitLink (Client)</a>
      <a href={project.gitServer} target="_blank">GitLink (Server)</a>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
