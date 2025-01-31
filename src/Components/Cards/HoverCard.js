import React from 'react';
import { Link } from 'react-router-dom';
import { FcGlobe } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
function HoverCard({ project }) {
    return (
        <div className="w-[400px] h-[450px] relative mt-4 overflow-hidden group mx-auto flex flex-col rounded-lg shadow-lg border border-gray-700">
            {/* Project Image */}
            <div className="w-full h-full">
                <img
                    src={project.image}
                    alt={`${project.name} Preview`}
                    className="w-full h-full object-fit rounded-md transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Hover Overlay */}
            <article className="absolute inset-0 flex flex-col justify-end p-6 bg-[#321484] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto z-10">
                <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                    <div className="flex gap-3 mt-3 justify-end">
                        {project.live && (
                            <Link
                                to={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition-all"
                            >
                                <FcGlobe className='text-2xl' />
                            </Link>
                        )}
                        {project.source && (
                            <Link
                                to={project.source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 border border-green-400 text-green-400 rounded-md hover:bg-green-500 hover:text-white transition-all"
                            >
                                <FaGithub className='text-2xl' />
                            </Link>
                        )}
                    </div>
                    <h1 className="text-2xl font-semibold text-orange-500">{project.name}</h1>
                    <p className="text-gray-300">{project.description}</p>
                </div>
            </article>

            {/* Project Info (Before Hover) */}
            <article className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-[#321484] rounded-b-lg opacity-100 group-hover:opacity-0 transition-all duration-300">
                <h1 className="text-2xl font-bold text-orange-500">{project.name}</h1>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.library.map((library, index) => (
                        <span key={index} className="px-2 py-1 border border-gray-400 text-xs text-white rounded-md bg-orange-500">
                            {library}
                        </span>
                    ))}
                </div>
            </article>
        </div>
    );
}

export default HoverCard;
