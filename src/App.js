import './App.css';
import About from './Pages/About';
import Intro from './Pages/Intro';
import Contact from './Pages/Contact';
import Experiences from './Pages/Experiences';
import Footer from './Pages/Footer';
import Navbar from './Pages/Navbar';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import SideNav from './Pages/SideNav';



function App() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <SideNav/> */}
      <Intro/>
      <About/>
      <Skills/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
