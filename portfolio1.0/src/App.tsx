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
        <div className="component" id="hero">
          <Hero />
        </div>
        <div className="component" id="about">
          <About />
        </div>
        <div className="component" id="skills">
          <Skills />
        </div>
        <div className="component" id="projects">
          <Projects />
        </div>
        <div className="component" id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
