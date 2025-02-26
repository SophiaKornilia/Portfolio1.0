import { IoLogoJavascript } from "react-icons/io5";
import "./Skills.css";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNode,
  FaPhp,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { SiMysql, SiWoo } from "react-icons/si";
import { TbSql } from "react-icons/tb";

export const Skills = () => {
  return (
    <div className="skillsContainer">
      <div className="titleContainer">
        <div className="skillHeading">
          <h2>Skills</h2>
          <p className="skillsDescription">
            Technologies and tools I use in my development work.
          </p>
        </div>
      </div>
      <div className="boxContainer" id="skills">
        <div className="box1">
          <div className="skillTextContainer">
            <h4>Frontend</h4>
            <p>Technologies I use to build user-friendly interfaces.</p>
          </div>
          <div className="iconContainer">
            <div className="tooltip">
              <div className="skillIcon">
                <IoLogoJavascript />
              </div>
              <span className="tooltiptext">JavaScript</span>
            </div>
            <div className="tooltip">
              <div className="skillIcon">
                <FaReact />
              </div>
              <span className="tooltiptext">React</span>
            </div>
            <div className="tooltip">
              <div className="skillIcon">
                <FaHtml5 />
              </div>
              <span className="tooltiptext">Html</span>
            </div>
            <div className="tooltip">
              <div className="skillIcon">
                <FaCss3Alt />
              </div>
              <span className="tooltiptext">CSS</span>
            </div>
            <div className="tooltip">
              <div className="skillIcon">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
              </div>
              <span className="tooltiptext">Tailwind</span>
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="skillTextContainer">
            <h4>Tools</h4>
            <p>Utilities and platforms I work with to streamline development</p>
          </div>
          <div className="iconContainer">
            <div className="tooltip">
              <div className="skillIcon">
                <FaGitAlt />
              </div>
              <span className="tooltiptext">Git</span>
            </div>{" "}
            <div className="tooltip">
              <div className="skillIcon">
                <FaWordpress />
              </div>
              <span className="tooltiptext">Wordpress</span>
            </div>{" "}
            <div className="tooltip">
              <div className="skillIcon">
                <SiWoo />
              </div>
              <span className="tooltiptext">WooCommerce</span>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className="skillTextContainer">
            <h4>Backend</h4>
            <p>Technologies for server-side logic and databases.</p>
          </div>
          <div className="iconContainer">
            <div className="tooltip">
              <div className="skillIcon">
                <FaNode />
              </div>
              <span className="tooltiptext">Node.js</span>
            </div>
            <div className="tooltip">
              <div className="skillIcon">
                <FaPhp />
              </div>
              <span className="tooltiptext">Php</span>
            </div>
            <div className="tooltip">
              <div className="skillIcon">
                <SiMysql />
              </div>
              <span className="tooltiptext">MySql</span>
            </div>
            <div className="tooltip">
              <div className="skillIcon">
                <TbSql />
              </div>
              <span className="tooltiptext">Sql</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
