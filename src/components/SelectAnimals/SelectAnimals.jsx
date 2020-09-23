import React from "react";
import "./SelectAnimals.css";
import { animalLogos } from "../../images";

function SelectAnimals() {
  const animals = Object.keys(animalLogos);

  return (
    <div className="animals">
      {console.log(animals)}
      {animals.map((animal, index) => (
        <button>
          <img className="animal" src={animalLogos[animal]} alt={animal} />
          <p className="label">{animal}</p>
        </button>
      ))}
    </div>
  );
}

export default SelectAnimals;
