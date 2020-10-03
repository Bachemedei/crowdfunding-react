import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import AnimalCategories from "../../components/AnimalCategories/AnimalCategories"
import Button from "../../components/Button/Button"
import TextArea from "../../components/TextAreaInput/TextArea"
import TextInput from "../../components/TextInput/TextInput"
import TitleText from "../../components/TitleText/TitleText"
import "./CreateProject.css"

function CreateProject() {
  // Variables
  const [project, setProject] = useState({
    title: "",
    description: "",
    goal: undefined,
    image: "",
    is_open: "",
    date_created: "",
    species: [],
  })
  const history = useHistory()
  const token = window.localStorage.getItem("token")

  // Methods
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
    if (
      project.title &&
      project.description &&
      project.goal &&
      project.image &&
      project.is_open &&
      project.date_created &&
      project.species
    ) {
      postData().then((response) => {
        history.push("/")
      })
    }
  }

  return (
    <div className="submit-project-form">
      <TitleText title="Create A Project" />
      <TextInput
        id="title"
        type="text"
        label="Project Title"
        onChange={handleChange}
      />
      <TextArea
        id="description"
        type="text"
        label="Project Summary"
        onChange={handleChange}
      />
      <TextInput
        id="goal"
        type="text"
        label="Funding Goal"
        onChange={handleChange}
      />
      <TextInput
        id="image"
        type="url"
        label="Image URL"
        onChange={handleChange}
      />
      <TextInput
        id="is_open"
        type="text"
        label="Project Status"
        onChange={handleChange}
      />
      <TextInput
        id="date_created"
        type="text"
        label="Date Created"
        onChange={handleChange}
      />
      <AnimalCategories
        label="Select Animal Species"
        onAnimalClick={onAnimalClick}
      />
      <Button value="Create Project" onClick={handleSubmit} type="submit" />
    </div>
  )
}

export default CreateProject
