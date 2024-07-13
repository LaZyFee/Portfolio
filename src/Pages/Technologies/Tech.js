import React from 'react';
import skills from '../../Data/skill.json';
import { motion } from 'framer-motion';

const waveAnimation = (duration, delay = 0) => ({
    initial: {
        y: 0
    },
    animate: {
        y: [0, -10, 0, 10, 0],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: delay
        }
    }
});

const Tech = () => {
    return (
        <div className='text-white lg:mx-10 lg:mb-10'>
            <h1 className='text-3xl p-4 lg:mb-5'>TECHNOLOGIES</h1>
            <div className="grid grid-cols-3 lg:grid-cols-8 lg:gap-2">
                {
                    skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="rounded-xl px-3 py-1 flex flex-col gap-2 items-center"
                            variants={waveAnimation(2, index * 0.2)} // Delay each item to create wave effect
                            initial="initial"
                            animate="animate"
                        >
                            <img src={skill.image} alt="skills" className='bg-[#19376D] rounded-full p-2' />
                            <div>
                                <h3 className='text-xl'>{skill.name}</h3>
                                <p className='py-2'>{skill.description}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default Tech;
