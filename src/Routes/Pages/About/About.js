import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delayChildren: 0.2, staggerChildren: 0.3 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion
            className="text-white lg:mx-7 mx-2 rounded-xl"
            id="about"
            initial="hidden"
            animate="visible"
            variants={containerVariant}
        >


            <div className="lg:card flex flex-col hero-content border relative overflow-hidden w-full mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box]  border-transparent animate-border">
                {/* Aurora Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-800 to-custom-radial opacity-20 blur-3xl animate-pulse"></div>
                <motion.h1 className="text-4xl font-bold text-red-500 p-4 tracking-wide" variants={itemVariant}>
                    ABOUT ME
                </motion.h1>
                <div className="lg:card-body lg:mx-16 space-y-6">
                    <motion.p className="text-lg text-gray-300 leading-8" variants={itemVariant}>
                        I am a <span className="font-bold text-white">self-driven, career-oriented Software Engineer</span> specializing in
                        <span className="font-bold text-white"> front-end development</span>, currently pursuing a
                        <span className="font-bold text-white"> Bachelor’s degree in Computer Science</span>. My expertise lies in
                        <span className="font-bold text-white"> building interactive, scalable, and optimized web applications</span>.
                        I primarily work with
                        <span className="font-bold text-white"> JavaScript, React, Next.js, and TypeScript</span>, ensuring seamless and dynamic user experiences.
                    </motion.p>

                    <motion.p className="text-lg text-gray-300 leading-8" variants={itemVariant}>
                        Passionate about <span className="font-bold text-white">continuous learning</span>, I embrace every opportunity to grow—whether in a
                        favorable or challenging environment. Apart from coding, I enjoy
                        <span className="font-bold text-white"> writing technical articles</span> and working on projects that
                        <span className="font-bold text-white"> inspire and benefit fellow developers</span>.
                    </motion.p>

                    <motion.div className="mt-6 space-y-6" variants={itemVariant}>
                        <div className="flex items-center gap-5 bg-gray-900 p-4 rounded-lg shadow-md">
                            <div>
                                <h3 className="text-xl font-bold text-white">Frontend Development</h3>
                                <p className="text-gray-400">
                                    Specializing in crafting interactive UIs with <span className="text-purple-600 font-semibold">React.js, Next.js, and TypeScript </span>
                                    while ensuring <span className="text-white font-semibold">high performance and accessibility</span>.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 bg-gray-900 p-4 rounded-lg shadow-md">
                            <div>
                                <h3 className="text-xl font-bold text-white">Backend Development</h3>
                                <p className="text-gray-400">
                                    Experienced in developing <span className="text-purple-600 font-semibold">RESTful APIs</span> with
                                    <span className="text-purple-600 font-semibold"> Node.js, Express, and MongoDB</span>, ensuring
                                    <span className="text-white font-semibold"> optimized server-side performance</span>.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 bg-gray-900 p-4 rounded-lg shadow-md">
                            <div>
                                <h3 className="text-xl font-bold text-white">State Management</h3>
                                <p className="text-gray-400">
                                    Proficient in handling complex state with <span className="text-purple-600 font-semibold">Redux, Zustand, and Context API</span>,
                                    ensuring smooth and efficient user experiences.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.h1 className="text-4xl font-bold text-red-500 p-4 tracking-wide" variants={itemVariant}>
                    📊 GitHub Stats
                </motion.h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center mx-auto">
                    <img
                        src="https://github-readme-streak-stats.herokuapp.com/?user=LaZyFee&theme=github_dark&hide_border=false"
                        alt="GitHub Streak Stats"
                    />
                    <img src="https://github-readme-activity-graph.vercel.app/graph?username=LaZyFee&theme=github-dark"
                        alt="GitHub Contribution Graph"
                    />
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=LaZyFee&theme=github_dark&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
                        alt="Top Languages"
                    />
                </div>
            </div>
        </motion>
    );
};

export default About;