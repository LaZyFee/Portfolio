import React from 'react';

const About = () => {
    return (

        <div className='text-white lg:mx-7 mx-2 rounded-xl' id='about'>
            <h1 className='text-3xl p-4'>ABOUT</h1>
            <div className="lg:card lg:card-side ">
                <figure>
                    <img src="Asset/myImage2.jpg" className='lg:max-w-sm rounded-xl lg:ml-10' alt="animation" />
                </figure>
                <div className="lg:card-body lg:mx-36">
                    <div className='rounded-xl lg:px-3 py-1 flex gap-1 hover:bg-gradient-to-r from-[#19376D]'>
                        <img src="Asset/about/image 2.png" alt="" />
                        <div>
                            <h3 className='text-xl'>Frontend Devloper</h3>
                            <p className='py-2 text-sm'>I’m a front-end developer with experience <br />
                                in building responsive and optimized sites</p>
                        </div>

                    </div>
                    <div className='rounded-xl lg:px-3 py-1 flex gap-1 hover:bg-gradient-to-r from-[#19376D]'>
                        <img src="Asset/about/image 3.png" alt="" />
                        <div>
                            <h3 className='text-xl'>Backend Devloper</h3>
                            <p className='py-2 text-sm'>I have experience developing fast and <br />
                                optimised back-end systems and APIs</p>
                        </div>
                    </div>
                    <div className='rounded-xl lg:px-3 py-1 flex gap-1 hover:bg-gradient-to-r from-[#19376D]'>
                        <img src="Asset/about/image 4.png" alt="" />
                        <div>
                            <h3 className='text-xl'>UI designer</h3>
                            <p className='py-2 text-sm'>I have designed multiple landing pages and <br />
                                have created design systems as well</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;