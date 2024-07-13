import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';
import Project from './Pages/Project/Project';
import Contact from './Pages/Contact/Contact';
import Tech from './Pages/Technologies/Tech';

function App() {
  return (
    <div className="bg-custom-radial">
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
