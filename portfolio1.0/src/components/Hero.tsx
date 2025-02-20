import "./Hero.css";
import "../index.css";
import { adjustScroll } from "../utils/adjustScroll";
import { ScrollButtons } from "./ScrollButtons";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll(".component");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const getNextSection = () => {
    switch (currentSection) {
      case "hero":
        return "about";
      case "about":
        return "skills";
      case "skills":
        return "projects";
      case "projects":
        return "contact";
      case "contact":
        return "hero";
      default:
        return "about";
    }
  };
  const getPreviousSection = () => {
    switch (currentSection) {
      case "about":
        return "hero";
      case "skills":
        return "about";
      case "projects":
        return "skills";
      case "contact":
        return "projects";
      default:
        return "hero";
    }
  };

  const getDirection = ():Array<"up" | "down">  => {
    return currentSection === "contact"
    ? ["up"]
    : currentSection === "hero"
    ? ["down"]
    : ["up", "down"];
  }

  // const getDirection = (): ("up" | "down")[] => {
  //   switch (currentSection) {
  //     case "hero":
  //       return ["down"];
  //     case "about":
  //       return ["up", "down"];
  //     case "skills":
  //       return ["up", "down"];
  //     case "projects":
  //       return ["up", "down"];
  //     case "contact":
  //       return ["up"];
  //     default:
  //       return ["down"];
  //   }
  // };

  return (
    <div className="hero" id="hero">
      <div className="content">
        <p>Hi! I´m Kornilia Adabugday</p>
        <p>I´m a fullstack developer</p>
        <div className="buttonContainer">
          <button className="aboutBtn" onClick={adjustScroll("about")}>
            about
          </button>
          <button className="skillsBtn" onClick={adjustScroll("skills")}>
            skills
          </button>
          <button className="projectsBtn" onClick={adjustScroll("projects")}>
            projects
          </button>
          <button className="contactBtn" onClick={adjustScroll("contact")}>
            contact
          </button>
        </div>
      </div>
      <ScrollButtons
        scrollTargetUp={getPreviousSection()} 
        scrollTargetDown={getNextSection()}
        direction={getDirection()}
      />
    </div>
  );
};
