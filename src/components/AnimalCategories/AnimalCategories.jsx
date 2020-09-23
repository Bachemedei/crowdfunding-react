import React, { useState } from 'react'
import SelectAnimals from '../SelectAnimals/SelectAnimals';
import "./AnimalCategories.css"
import { animalLogos } from "../../images";

function AnimalCategories() {
    const [selectedAnimals, setSelectedAnimals] = useState([])
    const animals = Object.keys(animalLogos);

    const onAnimalClick = (animal, selected) => {
        if(selected){
            setSelectedAnimals([...selectedAnimals, animal])
        }
        if(!selected){
            setSelectedAnimals(selectedAnimals.filter(critter => critter !== animal))
        }
        
    }

    return (
        <div className="animals">
            {animals.map((animal, index) => (
                <SelectAnimals animal={animal} onAnimalClick={onAnimalClick} />
                ))}
        </div>
    )
}

export default AnimalCategories
