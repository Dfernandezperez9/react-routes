import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectsPage from "./data/projects";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsPage);
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <p>This is the projects page</p>

      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <img src={project.image} alt={project.name} />
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Ver más
          </a>
        </div>
      ))}

      <Link to="/">Home</Link>
    </>
  );
}

export default Projects;