import "./Hero.css";
import "../index.css";
import { adjustScroll } from "../utils/adjustScroll";
// import { ScrollButtons } from "./ScrollButtons";
import { useEffect, useState } from "react";
// import useIsMobile from "../assets/hooks/useIsMobile";
import { TypeWriter } from "../utils/TypeWriter";

export const Hero = () => {
  const [currentSection, setCurrentSection] = useState("about");
  // const isMobile = useIsMobile();

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

  return (
    <div className="hero" id="hero">
      <div className="content">
        <p>
          <TypeWriter text="Hi! I´m Kornilia Adabugday" />
        </p>
        <p>
          <TypeWriter text="I´m a fullstack developer" />
        </p>

        <div className="buttonContainer">
          <button className="aboutBtn" onClick={adjustScroll("about")}>
            About
          </button>
          <button className="skillsBtn" onClick={adjustScroll("skills")}>
            Skills
          </button>
          <button className="projectsBtn" onClick={adjustScroll("projects")}>
            Projects
          </button>
          <button className="contactBtn" onClick={adjustScroll("contact")}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
