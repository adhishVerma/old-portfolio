import './App.css';
import About from './Components/about';
import Contact from './Components/contact';
import Navbar from './Components/navbar';
import Projects from './Components/projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="background"/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
