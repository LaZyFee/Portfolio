import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div
            className="p-6 rounded-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
        >
            <div className="overflow-hidden rounded-lg">
                <img
                    src={project.image} alt={`imageOf${project.name}`}
                    loading="lazy"
                    className="h-[250px] w-full object-cover"
                />
            </div>

            <div className="card-body p-4 bg-base-200 rounded-lg">
                <h2 className="card-title font-semibold text-primary text-lg">
                    {project.name}
                </h2>
                <p className="text-sm text-white">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.library.map((library, libIndex) => (
                        <span key={libIndex} className="badge badge-accent badge-outline text-xs">
                            {library}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3 mt-2 justify-end">
                    {project.live && (
                        <Link to={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-info btn-md">
                            Live
                        </Link>
                    )}
                    {project.source && (
                        <Link to={project.source} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-info btn-md">
                            Source
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
