import React, { useState, useEffect } from "react"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import TitleText from "../../components/TitleText/TitleText"
import FullPageLoader from "../../components/FullPageLoader/FullPageLoader"
import ToggleButton from "../../components/ToggleButton/ToggleButton"
import "./HomePage.css"

function HomePage({ convertDateTime }) {
  let url = "projects/"
  const userID = window.localStorage.getItem("userID")
  const [projectList, setProjectList] = useState([])
  const [loading, setLoading] = useState(true)
  const [seeAll, setSeeAll] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (userID != null && !seeAll) url = `${userID}/recommended/`
    fetch(`${process.env.REACT_APP_API_URL}${url}`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setProjectList(data)
        setLoading(false)
      })
  }, [userID, seeAll])

  const onButtonClick = (activeButton) => {
    setSeeAll(activeButton)
  }

  if (loading) {
    return <FullPageLoader />
  }
  return (
    <div className="project-cards">
      {userID != null ? (
        <>
          <TitleText
            title={
              !seeAll ? "Recommended Projects For You" : "Featured Projects"
            }
          />
          <ToggleButton
            valueOne="See Recommended"
            valueTwo="See All"
            label=""
            initState={seeAll}
            onButtonClick={onButtonClick}
          />
        </>
      ) : (
        <TitleText title="Featured Projects" />
      )}

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
