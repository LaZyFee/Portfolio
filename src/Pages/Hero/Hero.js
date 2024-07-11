import React from 'react';


const Hero = () => {
    return (
        <div className='text-white min-h-screen hero'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="Asset/myImage.png" className="lg:max-w-sm rounded-full" alt='myImage' />
                <div className='w-2/3 mx-auto'>
                    <h1 className=" text-xl lg:text-5xl font-bold">Hello, I'm Rabiul Rafee</h1>
                    <p className="py-6">
                        I’m a full-stack developer with over 1 year <br />
                        of experience using React and NodeJS. <br />
                        Reach out if you’d like to learn more!
                    </p>
                    <a href='#contact'>  <button className="btn btn-primary rounded-2xl text-white">Contact me</button> </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;