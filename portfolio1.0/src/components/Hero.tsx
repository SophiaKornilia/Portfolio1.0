import "./Hero.css";
import "../index.css";

export const Hero = () => {
  const adjustScroll =
    (id: string) =>
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      const element = document.getElementById(id);

      let headerOffset: number;
      const isMobile = window.innerWidth <= 480;

      switch (id) {
        case "about":
          headerOffset = 130;
          break;
        case "skills":
          headerOffset = isMobile ? 200 : 300;
          break;
        case "projects":
          headerOffset = isMobile ? 150 : 0;
          break;
        case "contact":
          headerOffset = isMobile ? 100 : 110;
          break;
        default:
          headerOffset = 0;
          break;
      }

      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };
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
    </div>
  );
};
