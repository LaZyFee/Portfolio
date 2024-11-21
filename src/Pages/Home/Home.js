import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Tech from '../Technologies/Tech';
import Contact from '../Contact/Contact';
import Projects from '../ProjectsCard/Projects';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Experience />
            <Tech />
            <Projects />
            <Contact />

        </div>
    );
};

export default Home;
