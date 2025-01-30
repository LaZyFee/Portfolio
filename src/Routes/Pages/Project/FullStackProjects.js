import React from 'react';
import projectsData from '../../../Data/FullstackProjects.json';
import ProjectCard from '../../../Components/ProjectCard';
import Tab from '../../../Components/Tab';

const FullStackProjects = () => {
    return (
        <>
            <Tab />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-5 lg:my-12'>
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </>
    );
};

export default FullStackProjects;
