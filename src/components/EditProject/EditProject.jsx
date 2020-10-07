import React, { useState } from "react"
import AnimalCategories from "../../components/AnimalCategories/AnimalCategories"
import Button from "../../components/Button/Button"
import TextArea from "../../components/TextAreaInput/TextArea"
import TextInput from "../../components/TextInput/TextInput"
import TitleText from "../../components/TitleText/TitleText"
import "./EditProject.css"

function EditProject({ projectData }) {
  const token = window.localStorage.getItem("token")
  const [updatedProject, setUpdatedProject] = useState({
    species: projectData.species,
  })

  // Methods
  const handleChange = (e) => {
    const { id, value } = e.target
    setUpdatedProject((projectDetails) => ({
      ...projectDetails,
      [id]: value,
    }))
  }

  // This triggers when an animal logo is clicked and adds or removes that animal to the petlike value of state
  const onAnimalClick = (animal, selected) => {
    if (selected) {
      setUpdatedProject((updatedProject) => ({
        ...updatedProject,
        species: [...updatedProject.species, animal],
      }))
    }
    if (!selected) {
      setUpdatedProject((updatedProjectData) => ({
        ...updatedProjectData,
        species: updatedProjectData.species.filter(
          (critter) => critter !== animal
        ),
      }))
    }
  }

  const putData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${projectData.id}/`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(updatedProject),
      }
    )
    return response.json()
  }
  const handleSubmit = (e) => {
    console.log(updatedProject)
    e.preventDefault()
    putData().then((response) => {
      console.log(response)
      window.location.reload()
    })
  }

  return (
    <div className="edit-project-form">
      <TitleText title="Edit Project" />
      <TextInput
        id="title"
        type="text"
        label="Project Title"
        onChange={handleChange}
        value={projectData.title}
      />
      <TextArea
        id="description"
        type="text"
        label="Project Summary"
        onChange={handleChange}
        value={projectData.description}
      />
      <TextInput
        id="goal"
        type="text"
        label="Funding Goal"
        onChange={handleChange}
        value={projectData.goal}
      />
      <TextInput
        id="image"
        type="url"
        label="Image URL"
        onChange={handleChange}
        value={projectData.image}
      />
      <TextInput
        id="is_open"
        type="text"
        label="Project Status"
        onChange={handleChange}
        value={projectData.is_open}
      />
      <TextInput
        id="date_created"
        type="text"
        label="Date Created"
        onChange={handleChange}
        value={projectData.date_created}
      />
      <AnimalCategories
        label="Select Animal Species"
        onAnimalClick={onAnimalClick}
        initState={projectData.species}
      />
      <Button value="Edit Project" onClick={handleSubmit} type="submit" />
    </div>
  )
}

export default EditProject
