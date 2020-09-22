import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import ProjectStatus from "../ProjectStatus/ProjectStatus";
import "./ProjectCard.css";
// import cat from "../../assests/images/cat.svg"
import AnimalLogo from "../AnimalLogo/AnimalLogo";

function ProjectCard({ projectData, oneProject, convertDateTime }) {
  return (
    <div className="project-card">
      <img
        className="project-img"
        src={projectData.image}
        alt={projectData.title}
      />
      <div>
        <Link to="/project">
          <p>{projectData.title}</p>
        </Link>
        <p>{projectData.shelter}</p>
        <AnimalLogo species={projectData.species[0]} />
        <ProgressBar data={oneProject} />
        <ProjectStatus
          opened={projectData.is_open}
          date={convertDateTime(projectData.date_created)}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
