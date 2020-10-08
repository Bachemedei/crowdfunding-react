import React from "react"
import { Link } from "react-router-dom"
import AnimalLogo from "../AnimalLogo/AnimalLogo"
import ProgressBar from "../ProgressBar/ProgressBar"
import ProjectStatus from "../ProjectStatus/ProjectStatus"
import "./ProjectCard.css"

function ProjectCard({ projectData, convertDateTime }) {
  return (
    <div className="project-card">
      <div className="lhs-card">
        <img
          className="project-img"
          src={projectData.image}
          alt={projectData.title}
        />
        <div className="project-animals">
          {projectData.species.map((species, index) => {
            return <AnimalLogo species={species} key={index} />
          })}
        </div>
      </div>
      <div>
        <Link to={`/project/${projectData.id}`}>
          <h2>{projectData.title}</h2>
          <ProjectStatus
            opened={projectData.is_open}
            date={convertDateTime(projectData.date_created)}
          />
        </Link>
        <Link to={`/shelter-profile/${projectData.shelter_id}`}>
          <h3>{projectData.shelter}</h3>
          <ProgressBar data={projectData} />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
