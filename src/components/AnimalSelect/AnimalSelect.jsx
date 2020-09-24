import React, { useState } from "react";
import "./AnimalSelect.css";
import AnimalLogo from "../AnimalLogo/AnimalLogo";

function AnimalSelect({ animal, onAnimalClick }) {
  const [animalSelected, setAnimalSelected] = useState({ selected: false });

  const handleClick = () => {
    const newSelected = { ...animalSelected };
    newSelected.selected = !newSelected.selected;
    setAnimalSelected(newSelected);
    onAnimalClick(animal, newSelected.selected);
  };

  return (
    <button onClick={handleClick} className="invisible-btn">
      <AnimalLogo species={animal} selected={animalSelected.selected} />
    </button>
  );
}

export default AnimalSelect;
