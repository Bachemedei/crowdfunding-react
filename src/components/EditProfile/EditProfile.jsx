import React, { useState } from "react"
import AnimalCategories from "../../components/AnimalCategories/AnimalCategories"
import Button from "../../components/Button/Button"
import TextArea from "../../components/TextAreaInput/TextArea"
import TextInput from "../../components/TextInput/TextInput"
import "./EditProfile.css"

function EditProfile({ userProfile }) {
  const token = window.localStorage.getItem("token")
  const [updatedUserDetails, setUpdatedUser] = useState({
    petlikes: userProfile.petlikes,
  })
  const handleChange = (e) => {
    const { id, value } = e.target
    setUpdatedUser((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }))
  }
  const onAnimalClick = (animal, selected) => {
    if (selected) {
      setUpdatedUser((updatedUserDetails) => ({
        ...updatedUserDetails,
        petlikes: [...updatedUserDetails.petlikes, animal],
      }))
    }
    if (!selected) {
      setUpdatedUser((updatedUserDetails) => ({
        ...updatedUserDetails,
        petlikes: updatedUserDetails.petlikes.filter(
          (critter) => critter !== animal
        ),
      }))
    }
  }
  const putData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}users/${userProfile.id}/`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(updatedUserDetails),
      }
    )
    return response.json()
  }
  const handleSubmit = (e) => {
    console.log(updatedUserDetails)
    e.preventDefault()
    putData().then((response) => {
      console.log(response)
      window.location.reload()
    })
  }
  return (
    <div className="update-user-form">
      <TextInput
        id="preferredname"
        type="text"
        label="Given Name"
        value={userProfile.preferredname}
        onChange={handleChange}
      />
      <TextInput
        id="email"
        type="email"
        label="Email Address"
        value={userProfile.email}
        onChange={handleChange}
      />
      <AnimalCategories
        id="petlikes"
        label="Select Your Favourite Animals"
        onChange={handleChange}
        onAnimalClick={onAnimalClick}
      />
      <TextArea
        id="bio"
        type="text"
        label="Biography"
        value={userProfile.bio}
        onChange={handleChange}
      />
      <TextInput
        id="profile_pic"
        type="url"
        label="Profile Picture"
        value={userProfile.profile_pic}
        onChange={handleChange}
      />
      <Button value="Update Details" onClick={handleSubmit} type="submit" />
    </div>
  )
}

export default EditProfile
