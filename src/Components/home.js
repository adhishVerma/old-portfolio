import React from 'react'
import About from './about';
import Contact from './contact';
import Projects from './projects';
import Skills from './skills';

const Home = () => {
  return (
    <div>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home
