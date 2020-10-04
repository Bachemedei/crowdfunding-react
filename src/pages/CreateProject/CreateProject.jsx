import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import AnimalCategories from "../../components/AnimalCategories/AnimalCategories"
import Button from "../../components/Button/Button"
import TextArea from "../../components/TextAreaInput/TextArea"
import TextInput from "../../components/TextInput/TextInput"
import TitleText from "../../components/TitleText/TitleText"
import ToggleButton from "../../components/ToggleButton/ToggleButton"
import "./CreateProject.css"

function CreateProject() {
  // Variables
  const date = new Date()
  const history = useHistory()
  const token = window.localStorage.getItem("token")
  const [project, setProject] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    is_open: "",
    date_created: date.toISOString(),
    species: [],
  })

  const [errorMessages, setErrors] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    is_open: "",
    date_created: "",
    species: "",
  })

  // Methods
  // Check input to check if it matches requirements and set error state
  const validateInput = () => {
    let errors = { ...errorMessages }

    errors.title = project.title.length < 2 ? "Enter a title" : ""

    errors.description =
      project.description.length < 5 ? "Enter a longer description" : ""

    errors.goal = project.goal.length < 1 ? "Enter a financial goal" : ""

    errors.image = project.image.length < 8 ? "Enter a valid image URL" : ""

    errors.is_open =
      project.is_open.length < 4
        ? "Select if the project is open or closed"
        : ""

    errors.date_created =
      project.date_created.length < 1 ? "Enter starting date" : ""

    errors.species =
      project.species.length < 1 ? "Select an animal species" : ""

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

  const handleChange = (e) => {
    const { id, value } = e.target
    setProject((projectDetails) => ({
      ...projectDetails,
      [id]: value,
    }))
  }

  // This triggers when an animal logo is clicked and adds or removes that animal to the petlike value of state
  const onAnimalClick = (animal, selected) => {
    if (selected) {
      setProject((project) => ({
        ...project,
        species: [...project.species, animal],
      }))
    }
    if (!selected) {
      setProject((project) => ({
        ...project,
        species: project.species.filter((critter) => critter !== animal),
      }))
    }
  }

  const onButtonClick = (activeButton) => {
    setProject((project) => ({
      ...project,
      is_open: activeButton,
    }))
  }

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(project),
    })
    return response.json()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm(errorMessages)) {
      postData().then((response) => {
        console.log(response)
        history.push("/login")
      })
    } else {
      console.log("invalid form")
    }
  }

  return (
    <div className="submit-project-form">
      <TitleText title="Create A Project" />
      <ToggleButton
        valueOne="Active"
        valueTwo="Inactive"
        label="Project Status"
        onButtonClick={onButtonClick}
      />
      <TextInput
        id="title"
        type="text"
        label="Project Title"
        placeholder="Give your project an attention grabbing name!"
        onChange={handleChange}
        error={errorMessages.title}
      />
      <TextArea
        id="description"
        type="text"
        label="Project Summary"
        placeholder="Tell us what this project is all about"
        error={errorMessages.description}
        onChange={handleChange}
      />
      <TextInput
        id="goal"
        type="text"
        label="Funding Goal"
        placeholder="$500"
        onChange={handleChange}
        error={errorMessages.goal}
      />
      <TextInput
        id="image"
        type="url"
        label="Image URL"
        placeholder="Enter a URL to your most eye catching photo"
        onChange={handleChange}
        error={errorMessages.image}
      />
      {/* <TextInput
        id="is_open"
        type="text"
        label="Project Status"
        onChange={handleChange}
        error={errorMessages.is_open}
      /> */}

      <TextInput
        id="date_created"
        type="text"
        label="Date Created"
        onChange={handleChange}
        error={errorMessages.date_created}
      />
      <AnimalCategories
        label="Select Animal Species"
        onAnimalClick={onAnimalClick}
        error={errorMessages.species}
      />
      <Button value="Create Project" onClick={handleSubmit} type="submit" />
    </div>
  )
}

export default CreateProject
