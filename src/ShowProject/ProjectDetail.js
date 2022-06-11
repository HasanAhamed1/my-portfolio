import React from "react";
import { useParams } from "react-router-dom";
import useDetail from "../Hooks/useDetail";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project] = useDetail(projectId);
  return (
    
        <div class="card bg-base-100 shadow-xl m-10 lg:m-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <figure>
        <img src={project.img2} alt="Shoes" />
      </figure>
      <figure>
        <img src={project.img3} alt="Shoes" />
      </figure>
      <figure>
        <img src={project.img4} alt="Shoes" />
      </figure>
      </div>
      <div class="card-body">
        <h2 class="card-title text-2xl">{project.name}</h2>
        <br />
        <div class="card-actions">
        <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" href={project.livesite} target="_blank">Live Site</a>
        <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" href={project.gitClient} target="_blank">GitLink (Client)</a>
      <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" href={project.gitServer} target="_blank">GitLink (Server)</a>
    </div>
      <p>{project.description}</p>
      </div>
    </div>
      
  );
};

export default ProjectDetail;
