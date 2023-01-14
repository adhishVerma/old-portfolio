import './App.css';
import About from './Components/about';
import Contact from './Components/contact';
import Navbar from './Components/navbar';
import Projects from './Components/projects';
import Skills from './Components/skills';
import Background from './Components/background';
import Resume from './Components/resume';

function App() {
  return (
    <div className="App">
      <Background/>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Resume/>
    </div>
  );
}

export default App;
