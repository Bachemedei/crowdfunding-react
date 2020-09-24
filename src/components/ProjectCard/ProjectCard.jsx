import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import ProjectStatus from "../ProjectStatus/ProjectStatus";
import "./ProjectCard.css";
// import cat from "../../assests/images/cat.svg"
import AnimalLogo from "../AnimalLogo/AnimalLogo";

function ProjectCard({ projectData, convertDateTime }) {
  return (
    <div className="project-card">
      <img
        className="project-img"
        src={projectData.image}
        alt={projectData.title}
      />
      <div>
        <Link to={`/project/${projectData.id}`}>
          <h3>{projectData.title}</h3>
        </Link>
        <p>{projectData.shelter}</p>
        <div className="project-animals">
          {projectData.species.map((species, index) => {
            return <AnimalLogo species={species} key={index} />;
          })}
        </div>
        <ProjectStatus
          opened={projectData.is_open}
          date={convertDateTime(projectData.date_created)}
        />
        <ProgressBar data={projectData} />
      </div>
    </div>
  );
}

export default ProjectCard;
