import React from 'react'
import { Link } from "react-router-dom"
import "./ProjectCard.css"

function ProjectCard({ projectData }) {
    return (
        <div>
            <Link className="project-card" to="/project">
                <img src={projectData.image} alt={projectData.title}/>
                <div>
                    <h3>{projectData.title}</h3>
                    <h4>{projectData.shelter}</h4>
                    <h4>{projectData.species}</h4>
                    <h4>Goal: {projectData.goal}</h4>
                </div>

            </Link>
        </div>
    )
}

export default ProjectCard
