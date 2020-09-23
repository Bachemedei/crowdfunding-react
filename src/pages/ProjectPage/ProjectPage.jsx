import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimalLogo from "../../components/AnimalLogo/AnimalLogo";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import ProjectStatus from "../../components/ProjectStatus/ProjectStatus";
import TitleText from "../../components/TitleText/TitleText";
import "./ProjectPage.css";

function ProjectPage({ convertDateTime }) {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, [id]);

  // Template
  return (
    <div className="project-detail" key={projectData.id}>
      <TitleText title={projectData.title} />
      <div className="project-summary">
        <img
          className="project-img"
          src={projectData.image}
          alt={projectData.title}
        />
        <div className="project-info">
          <p>{projectData.shelter}</p>
          <AnimalLogo species={projectData.species} />
          <ProjectStatus
            opened={projectData.is_open}
            date={convertDateTime(projectData.date_created)}
          />
          <ProgressBar data={projectData} />
        </div>
      </div>
      <div>
        <p>Description: {projectData.description}</p>
        <p>Pledges:</p>
        <ul>
          {projectData.pledges.map((pledgeData, key) => {
            return (
              <li key={key}>
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
