import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./HomePage.css";
import TitleText from "../../components/TitleText/TitleText";

function HomePage({ convertDateTime }) {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  return (
    <div className="project-cards">
      <TitleText title="Featured Projects" />
      {projectList.map((projectData, key) => {
        return (
          <ProjectCard
            key={key}
            projectData={projectData}
            // oneProject={oneProject}
            convertDateTime={convertDateTime}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
