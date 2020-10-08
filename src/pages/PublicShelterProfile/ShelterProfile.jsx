import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import FullPageLoader from "../../components/FullPageLoader/FullPageLoader"
import TitleText from "../../components/TitleText/TitleText"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import ShelterDetails from "../../components/ShelterDetails/ShelterDetails"

function PublicShelterProfile({ convertDateTime }) {
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
  const { id } = useParams()

  useEffect(() => {
    console.log(id)
    fetch(`${process.env.REACT_APP_API_URL}shelters/${id}/`)
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
  }, [id, shelterDetails.id])

  if (loading) {
    return <FullPageLoader />
  } else {
    return (
      <div>
        <TitleText title={shelterDetails.name} />
        <ShelterDetails shelterDetails={shelterDetails} />
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

export default PublicShelterProfile
