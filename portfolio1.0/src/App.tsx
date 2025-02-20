import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="component hero" id="hero">
          <Hero />
        </div>
        <div className="component about" id="about">
          <About />
        </div>
        <div className="component skills" id="skills">
          <Skills />
        </div>
        <div className="component projects" id="projects">
          <Projects />
        </div>
        <div className="component contact" id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
