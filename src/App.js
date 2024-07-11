import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';
import Project from './Pages/Project/Project';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
