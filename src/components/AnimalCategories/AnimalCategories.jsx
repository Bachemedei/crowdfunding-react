import React from "react";
import AnimalSelect from "../AnimalSelect/AnimalSelect";
import "./AnimalCategories.css";
import { animalLogos } from "../../images";

function AnimalCategories({ label, onAnimalClick }) {
  const animals = Object.keys(animalLogos);

  return (
    <div className="animal-categories">
      <p>{label}:</p>
      <div className="animals">
        {animals.map((animal, index) => (
          <AnimalSelect
            key={index}
            animal={animal}
            onAnimalClick={onAnimalClick}
          />
        ))}
      </div>
    </div>
  );
}

export default AnimalCategories;
