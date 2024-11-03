import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Tech from '../Technologies/Tech';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Experience />
            <Tech />
            <Contact />
        </div>
    );
};

export default Home;
