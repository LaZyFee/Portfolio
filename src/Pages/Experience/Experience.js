import React from 'react';
import skills from '../../Data/skill.json';
import histories from '../../Data/History.json';

const Experience = () => {
    return (
        <div className='text-white lg:mx-10' id='experience'>
            <h1 className='text-3xl p-4 lg:mb-10'>EXPERIENCE</h1>
            <div className=' lg:flex gap-10'>
                <div className="lg:w-1/2  grid grid-cols-3 lg:mx-10">
                    {
                        skills.map(skill => <div className="rounded-xl px-3 py-1 flex flex-col gap-2 items-center">
                            <img src={skill.image} alt="skills" className='bg-[#19376D] rounded-full p-2' />
                            <div>
                                <h3 className='text-xl'>{skill.name}</h3>
                                <p className='py-2'>{skill.description}</p>
                            </div>
                        </div>)
                    }

                </div>
                <div className="lg:w-2/1  lg:mx-20">
                    {
                        histories.map(history => <div className="flex gap-2 bg-gradient-to-r from-[#19376D] p-2 rounded-2xl">
                            <img src={history.image} alt="history" className='rounded-full' />
                            <div >
                                <h3 className='text-xl'>{history.role},{history.Organization} </h3>
                                <p className='py-2 text-sm'>{history.StartDate} - {history.EndDate}</p>
                            </div>
                        </div>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Experience;