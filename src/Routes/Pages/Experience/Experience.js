import React from 'react';
import histories from '../../../Data/History.json';
const Experience = () => {
    return (
        <div className='text-white lg:mx-5 my-10'>
            <h1 className='text-3xl p-4 lg:mb-5'>EXPERIENCE</h1>
            <div>
                {
                    histories.map(history => <div className="flex gap-2 bg-gradient-to-b from-[#321484] p-2 rounded-2xl">
                        <img src={history.image} alt="history" className='rounded-full' />
                        <div >
                            <h3 className='text-xl'>{history.role},{history.Organization} </h3>
                            <p className='py-2 text-sm'>{history.StartDate} - {history.EndDate}</p>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Experience;