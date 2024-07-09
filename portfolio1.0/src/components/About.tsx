import "./About.css";
import profilePic from "./images/profilePic.png";

export const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="textContainer">
          <p className="welcomeText">Welcome to my corner of the webb!</p>
          <p className="presentationText">
            I'm Kornilia, a dedicated fullstack development student at
            Medieinstitutet. Always open to new opportunities, feel free to
            reach out. Click on the "Contact" section to get in touch and let's
            explore how we can collaborate.
          </p>
        </div>
        <div className="imgContainer">
          <img src={profilePic} alt="profilePictureKornilia" />
          <div className="col-2">{/* <span className="line"></span> */}</div>
        </div>
      </div>
    </div>
  );
};
