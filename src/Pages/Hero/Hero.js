import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Existing container variant
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

// New variants for the enhanced paragraph
const paragraphVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.7 + i * 0.2,
            duration: 0.4
        }
    })
};

const Hero = () => {
    return (
        <div className='text-white min-h-screen hero lg:my-10'>
            <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center">
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                    src="Asset/myImage.jpg"
                    className="lg:max-w-sm rounded-xl"
                    alt='myImage'
                />

                <div className='w-2/3 mx-auto'>
                    <motion.h1
                        className="text-xl lg:text-6xl font-bold"
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                    >
                        Hello, I'm
                        <span className='text-red-700'> Rabiul Hasan Rafee</span>
                    </motion.h1>

                    {/* Enhanced Paragraph Section */}
                    <motion.p
                        className="py-6 text-lg"
                        variants={paragraphVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span variants={textVariants}>
                            I’m a passionate full-stack developer specializing in the MERN stack, with over 1 year of experience building dynamic and responsive web applications.
                        </motion.span>
                        <br />
                        <motion.span variants={textVariants}>
                            Proficient in <strong>MongoDB, Express, React,</strong> and <strong>Node.js</strong>, I create seamless user interfaces, manage complex state effectively, and ensure high-performing backend systems.
                        </motion.span>
                        <br />
                        <motion.span variants={textVariants}>
                            I’m highly skilled in frontend development, using advanced state management tools like <strong>Redux</strong>,<strong> Zustand</strong> and <strong>Context API</strong> to maintain smooth and efficient user experiences.
                        </motion.span>
                        <br />
                        <motion.span variants={textVariants}>
                            <strong>Let’s connect!</strong> Reach out if you’d like to discuss how I can contribute to your next project with the latest technologies and best practices.
                        </motion.span>
                    </motion.p>

                    <div className='flex gap-4 items-center mb-8'>
                        <motion.div
                            custom={0}
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <Link to="mailto:your.email@example.com">
                                <MdEmail className='text-3xl hover:text-red-500 transition-colors duration-300' />
                            </Link>
                        </motion.div>
                        <motion.div
                            custom={1}
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <Link to="https://www.linkedin.com/in/rabiul-rafee-361224183/" target='_blank' rel="noopener noreferrer">
                                <FaLinkedin className='text-3xl hover:text-blue-500 transition-colors duration-300' />
                            </Link>
                        </motion.div>
                        <motion.div
                            custom={2}
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <Link to="https://github.com/LaZyFee" target='_blank' rel="noopener noreferrer">
                                <FaGithub className='text-3xl hover:text-gray-400 transition-colors duration-300' />
                            </Link>
                        </motion.div>
                    </div>

                    <a href='#contact'>
                        <motion.button
                            className="btn btn-primary rounded-2xl text-white"
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.1, backgroundColor: '#ff0000' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
