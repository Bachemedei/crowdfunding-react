import React from 'react'
import AnimalCategories from '../../components/AnimalCategories/AnimalCategories'
import Button from '../../components/Button/Button'
import SelectAnimals from '../../components/SelectAnimals/SelectAnimals'
import SelectInput from '../../components/SelectInput/SelectInput'
import TextArea from '../../components/TextAreaInput/TextArea'
import TextInput from '../../components/TextInput/TextInput'
import TitleText from '../../components/TitleText/TitleText'
import './RegisterShelter.css'

function RegisterShelter() {
    return (
        <div className="register-shelter-form">
            <TitleText title="Register a Shelter" />
            <TextInput type="text" label="Shelter Name" />
            <TextInput type="text" label="Shelter Address" />
            <TextInput type="text" label="Australian Charity Register Number" />
            <AnimalCategories />
            <TextArea label="Shelter Bio" />
            <Button value="Register" />
        </div>
    )
}

export default RegisterShelter
