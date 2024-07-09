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
    <div className="boxContainer">
      <div className="box1">
        <p>Frontend</p>
        <div className="iconContainer">
          <IoLogoJavascript className="skillIcon" />
          <FaReact className="skillIcon" />
          <FaHtml5 className="skillIcon" />
          <FaCss3Alt className="skillIcon" />
        </div>
      </div>
      <div className="box2">
        <p>Tools</p>
        <div className="iconContainer">
          <FaGitAlt className="skillIcon" />
          <FaWordpress className="skillIcon" />
          <SiWoo className="skillIcon" />
        </div>
      </div>
      <div className="box3">
        <p>Backend</p>
        <div className="iconContainer">
          <FaNode className="skillIcon" />
          <FaPhp className="skillIcon" />
          <SiMysql className="skillIcon" />
          <TbSql className="skillIcon" />
        </div>
      </div>
    </div>
  );
};
