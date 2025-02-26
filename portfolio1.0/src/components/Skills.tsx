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
    <div className="projects-section" id="projects">
      <div className="skillsContainer">
        <div className="titleContainer">
          <div className="skillHeading">
            <h2 className="projects-title">Skills</h2>
            <p className="skillsDescription">
              Technologies and tools I use in my development work.
            </p>
          </div>
        </div>
        <div className="boxContainer" id="skills">
          <div className="skillContainer">
            <div className="skillIcon">
              <IoLogoJavascript />
            </div>
            <div className="skillLabel">JavaScript</div>
          </div>
          <div className="skillContainer">
            <div className="skillIcon">
              <FaReact />
            </div>
            <div className="skillLabel">React</div>
          </div>
          <div className="skillContainer">
            <div className="skillIcon">
              <FaHtml5 />
            </div>
            <div className="skillLabel">Html</div>
          </div>
          <div className="skillContainer">
            <div className="skillIcon">
              <FaCss3Alt />
            </div>
            <div className="skillLabel">CSS</div>
          </div>
          <div className="skillContainer">
            <div className="skillIcon">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
            </div>
            <div className="skillLabel">Tailwind</div>
          </div>
          <div className="skillContainer">
            <div className="skillIcon">
              <FaGitAlt />
            </div>
            <div className="skillLabel">Git</div>
          </div>{" "}
          <div className="skillContainer">
            <div className="skillIcon">
              <FaWordpress />
            </div>
            <div className="skillLabel">Wordpress</div>
          </div>{" "}
          <div className="skillContainer">
            <div className="skillIcon">
              <SiWoo />
            </div>
            <div className="skillLabel">WooCommerce</div>
          </div>
          <div className="skillContainer">
            <div className="skillIcon">
              <FaNode />
            </div>
            <div className="skillLabel">Node.js</div>
          </div>
          <div className="skillContainer">
            <div className="skillIcon">
              <FaPhp />
            </div>
            <div className="skillLabel">Php</div>
          </div>
          <div className="skillContainer">
            <div className="skillIcon">
              <SiMysql />
            </div>
            <div className="skillLabel">MySql</div>
          </div>
          <div className="skillContainer">
            <div className="skillIcon">
              <TbSql />
            </div>
            <div className="skillLabel">Sql</div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
