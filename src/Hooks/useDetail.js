import { useEffect, useState } from "react"


const useDetail = projectId => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        const url =`https://frozen-falls-19995.herokuapp.com/projects/${projectId}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => setProject(data));
    }, [projectId]);
    return [project]
}

export default useDetail;