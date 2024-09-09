import "./Footer.css";

export const Footer = () => {
  const adjustScroll =
    (id: string) =>
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      const element = document.getElementById(id);

      let headerOffset: number;
      switch (id) {
        case "hero":
          headerOffset = 0;
          break;
        case "about":
          headerOffset = 130;
          break;
        case "skills":
          headerOffset = 300;
          break;
        case "projects":
          headerOffset = 0;
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
    <div className="footer">
      <div className="footerContainer">
        <ul>
          <li>
            <a href="#hero" onClick={adjustScroll("hero")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={adjustScroll("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={adjustScroll("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={adjustScroll("projects")}>
              Projects
            </a>
          </li>
        </ul>
        <div className="bottom">
          <p>2024 All rights resereved</p>
        </div>
      </div>
    </div>
  );
};
