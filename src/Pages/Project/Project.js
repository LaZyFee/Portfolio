import React from 'react';
import projects from '../../Data/projects.json';

const Project = () => {
    return (
        <div className='text-white lg:mx-10'>
            <h1 className='text-3xl lg:mb-4'>PROJECTS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mt-12'>
                {
                    projects.map(project => <div className="card bg-base-100 lg:w-96 shadow-xl">
                        <figure>
                            <img
                                src={project.image} alt="image-of-project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {project.name}
                            </h2>
                            <p>{project.description}</p>
                            <div className="card-actions">
                                {project.library.map(library => <div className="badge badge-accent badge-outline">{library}</div>)}
                            </div>
                            <div className="card-actions lg:mt-4">
                                <a href={project.live}><button className="btn btn-outline btn-info">Live</button></a>
                                <a href={project.source}><button className="btn btn-outline btn-info">Source</button></a>
                            </div>
                        </div>
                    </div>
                    )
                }

            </div>
        </div>
    );
};

export default Project;