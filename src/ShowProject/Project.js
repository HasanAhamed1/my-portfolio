import React from "react";
import { useNavigate } from "react-router-dom";

const Project = ({ project }) => {
  const { _id, name, img } = project;
  const navigate = useNavigate();
  const navigateToProjectDetail = (id) => {
    navigate(`/project/${id}`);
  };
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img className="" src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <button
          className="btn rounded font-bold h-10 w-28 mt-5"
          onClick={() => navigateToProjectDetail(_id)}
        >
          See Detail
        </button>
      </div>
    </div>
  );
};

export default Project;
