import React, { useState } from "react"
import AnimalCategories from "../../components/AnimalCategories/AnimalCategories"
import Button from "../../components/Button/Button"
import TextArea from "../../components/TextAreaInput/TextArea"
import TextInput from "../../components/TextInput/TextInput"
import "./EditShelter.css"

function EditShelter({ shelterData }) {
  // Variables
  const token = window.localStorage.getItem("token")
  const [updatedShelter, setUpdatedShelter] = useState({
    species: shelterData.species,
  })
  // const [errorMessages, setErrors] = useState({
  //   name: "",
  //   address: "",
  //   description: "",
  //   species: "",
  //   charityregister: "",
  // })

  // Methods
  // const validateInput = () => {
  //   let errors = { ...errorMessages }

  //   errors.name =
  //     updatedShelter.name.length < 5
  //       ? "Shelter name must be 5 characters or longer"
  //       : ""

  //   errors.address =
  //     updatedShelter.address.length < 5 ? "Enter a valid address!" : ""

  //   errors.description =
  //     updatedShelter.description.length < 10
  //       ? "Description must be 10 characters or longer!"
  //       : ""

  //   errors.charityregister =
  //     updatedShelter.charityregister.length !== 9
  //       ? "ACNC Charity Register ID must be 9 digits long!"
  //       : ""

  //   errors.species =
  //     updatedShelter.species.length < 1 ? "Select an animal species" : ""

  //   return errors
  // }

  // // Find an if an instance of an error message exists, and return either true or false
  // const validateForm = () => {
  //   const errors = validateInput()
  //   const firstValidationError = Object.values(errors).find(
  //     (error) => error.length > 0
  //   )
  //   setErrors(errors)
  //   return firstValidationError === undefined
  // }

  const handleChange = (e) => {
    const { id, value } = e.target
    setUpdatedShelter((updatedShelterDetails) => ({
      ...updatedShelterDetails,
      [id]: value,
    }))
  }

  // This triggers when an animal logo is clicked and adds or removes that animal to the petlike value of state
  const onAnimalClick = (animal, selected) => {
    if (selected) {
      setUpdatedShelter((updatedShelter) => ({
        ...updatedShelter,
        species: [...updatedShelter.species, animal],
      }))
    }
    if (!selected) {
      setUpdatedShelter((updatedShelterData) => ({
        ...updatedShelterData,
        species: updatedShelterData.species.filter(
          (critter) => critter !== animal
        ),
      }))
    }
  }

  const putData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}shelters/${shelterData.id}/`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(updatedShelter),
      }
    )
    return response.json()
  }

  // const handleSubmit = (e) => {
  //   console.log(updatedShelter)
  //   e.preventDefault()
  //   if (validateForm(errorMessages)) {
  //     putData().then((response) => {
  //       console.log(response)
  //     })
  //   } else {
  //     console.log("invalid form")
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    putData().then((response) => {
      window.location.reload()
    })
  }

  const handleKeyPress = (e) => {
    // triggers if enter key is pressed
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }

  return (
    <div className="register-shelter-form">
      <TextInput
        id="name"
        type="text"
        label="Shelter Name"
        value={shelterData.name}
        onChange={handleChange}
        // error={errorMessages.name}
      />
      <TextInput
        id="address"
        type="text"
        label="Shelter Address"
        value={shelterData.address}
        onChange={handleChange}
        // error={errorMessages.address}
      />
      <AnimalCategories
        label="Select Animals You Rescue"
        value={shelterData.species}
        onAnimalClick={onAnimalClick}
        initState={shelterData.petlikes}
        // error={errorMessages.species}
      />
      <TextArea
        id="description"
        type="text"
        label="Shelter Bio"
        placeholder="Tell us about your animal rescue..."
        value={shelterData.description}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        // error={errorMessages.description}
      />
      <Button value="Edit Details" onClick={handleSubmit} type="submit" />
    </div>
  )
}

export default EditShelter
