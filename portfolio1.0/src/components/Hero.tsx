import "./Hero.css";
import "../index.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <p>Hi! I´m Kornilia Adabugday</p>
        <p>I´m a fullstack developer</p>
        <div className="buttonContainer">
          <button className="aboutBtn">About</button>
          <button className="contactBtn">Contact</button>
          <button className="projectsBtn">Projects</button>
        </div>
      </div>
    </div>
  );
};
