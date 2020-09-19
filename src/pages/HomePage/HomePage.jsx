import React from "react";
import { allProjects } from "../../data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function HomePage({ convertDateTime }) {
  return (
    <div>
      {allProjects.map((projectData, key) => {
        return (
          <ProjectCard
            key={key}
            projectData={projectData}
            convertDateTime={convertDateTime}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
