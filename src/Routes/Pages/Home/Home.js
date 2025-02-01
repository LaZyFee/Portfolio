import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Achivements from '../AchivementCard/Achivements';
import Beam from '../../../Components/AnimatedBeam/Beam';
import DemoProjects from '../DemoProject/DemoProjects';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Beam />
            <Experience />
            <DemoProjects />
            <Achivements />
            <Contact />
        </div>
    );
};

export default Home;
