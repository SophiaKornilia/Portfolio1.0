import "./Projects.css";
import { useRef } from "react";
import sophiaPlanner from "./images/sophiaPlanner.png";
import test1 from "./images/MovieSearch.png";

export const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Exempeldata med länkar och teknikstack
  const projects = [
    {
      img: sophiaPlanner,
      title: "Sophia Planner",
      description:
        "En omfattande planeringsapplikation för att hantera uppgifter och scheman med modern design.",
      github: "https://github.com/ditt-namn/sophia-planner",
      live: "https://min-app.netlify.app",
      tech: ["React", "TypeScript", "Node.js"],
    },
    {
      img: test1,
      title: "Movie Search",
      description:
        "En intuitiv film-sökapplikation där användare kan söka och hitta information om filmer.",
      github: "https://github.com/ditt-namn/movie-search",
      tech: ["React", "API Fetch", "CSS Modules"],
    },
  ];

  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">Mina Projekt</h2>
      <div className="projects-wrapper">
        <div className="projects-container" ref={scrollRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.img} alt={project.title} />
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
