import React from "react";
import "./AnimalLogo.css";
import { animalLogos } from "../../images";

function AnimalLogo({ species }) {
  const src = animalLogos[species];
  console.log(src, "burrito")
  return (
    <div className="animal-logo-ctn">
      <img className="animal-logo" src={src} alt={species} />
      <p className="animal-label">{species}</p>
    </div>
  );
}

export default AnimalLogo;
