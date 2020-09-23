import React, { useEffect } from "react";
import "./AnimalLogo.css";
import { animalLogos } from "../../images";

function AnimalLogo({ species, selected }) {
  const src = animalLogos[species];

  return (
    <div className="animal-logo-ctn">
      <img src={src} alt={species} className={`animal-logo${selected ? " selected" : ""}`} />
      <p className="animal-label">{species}</p>
    </div>
  );
}

export default AnimalLogo;
