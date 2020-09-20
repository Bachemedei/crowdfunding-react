import React from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { oneProject } from "../../data";
import "./ProjectPage.css";

function ProjectPage({ convertDateTime }) {
  // Template
  return (
    <div className="project-detail">
      <div className="project-summary">
        <img
          className="project-img"
          src={oneProject.image}
          alt={oneProject.title}
        />
        <div className="project-info">
          <p>{oneProject.title}</p>
          <p>{oneProject.shelter}</p>
          <p>{`Status: ${oneProject.is_open}`}</p>
          <ProgressBar data={oneProject}/>
        </div>
      </div>
      <div>
        <p>Date Opened: {convertDateTime(oneProject.date_created)}</p>
        <p>{oneProject.species}</p>
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
