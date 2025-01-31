import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ImageMask from '../../../Components/Mask/ImageMask';

const Hero = () => {
    const imageSrc = "Asset/myImage.jpg";
    return (
        <div className=' text-white min-h-screen flex items-center justify-center'>
            <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center p-8 lg:p-16 rounded-lg shadow-2xl bg-opacity-75 backdrop-blur-lg border relative overflow-hidden w-full mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box]  border-transparent animate-border">
                {/* Aurora Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-800 to-custom-radial opacity-20 blur-3xl animate-pulse"></div>

                <motion.div
                    className="relative lg:w-1/2"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                >
                    {/* Use ImageMask with imageSrc prop */}
                    <ImageMask imageSrc={imageSrc} />
                </motion.div>

                <div className="lg:w-2/3 mx-auto text-center lg:text-left">
                    <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                        Hello, I&apos;m{" "}
                        <span className="text-red-600 underline decoration-wavy">
                            Rabiul Hasan Rafee
                        </span>
                    </h1>

                    {/* Enhanced Paragraph Section */}
                    <p className="lg:py-6 lg:text-lg leading-7">
                        <span>
                            I’m a passionate full-stack developer specializing in the{" "}
                            <strong className="text-blue-500">MERN stack</strong>, with over 1
                            year of experience building dynamic and responsive web
                            applications.
                        </span>
                        <br />
                        I create
                        seamless user interfaces, manage complex state effectively, and
                        ensure high-performing backend systems.
                        <br />
                        <br />
                        <span>
                            <strong>Let’s connect!</strong> Reach out if you’d like to discuss
                            how I can contribute to your next project with the latest
                            technologies and best practices.
                        </span>
                    </p>
                    <div className='flex gap-6 items-center mb-8 justify-center relative'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.4 }}
                        >
                            <Link to="mailto:rhr277@gmail.com">
                                <MdEmail className='text-5xl hover:text-red-500 transition-all duration-300 hover:scale-125' />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.4 }}
                        >
                            <Link to="https://www.linkedin.com/in/rabiul-rafee-361224183/" target='_blank' rel="noopener noreferrer">
                                <FaLinkedin className='text-5xl hover:text-blue-500 transition-all duration-300 hover:scale-125' />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.4 }}
                        >
                            <Link to="https://github.com/LaZyFee" target='_blank' rel="noopener noreferrer">
                                <FaGithub className='text-5xl hover:text-gray-400 transition-all duration-300 hover:scale-125' />
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "#e63946",
                            boxShadow: "0px 4px 20px rgba(230, 57, 70, 0.5)",
                        }}
                        whileTap={{ scale: 0.95 }}
                    > </motion.div>
                    <a href="#contact">
                        <button className="group relative">
                            <div
                                className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-full
        bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] 
         bg-transparent px-6 font-medium dark:text-white text-black  transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3">
                                Contact me
                            </div>
                            <div className="absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3  group-hover:[box-shadow:5px_5px_#394481,10px_10px_#5766be,15px_15px_#8898f3]"></div>
                        </button>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Hero;
