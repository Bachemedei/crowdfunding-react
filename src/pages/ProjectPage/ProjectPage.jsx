import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import AnimalLogo from "../../components/AnimalLogo/AnimalLogo"
import EditButton from "../../components/EditButton/EditButton"
import PledgesCard from "../../components/PledgesCard/PledgesCard"
import ProgressBar from "../../components/ProgressBar/ProgressBar"
import ProjectStatus from "../../components/ProjectStatus/ProjectStatus"
import TitleText from "../../components/TitleText/TitleText"
import FullPageLoader from "../../components/FullPageLoader/FullPageLoader"
import "./ProjectPage.css"
import DeleteButton from "../../components/DeleteButton/DeleteButton"
import EditProject from "../../components/EditProject/EditProject"
import DeleteProject from "../../components/DeleteProject/DeleteProject"

function ProjectPage({ convertDateTime }) {
  const token = window.localStorage.getItem("token")
  const history = useHistory()
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

  const handleEditClick = () => {
    setEditProject(!editProject)
  }

  // const handleDeleteClick = () => {
  //   fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`, {
  //     method: "delete",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Token ${token}`,
  //     },
  //   })
  //     .then((results) => {
  //       history.push("/")
  //       return results.text()
  //     })
  //     .then((data) => {
  //       console.log(data)
  //     })
  // }

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
          <EditButton
            contentOwner={projectData.owner_id}
            onClick={handleEditClick}
          />
          <DeleteProject contentOwner={projectData.owner_id} />
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
