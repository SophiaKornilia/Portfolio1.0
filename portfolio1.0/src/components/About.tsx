import "./About.css";
import profilePic from "./images/portfolioPortraitImg.png";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="textContainer">
          <h1 className="welcomeText">Welcome to my corner of the web</h1>
          <p className="presentationText">
            Hi, I'm Kornilia! As a passionate fullstack development student at
            Medieinstitutet, I'm on an exciting journey to create meaningful
            digital experiences. I love tackling complex problems and turning
            ideas into elegant solutions through code.
          </p>
          <p className="presentationText">
            I'm always eager to take on new challenges and collaborate on
            interesting projects. If you'd like to connect or discuss potential
            opportunities, feel free to reach out through the Contact section
            below.
          </p>
        </div>
        <div className="imgContainer">
          <img src={profilePic} alt="profilePictureKornilia" />
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};
