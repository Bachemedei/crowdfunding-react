import React from 'react'
import { Link } from "react-router-dom"
import ProgressBar from "../ProgressBar/ProgressBar"
import "./ProjectCard.css"

function ProjectCard({ projectData, oneProject, convertDateTime }) {
    return (
        <div>
            <Link className="project-card" to="/project">
                <img src={projectData.image} alt={projectData.title}/>
                <div>
                    <p>{projectData.title}</p>
                    <p>{projectData.shelter}</p>
                    <p>{projectData.species}</p>
                    <ProgressBar data={oneProject} />
                    <p>Date Opened: {convertDateTime = convertDateTime(projectData.date_created)}</p>
                </div>

            </Link>
        </div>
    )
}

export default ProjectCard
