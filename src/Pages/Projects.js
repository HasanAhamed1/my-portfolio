import React from "react";
import useProjects from "../Hooks/useProjects";
import Project from "../ShowProject/Project";

const Projects = () => {
  const [projects, setProjects] = useProjects();
  return (
    <div className="m-10 py-10">
      <h1 className="text-4xl text-center mb-6">My Complete Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 gap-5">
        {
          projects.map(project => <Project
            key={project._id}
            project={project}
            ></Project>)
        }
        {/* <div class="card bg-base-100 shadow-xl">
          <figure>
          <img className=""
                src="https://i.ibb.co/d2NY3z9/Web-capture-9-6-2022-20222-localhost.jpg"
                alt="Shoes"
              /> 
          </figure>
          <div class="card-body">
              <h2 class="card-title">Bike Tools</h2>
              <button className="btn">See Details</button>
            </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure>
            
              <img
                src="https://i.ibb.co/0V9MDxv/Web-capture-9-6-2022-203251-verdant-faun-275d7d-netlify-app.jpg"
                alt="Shoes"
              />
           
          </figure>
          <div class="card-body">
              <h2 class="card-title">Coffee Shop</h2>
              <button className="btn">See Details</button>
            </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure>
            
              <img
                src="https://i.ibb.co/NTRT28t/Web-capture-9-6-2022-201620-techno-mart-authenticati-7da11-web-app.jpg"
                alt="Shoes"
              />
           
          </figure>
          <div class="card-body">
              <h2 class="card-title">Techno_Mart</h2>
              <button className="btn">See Details</button>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
