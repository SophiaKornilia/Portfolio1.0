import "./About.css";
import profilePic from "./images/portfolioPortraitImg.png";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">   <div className="imgContainer">
          <img src={profilePic} alt="profilePictureKornilia" />
          <div className="col-2"></div>
        </div>
        <div className="textContainer">
          <h1 className="welcomeText">Welcome to my corner of the web</h1>
          <p className="presentationText">
          I'm a passionate fullstack development student at Medieinstitutet, graduating in April. I thrive on solving complex problems and transforming ideas into elegant, functional solutions through code.
          </p>
          <p className="presentationText">
          I'm always eager to learn, take on new challenges, and collaborate on exciting projects. If you're looking for a motivated developer to join your team, feel free to reach out—I’d love to connect!
          </p>
        </div>
     
      </div>
    </div>
  );
};
