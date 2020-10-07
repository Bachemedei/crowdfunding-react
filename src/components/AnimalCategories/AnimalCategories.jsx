import React, { useState } from "react"
import AnimalSelect from "../AnimalSelect/AnimalSelect"
import "./AnimalCategories.css"
import { animalLogos } from "../../images"
import ValidationError from "../ValidationError/ValidationError"

function AnimalCategories({ label, error, onAnimalClick, initState }) {
  const allAnimals = Object.keys(animalLogos)

  // This triggers when an animal logo is clicked and adds or removes that animal to the petlike value of state
  // const onAnimalClick = (animal) => {
  // if (selected) {
  //   setAnimals((animals) => ({
  //     ...animals,
  //     species: [...animals.species, animal],
  //   }))
  // }
  // if (!selected) {
  //   setAnimals((animalsData) => ({
  //     ...animalsData,
  //     species: animalsData.species.filter((critter) => critter !== animal),
  //   }))
  // }
  // }

  return (
    <div className="animal-categories">
      <p>{label}:</p>
      <div className="animals">
        {allAnimals.map((animal, index) => (
          <AnimalSelect
            key={index}
            animal={animal}
            onAnimalClick={onAnimalClick}
            initState={initState.find((initAnimal) => initAnimal === animal)}
          />
        ))}
      </div>
      <ValidationError error={error} />
    </div>
  )
}

export default AnimalCategories
