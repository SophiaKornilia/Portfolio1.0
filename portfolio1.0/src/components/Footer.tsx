import "./Footer.css";
import { adjustScroll } from "../utils/adjustScroll";

export const Footer = () => {
  // const adjustScroll =
  //   (id: string) =>
  //   (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //     event.preventDefault();
  //     const element = document.getElementById(id);

  //     let headerOffset: number;
  //     switch (id) {
  //       case "hero":
  //         headerOffset = 0;
  //         break;
  //       case "about":
  //         headerOffset = 130;
  //         break;
  //       case "skills":
  //         headerOffset = 0;
  //         break;
  //       case "projects":
  //         headerOffset = 0;
  //         break;
  //       default:
  //         headerOffset = 0;
  //         break;
  //     }

  //     if (element) {
  //       const elementPosition =
  //         element.getBoundingClientRect().top + window.scrollY;
  //       const offsetPosition = elementPosition - headerOffset;
  //       window.scrollTo({
  //         top: offsetPosition,
  //         behavior: "smooth",
  //       });
  //     }
  //   };
  return (
    <div className="footer">
      <div className="footerContainer">
        <ul>
          <li>
            <button className="footerBtn" onClick={adjustScroll("hero")}>Home</button>
          </li>
          <li>
            <button className="footerBtn" onClick={adjustScroll("about")}>About</button>
          </li>
          <li>
            <button className="footerBtn" onClick={adjustScroll("skills")}>Skills</button>
          </li>
          <li>
            <button className="footerBtn" onClick={adjustScroll("projects")}>Projects</button>
          </li>
        </ul>
        <div className="bottom">
          <p> © 2025 Kornilia Adabugday</p>
        </div>
      </div>
    </div>
  );
};
