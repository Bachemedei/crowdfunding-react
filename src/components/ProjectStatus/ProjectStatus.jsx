import React from 'react'
import "./ProjectStatus.css"

function ProjectStatus({ opened, date }) {
    const projectStatus = () => {
        if(opened){
          return "Date Opened: " + date
        }
        return "Project Closed"
      }
    return (
        <p className="project-status">{projectStatus()}</p>
    )
}

export default ProjectStatus
