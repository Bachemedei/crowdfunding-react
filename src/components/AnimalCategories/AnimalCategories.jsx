import React, { useState } from "react";
import AnimalSelect from "../AnimalSelect/AnimalSelect";
import "./AnimalCategories.css";
import { animalLogos } from "../../images";

function AnimalCategories({ label }) {
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const animals = Object.keys(animalLogos);

  const onAnimalClick = (animal, selected) => {
    if (selected) {
      setSelectedAnimals([...selectedAnimals, animal]);
    }
    if (!selected) {
      setSelectedAnimals(
        selectedAnimals.filter((critter) => critter !== animal)
      );
    }
  };

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
