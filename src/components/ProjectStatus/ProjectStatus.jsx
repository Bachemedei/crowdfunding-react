import React from 'react'

function ProjectStatus({ opened, date }) {
    const projectStatus = () => {
        if(opened){
          return "Date Opened: " + date
        }
        return "Project Closed"
      }
    return (
        <p>{projectStatus()}</p>
    )
}

export default ProjectStatus
