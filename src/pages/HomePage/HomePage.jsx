import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import TitleText from "../../components/TitleText/TitleText";
import useFullPageLoader from "../../hooks/useFullPageLoader";
import "./HomePage.css";

function HomePage({ convertDateTime }) {
  const [projectList, setProjectList] = useState([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const userID = window.localStorage.getItem("userID");

  const filterProjects = () => {
    let url = "projects/";
    if (userID != null) url = `${userID}/recommended/`;
    console.log(url);
    return url;
  };

  useEffect(() => {
    showLoader();
    fetch(`${process.env.REACT_APP_API_URL}${filterProjects()}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
        hideLoader();
      });
  }, []);

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
        );
      })}
      {loader}
    </div>
  );
}

export default HomePage;
