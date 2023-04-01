import './App.css';
import About from './Pages/About';
import Intro from './Pages/Intro';
import Contact from './Pages/Contact';
import Experiences from './Pages/Experiences';
import Footer from './Pages/Footer';
import Navbar from './Pages/Navbar';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';



function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Intro/>
      {/* <About/> */}
      {/* <Skills/> */}
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
