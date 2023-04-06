import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={project.name} />
      </a>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;