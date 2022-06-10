import React from 'react';
import { useNavigate } from 'react-router-dom';


const Project = ({ project }) => {
    const {_id, name, img} = project;
    const navigate = useNavigate();
    const navigateToProjectDetail = (id) => {
        navigate(`/project/${id}`);
    }
    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
            
            <button
          className="btn rounded font-bold h-10 w-28 mt-5"
          onClick={() => navigateToProjectDetail(_id)}
        >
          See Detail
        </button>
        </div>
    );
};

export default Project;