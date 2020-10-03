import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimalLogo from "../../components/AnimalLogo/AnimalLogo";
import PledgesCard from "../../components/PledgesCard/PledgesCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import ProjectStatus from "../../components/ProjectStatus/ProjectStatus";
import TitleText from "../../components/TitleText/TitleText";
import useFullPageLoader from "../../hooks/useFullPageLoader";
import "./ProjectPage.css";

function ProjectPage({ convertDateTime }) {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();

  const [loader, showLoader, hideLoader] = useFullPageLoader();

  useEffect(() => {
    showLoader();
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
        hideLoader();
      });
  }, [id]);

  // Template
  if (projectData.species !== undefined) {
    return (
      <div className="project-detail" key={projectData.id}>
        <TitleText title={projectData.title} />
        <div className="project-summary">
          <div className="img-and-icon">
            <img
              className="project-img"
              src={projectData.image}
              alt={projectData.title}
            />
            <div className="project-animals">
              {projectData.species.map((species, index) => {
                return <AnimalLogo species={species} key={index} />;
              })}
            </div>
          </div>
          <div className="project-info">
            <h3>{projectData.shelter}</h3>
            <ProjectStatus
              opened={projectData.is_open}
              date={convertDateTime(projectData.date_created)}
            />
            <ProgressBar data={projectData} className="progress-bar" />
          </div>
        </div>
        <div className="project-body">
          <p>{projectData.description}</p>
          <PledgesCard pledges={projectData.pledges} />
        </div>
      </div>
    );
  }
  return <>{loader}</>;
}

export default ProjectPage;
