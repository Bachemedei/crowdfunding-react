import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import AnimalCategories from "../../components/AnimalCategories/AnimalCategories"
import Button from "../../components/Button/Button"
import TextArea from "../../components/TextAreaInput/TextArea"
import TextInput from "../../components/TextInput/TextInput"
import TitleText from "../../components/TitleText/TitleText"
import "./RegisterShelter.css"

function RegisterShelter() {
  // Variables
  const history = useHistory()
  const token = window.localStorage.getItem("token")
  const [shelterDetails, setShelterDetails] = useState({
    name: "",
    address: "",
    description: "",
    species: [],
    charityregister: "",
  })
  const [errorMessages, setErrors] = useState({
    name: "",
    address: "",
    description: "",
    species: [],
    charityregister: "",
  })

  // Methods

  // Check input to check if it matches requirements and set error state
  const validateInput = () => {
    let errors = { ...errorMessages }

    errors.name =
      shelterDetails.name.length < 5
        ? "Shelter name must be 5 characters or longer"
        : ""

    errors.address =
      shelterDetails.address.length < 5 ? "Enter a valid address!" : ""

    errors.description =
      shelterDetails.description.length < 10
        ? "Description must be 10 characters or longer!"
        : ""

    errors.charityregister =
      shelterDetails.charityregister.length !== 11
        ? "ACNC Charity Register ID must be 11 digits long!"
        : ""

    errors.species =
      shelterDetails.species.length < 1 ? "Select an animal species" : ""

    return errors
  }

  // Find an if an instance of an error message exists, and return either true or false
  const validateForm = () => {
    const errors = validateInput()
    const firstValidationError = Object.values(errors).find(
      (error) => error.length > 0
    )
    setErrors(errors)
    return firstValidationError === undefined
  }

  // Methods
  const handleChange = (e) => {
    const { id, value } = e.target
    setShelterDetails((prevShelterDetails) => ({
      ...prevShelterDetails,
      [id]: value,
    }))
  }

  // This triggers when an animal logo is clicked and adds or removes that animal to the petlike value of state
  const onAnimalClick = (animal, selected) => {
    if (selected) {
      setShelterDetails((shelterDetails) => ({
        ...shelterDetails,
        species: [...shelterDetails.species, animal],
      }))
    }
    if (!selected) {
      setShelterDetails((shelterDetails) => ({
        ...shelterDetails,
        species: shelterDetails.species.filter((critter) => critter !== animal),
      }))
    }
  }

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}shelters/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(shelterDetails),
    })
    return response.json()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm(errorMessages)) {
      postData().then((response) => {
        console.log(response)
        history.push("/")
      })
    } else {
      console.log("invalid form")
    }
  }

  const handleKeyPress = (e) => {
    // triggers if enter key is pressed
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }
  return (
    <div className="register-shelter-form">
      <TitleText title="Register A Shelter" />
      <TextInput
        id="name"
        type="text"
        label="Shelter Name"
        placeholder="Dogs R Us"
        onChange={handleChange}
        error={errorMessages.name}
      />
      <TextInput
        id="address"
        type="text"
        label="Shelter Address"
        placeholder="123 Canine St, Puppy Park WA"
        onChange={handleChange}
        error={errorMessages.address}
      />
      <TextInput
        id="charityregister"
        type="text"
        label="ACNC Charity Register ID"
        placeholder="11 Digit ACNC ID"
        onChange={handleChange}
        error={errorMessages.charityregister}
      />
      <AnimalCategories
        label="Select Animals You Rescue"
        onAnimalClick={onAnimalClick}
        error={errorMessages.species}
      />
      <TextArea
        id="description"
        type="text"
        label="Shelter Bio"
        placeholder="Tell us about your animal rescue..."
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        error={errorMessages.description}
      />
      <Button value="Register" onClick={handleSubmit} type="submit" />
    </div>
  )
}

export default RegisterShelter
