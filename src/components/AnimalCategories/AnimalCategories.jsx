import React from "react"
import AnimalSelect from "../AnimalSelect/AnimalSelect"
import "./AnimalCategories.css"
import { animalLogos } from "../../images"
import ValidationError from "../ValidationError/ValidationError"

function AnimalCategories({ label, onAnimalClick, error }) {
  const animals = Object.keys(animalLogos)

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
      <ValidationError error={error} />
    </div>
  )
}

export default AnimalCategories
