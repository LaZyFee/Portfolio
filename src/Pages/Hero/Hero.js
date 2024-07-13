import React from 'react';
import { motion } from 'framer-motion';

const container = (delay) => ({
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
});

const Hero = () => {
    return (
        <div className='text-white min-h-screen hero'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    src="Asset/myImage.jpg"
                    className="lg:max-w-sm rounded-xl"
                    alt='myImage'
                />

                <div className='w-2/3 mx-auto'>
                    <motion.h1
                        className="text-xl lg:text-5xl font-bold"
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                    >
                        Hello, I'm
                        <span className='text-red-700'> Rabiul Hasan Rafee</span>
                    </motion.h1>

                    <motion.p
                        className="py-6"
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                    >
                        I’m a full-stack developer with over 1 year <br />
                        of experience using React and NodeJS. <br />
                        Reach out if you’d like to learn more!
                    </motion.p>
                    <a href='#contact'>
                        <motion.button className="btn btn-primary rounded-2xl text-white"
                            variants={container(1)}
                            initial="hidden"
                            animate="visible">Contact me</motion.button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
