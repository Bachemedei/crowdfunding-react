import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import TitleText from "../../components/TitleText/TitleText"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import FullPageLoader from "../../components/FullPageLoader/FullPageLoader"
import UserDetails from "../../components/UserDetails/UserDetails"
import "./UserProfile.css"

function PublicUserProfile({ convertDateTime }) {
  const [userProfile, setUserProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const [projectList, setProjectList] = useState([])
  const { id } = useParams()

  // Get user details
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${id}/`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setUserProfile(data)
        setLoading(false)
      })
    fetch(`${process.env.REACT_APP_API_URL}${id}/supported-projects/`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setProjectList(data)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <FullPageLoader />
  } else {
    return (
      <div>
        <TitleText title="Profile" />
        <UserDetails userProfile={userProfile} />
        {projectList.length === 0 ? (
          <></>
        ) : (
          <>
            <div className="project-cards">
              <h2>{`Projects ${userProfile.preferredname} has supported`}</h2>
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

export default PublicUserProfile
