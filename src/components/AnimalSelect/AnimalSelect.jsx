import React, { useState } from "react"
import "./AnimalSelect.css"
import AnimalLogo from "../AnimalLogo/AnimalLogo"

function AnimalSelect({ animal, onAnimalClick, animals, initState }) {
  const [animalSelected, setAnimalSelected] = useState({
    selected: initState != null ? initState : false,
  })

  const handleClick = () => {
    const newSelected = { ...animalSelected }
    newSelected.selected = !newSelected.selected
    setAnimalSelected(newSelected)
    onAnimalClick(animal, newSelected.selected)
  }

  // console.log(animals)
  return (
    <button onClick={handleClick} className="invisible-btn">
      <AnimalLogo species={animal} selected={animalSelected.selected} />
    </button>
  )
}

export default AnimalSelect
