import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import AnimalLogo from "../../components/AnimalLogo/AnimalLogo"
import EditDetails from "../../components/EditDetails/EditDetails"
import PledgesCard from "../../components/PledgesCard/PledgesCard"
import ProgressBar from "../../components/ProgressBar/ProgressBar"
import ProjectStatus from "../../components/ProjectStatus/ProjectStatus"
import TitleText from "../../components/TitleText/TitleText"
import FullPageLoader from "../../components/FullPageLoader/FullPageLoader"
import "./ProjectPage.css"
import DeleteContent from "../../components/DeleteContent/DeleteContent"
import EditProject from "../../components/EditProject/EditProject"

function ProjectPage({ convertDateTime }) {
  const [projectData, setProjectData] = useState({ pledges: [] })
  const [editProject, setEditProject] = useState(false)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setProjectData(data)
        setLoading(false)
      })
  }, [id])

  const handleClick = () => {
    setEditProject(!editProject)
  }

  if (loading) {
    return <FullPageLoader />
  }

  if (editProject) {
    return <EditProject projectData={projectData} />
  }

  // Template
  if (projectData.species !== undefined) {
    return (
      <div className="project-detail" key={projectData.id}>
        <TitleText title={projectData.title} />
        <div className="owner-options">
          <EditDetails
            contentOwner={projectData.owner_id}
            onClick={handleClick}
          />
          <DeleteContent contentOwner={projectData.owner_id} />
        </div>
        <div className="project-summary">
          <div className="img-and-icon">
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
          <div className="project-info">
            <h3>{projectData.shelter}</h3>
            <ProjectStatus
              opened={projectData.is_open}
              date={convertDateTime(projectData.date_created)}
            />
            <ProgressBar data={projectData} className="progress-bar" />
          </div>
        </div>
        <div className="project-body">
          <p>{projectData.description}</p>
          <PledgesCard projectData={projectData} />
        </div>
      </div>
    )
  }
  return null
}

export default ProjectPage
