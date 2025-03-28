import "./Projects.css";
import { useRef } from "react";
import sophiaPlanner from "./images/sophiaPlanner.png";
import portfolio from "./images/Screenshot 2025-03-28 203402.png";

export const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      img: sophiaPlanner,
      title: "Sophia Planner",
      description:
        "A work-in-progress tool designed to help special educators create individualized plans with ease. Built with a modern tech stack and continuously improving as the project evolves.",
      github: "https://github.com/SophiaKornilia/sophiaPlanner",
      live: "https://sophiaplanner.vercel.app/",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Firebase",
        "Google cloud Scheduler",
      ],
      isWIP: true,
    },
    {
      img: portfolio,
      title: "Portfolio",
      description:
        "Curious about how this portfolio was built? This repo contains the full code behind the site you're currently viewing.",
      github: "https://github.com/SophiaKornilia/sophiaPlanner",
      live: "https://sophiaplanner.vercel.app/",
      tech: ["React", "TypeScript", "CSS"],
    },
  ];

  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">My projects</h2>
      <div className="projects-wrapper">
        <div className="projects-container" ref={scrollRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div
                className="project-image-container"
                style={{ position: "relative" }}
              >
                {project.isWIP && (
                  <div className="project-overlay">Work in progress</div>
                )}
                <div className="project-image">
                  <img src={project.img} alt={project.title} />
                </div>
              </div>
              <div className="project-info">
                <div className="project-description">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-footer">
                  {project.tech && (
                    <ul className="project-tech-list">
                      {project.tech.map((item, i) => (
                        <li key={i} className="tech-badge">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-button"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-button live"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
