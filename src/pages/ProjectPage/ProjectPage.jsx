import React from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { oneProject } from "../../data";
import "./ProjectPage.css";

function ProjectPage() {
  // Variables & State
  const pledges = oneProject.pledges;

  // Helpers
  const amountFunded = (pledges) => {
    // Iterate through pledges array, add the amount of each pledge to total
    return pledges.reduce((total, current) => {
      total = total + current.amount;
      return total;
    }, 0);
  };

  const amountRemaining = (oneProject, pledges) => {
    return oneProject.goal - amountFunded(pledges);
  };

  // Methods

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
          <h2>{oneProject.title}</h2>
          <h2>{oneProject.shelter}</h2>
          <h3>{`Status: ${oneProject.is_open}`}</h3>
          <h3>Funding Goal: {oneProject.goal}</h3>
          <ProgressBar amountRemaining={amountRemaining(oneProject, pledges)}/>
          <h3>Progress: {amountRemaining(oneProject, pledges)}</h3>
        </div>
      </div>
      <div>
        <h3>Created at: {oneProject.date_created}</h3>
        <h3>{oneProject.species}</h3>
        <h3>Description: {oneProject.description}</h3>
        <h3>Pledges:</h3>
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
