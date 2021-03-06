import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import FullPageLoader from "../../components/FullPageLoader/FullPageLoader"
import TitleText from "../../components/TitleText/TitleText"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import EditShelter from "../../components/EditShelter/EditShelter"
import ShelterDetails from "../../components/ShelterDetails/ShelterDetails"
import PendingApproval from "../../components/PendingApproval/PendingApproval"
import "./ShelterProfile.css"

function ShelterProfile({ convertDateTime }) {
  const [shelterDetails, setShelterDetails] = useState({
    name: "",
    address: "",
    description: "",
    species: [],
    charityregister: "",
    is_approved: false,
  })
  const [loading, setLoading] = useState(true)
  const [projectList, setProjectList] = useState([])
  const [editShelter, setEditShelter] = useState(false)
  const { id } = useParams
  const userID = window.localStorage.getItem("userID")

  // Get user details
  const handleClick = () => {
    setEditShelter(!editShelter)
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}${userID}/shelter/`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setShelterDetails(data)
        setLoading(false)
      })
      .then(() => {
        fetch(
          `${process.env.REACT_APP_API_URL}${shelterDetails.id}/shelter-projects/`
        )
          .then((results) => {
            return results.json()
          })
          .then((data) => {
            setProjectList(data)
            setLoading(false)
          })
      })
  }, [id, userID, shelterDetails.id])

  if (loading) {
    return <FullPageLoader />
  } else {
    return (
      <div>
        {editShelter ? (
          <>
            <TitleText title="Update Your Details" />
            <EditShelter shelterData={shelterDetails} />
          </>
        ) : (
          <>
            {shelterDetails.is_approved ? (
              <></>
            ) : (
              <PendingApproval toolTipInfo="Admin have not yet approved your shelter, once approved you will be able to submit projects" />
            )}

            <TitleText className="title-text" title={shelterDetails.name} />
            <ShelterDetails
              shelterDetails={shelterDetails}
              onClick={handleClick}
            />
          </>
        )}
        {projectList.length === 0 ? (
          <></>
        ) : (
          <>
            <div className="project-cards">
              <h2>{`Projects ${shelterDetails.name} has created`}</h2>
              {projectList.map((projectData, key) => {
                return (
                  <ProjectCard
                    key={key}
                    projectData={projectData}
                    convertDateTime={convertDateTime}
                  />
                )
              })}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default ShelterProfile
