import React, { useEffect, useState } from 'react';
import Project from './Project';

const ShowProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://frozen-falls-19995.herokuapp.com/projects')
        .then((res) => res.json())
        .then((data) => setProjects(data));
    }, []);
    return (
        <div>
            {
                projects.map((project) => <Project
                key={project.id}
                project={project}
                ></Project>)
            }
        </div>
    );
};

export default ShowProjects;