import React from "react";
import { allProjects, oneProject } from "../../data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./HomePage.css"
import TitleText from "../../components/TitleText/TitleText";

function HomePage({ convertDateTime }) {
  return (
    <div className="project-cards">
    <TitleText title="Featured Projects" />
      {allProjects.map((projectData, key) => {
        return (
          <ProjectCard
            key={key}
            projectData={projectData}
            oneProject={oneProject}
            convertDateTime={convertDateTime}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
