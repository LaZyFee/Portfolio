import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Projects from '../ProjectsCard/Projects';
import Index from '../../../Components/AnimatedBeam/Beam';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Experience />
            <Index />
            <Projects />
            <Contact />

        </div>
    );
};

export default Home;
