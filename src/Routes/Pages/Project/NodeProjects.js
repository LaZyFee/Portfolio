import React from 'react';
import Tab from '../../../Components/Tab';
import projectsData from '../../../Data/NodeProjects.json';
import ProjectCard from '../../../Components/ProjectCard';
const NodeProjects = () => {
    return (
        <>
            <Tab />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mx-5 lg:my-12'>
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </>
    );
};

export default NodeProjects;