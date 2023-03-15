import React from "react";
import { useParams } from "react-router-dom";
import {ProjectList} from '../helpers/ProjectList'
import GitHubIcon from '@material-ui/icons/GitHub'

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id]
  return (
  <div className="project">
     <h1> {project.name}</h1>
  <img src={project.image}/>
  <GitHubIcon />
  </div>
  );
}

export default ProjectDisplay