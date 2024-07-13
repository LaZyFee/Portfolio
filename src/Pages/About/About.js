import React from 'react';

const About = () => {
    return (

        <div className='text-white lg:mx-7 mx-2 rounded-xl shadow-xl' id='about'>
            <h1 className='text-3xl p-4'>ABOUT</h1>
            <div className="lg:card lg:card-side ">
                <figure>
                    <img src="Asset/about/About.png" alt="animation" />
                </figure>
                <div className="card-body">
                    <div className='rounded-xl px-3 py-1 flex gap-1 hover:bg-gradient-to-r from-[#19376D]'>
                        <img src="Asset/about/image 2.png" alt="" />
                        <div>
                            <h3 className='text-xl'>Frontend Devloper</h3>
                            <p className='py-2'>I’m a front-end developer with experience <br />
                                in building responsive and optimized sites</p>
                        </div>

                    </div>
                    <div className='rounded-xl px-3 py-1 flex gap-1 hover:bg-gradient-to-r from-[#19376D]'>
                        <img src="Asset/about/image 3.png" alt="" />
                        <div>
                            <h3 className='text-xl'>Backend Devloper</h3>
                            <p className='py-2'>I have experience developing fast and <br />
                                optimised back-end systems and APIs</p>
                        </div>
                    </div>
                    <div className='rounded-xl px-3 py-1 flex gap-1 hover:bg-gradient-to-r from-[#19376D]'>
                        <img src="Asset/about/image 4.png" alt="" />
                        <div>
                            <h3 className='text-xl'>UI designer</h3>
                            <p className='py-2'>I have designed multiple landing pages and <br />
                                have created design systems as well</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;