import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import FullPageLoader from "../FullPageLoader/FullPageLoader"
import TitleText from "../TitleText/TitleText"
import ProjectCard from "../ProjectCard/ProjectCard"
import EditShelter from "../EditShelter/EditShelter"
import ShelterDetails from "../ShelterDetails/ShelterDetails"

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
    fetch(`${process.env.REACT_APP_API_URL}${userID}/shelter-projects/`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setProjectList(data)
        setLoading(false)
      })
  }, [id, userID])

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
            <TitleText title={shelterDetails.name} />
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
