import Logo from "./images/Group 1.png";
import cv from "../../public/documents/Kornilía Adabugday-cv.pdf";
import { useState } from "react";
import {
  FaBars,
  FaGithub,
  FaHome,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";
import { IoDocumentTextSharp } from "react-icons/io5";
export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handeClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="header">
        <nav className="navbar">
          <a href="/" className="logo">
            <img src={Logo} alt="logo" />
          </a>
          <div className="hamburger" onClick={handeClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#000" }} />
            ) : (
              <FaBars size={30} style={{ color: "#000" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/kornilia-adabugday-353695b8/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BhP3ebYUdTleS8%2BlvBY2cLw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={30} />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/SophiaKornilia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </li>

            <li className="nav-item">
              <a href={cv} target="_blank" rel="noopener noreferrer">
                <IoDocumentTextSharp size={30} />
              </a>
            </li>
            <li className="nav-item">
              <a href="/">
                <FaHome size={30} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
