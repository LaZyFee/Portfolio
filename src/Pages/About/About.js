import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delayChildren: 0.2,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            className='text-white lg:mx-7 mx-2 rounded-xl'
            id='about'
            initial="hidden"
            animate="visible"
            variants={containerVariant}
        >
            <motion.h1
                className='text-3xl p-4'
                variants={itemVariant}
            >
                ABOUT
            </motion.h1>

            <div className="lg:card lg:card-side">
                <motion.figure
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="Asset/myImage2.jpg" className='lg:max-w-sm rounded-xl lg:ml-10' alt="animation" />
                </motion.figure>

                <div className="lg:card-body lg:mx-36">
                    {/** Frontend Developer Section **/}
                    <motion.div
                        className='rounded-xl lg:px-3 py-1 flex gap-1 hover:bg-gradient-to-r from-[#19376D]'
                        variants={itemVariant}
                    >
                        <img src="Asset/about/image 2.png" alt="" />
                        <div>
                            <h3 className='text-xl'>Frontend Developer</h3>
                            <p className='py-2 text-sm'>
                                I’m a front-end developer with experience <br />
                                in building responsive and optimized sites
                            </p>
                        </div>
                    </motion.div>

                    {/** Backend Developer Section **/}
                    <motion.div
                        className='rounded-xl lg:px-3 py-1 flex gap-1 hover:bg-gradient-to-r from-[#19376D]'
                        variants={itemVariant}
                    >
                        <img src="Asset/about/image 3.png" alt="" />
                        <div>
                            <h3 className='text-xl'>Backend Developer</h3>
                            <p className='py-2 text-sm'>
                                I have experience developing fast and <br />
                                optimized back-end systems and APIs
                            </p>
                        </div>
                    </motion.div>

                    {/** UI Designer Section **/}
                    <motion.div
                        className='rounded-xl lg:px-3 py-1 flex gap-1 hover:bg-gradient-to-r from-[#19376D]'
                        variants={itemVariant}
                    >
                        <img src="Asset/about/image 4.png" alt="" />
                        <div>
                            <h3 className='text-xl'>UI Designer</h3>
                            <p className='py-2 text-sm'>
                                I have designed multiple landing pages and <br />
                                have created design systems as well
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
