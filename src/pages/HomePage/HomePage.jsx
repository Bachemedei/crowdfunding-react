import React, { useState, useEffect } from "react"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import TitleText from "../../components/TitleText/TitleText"
import FullPageLoader from "../../components/FullPageLoader/FullPageLoader"
import "./HomePage.css"

function HomePage({ convertDateTime }) {
  const [projectList, setProjectList] = useState([])
  const [loading, setLoading] = useState(true)
  const userID = window.localStorage.getItem("userID")

  useEffect(() => {
    let url = "projects/"
    if (userID != null) url = `${userID}/recommended/`
    fetch(`${process.env.REACT_APP_API_URL}${url}`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setProjectList(data)
        setLoading(false)
      })
  }, [userID])

  if (loading) {
    return <FullPageLoader />
  }
  return (
    <div className="project-cards">
      <TitleText
        title={userID != null ? "Recommended Projects" : "Featured Projects"}
      />
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
  )
}

export default HomePage
