import React from 'react';
import projectsData from '../../../Data/ReactProjects.json';
import Tab from '../../../Components/Tab';
import HoverCard from '../../../Components/Cards/HoverCard';
const ReactProjects = () => {

    return (
        <>
            <Tab />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mx-5 lg:my-12'>
                {projectsData.map((project, index) => (
                    <HoverCard key={index} project={project} />
                ))}
            </div>
        </>
    );
};

export default ReactProjects;