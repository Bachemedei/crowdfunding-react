import React from "react";
import AnimalLogo from "../../components/AnimalLogo/AnimalLogo";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import ProjectStatus from "../../components/ProjectStatus/ProjectStatus";
import TitleText from "../../components/TitleText/TitleText";
import { oneProject } from "../../data";
import "./ProjectPage.css";

function ProjectPage({ convertDateTime }) {
  // Template
  return (
    <div className="project-detail">
      <TitleText title={oneProject.title} />
      <div className="project-summary">
        <img
          className="project-img"
          src={oneProject.image}
          alt={oneProject.title}
        />
        <div className="project-info">
          <p>{oneProject.shelter}</p>
          <AnimalLogo species={oneProject.species[0]} />
          <ProjectStatus
            opened={oneProject.is_open}
            date={convertDateTime(oneProject.date_created)}
          />
          <ProgressBar data={oneProject} />
        </div>
      </div>
      <div>
        <p>Description: {oneProject.description}</p>
        <p>Pledges:</p>
        <ul>
          {oneProject.pledges.map((pledgeData, key) => {
            return (
              <li>
                ${pledgeData.amount} from {pledgeData.supporter}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectPage;
