import React from 'react';
import projectsData from '../../Data/FullstackProjects.json';
import Tab from '../../Components/Tab';
import ProjectCard from '../../Components/ProjectCard';

const FullStackProjects = () => {
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

export default FullStackProjects;
