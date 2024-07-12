import "./Hero.css";
import "../index.css";

export const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="content">
        <p>Hi! I´m Kornilia Adabugday</p>
        <p>I´m a fullstack developer</p>
        <div className="buttonContainer">
          <button className="aboutBtn">
            <a href="#about">about</a>
          </button>
          <button className="projectsBtn">
            <a href="#projects">projects</a>
          </button>
          <button className="contactBtn">
            <a href="#contact">contact</a>
          </button>
        </div>
      </div>
    </div>
  );
};
