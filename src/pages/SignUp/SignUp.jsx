import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import AnimalCategories from "../../components/AnimalCategories/AnimalCategories"
import Button from "../../components/Button/Button"
import TextArea from "../../components/TextAreaInput/TextArea"
import TextInput from "../../components/TextInput/TextInput"
import TitleText from "../../components/TitleText/TitleText"
import "./SignUp.css"

function SignUp() {
  // Variables
  const history = useHistory()
  const [userDetails, setUserDetails] = useState({
    preferredname: "",
    email: "",
    petlikes: [],
    bio: "",
    profile_pic:
      "https://image.freepik.com/free-vector/cat-paw-footprint_71328-557.jpg",
    password: "",
  })

  const [errorMessages, setErrors] = useState({
    preferredname: "",
    email: "",
    password: "",
    petlikes: [],
  })

  // Methods
  // This will check if the email address entered is a valid address
  const validEmailRegex = RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  )

  // Check input to check if it matches requirements and set error state
  const validateInput = () => {
    let errors = { ...errorMessages }

    errors.preferredname =
      userDetails.preferredname.length < 2
        ? "Given name must be 2 characters or longer!"
        : ""

    errors.email = validEmailRegex.test(userDetails.email)
      ? ""
      : "Enter a valid email address!"

    errors.password =
      userDetails.password.length < 8
        ? "Password must be 8 characters or longer"
        : ""

    errors.petlikes =
      userDetails.petlikes.length < 1
        ? "Select at least one favourite animal!"
        : ""

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

  // This will trigger when any form field changes and will set the state
  const handleChange = (e) => {
    const { id, value } = e.target

    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }))
  }

  // This triggers when an animal logo is clicked and adds or removes that animal to the petlike value of state
  const onAnimalClick = (animal, selected) => {
    if (selected) {
      setUserDetails((userDetails) => ({
        ...userDetails,
        petlikes: [...userDetails.petlikes, animal],
      }))
    }
    if (!selected) {
      setUserDetails((userDetails) => ({
        ...userDetails,
        petlikes: userDetails.petlikes.filter((critter) => critter !== animal),
      }))
    }
  }

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}users/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
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

  const handleKeyPress = (e) => {
    // triggers if enter key is pressed
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }

  return (
    <div className="signup-form">
      <TitleText title="Sign Up" />
      <TextInput
        id="preferredname"
        type="text"
        label="Given Name"
        placeholder="Buddy"
        onChange={handleChange}
        error={errorMessages.preferredname}
      />
      <TextInput
        id="email"
        type="email"
        label="Email Address"
        placeholder="buddy@goodboy.com"
        onChange={handleChange}
        error={errorMessages.email}
      />
      <AnimalCategories
        id="petlikes"
        label="Select Your Favourite Animals"
        onChange={handleChange}
        onAnimalClick={onAnimalClick}
        error={errorMessages.petlikes}
        initState={[]}
      />
      <TextArea
        id="bio"
        type="text"
        label="Biography"
        placeholder="Tell us something about you..."
        onChange={handleChange}
      />
      <TextInput
        id="profile_pic"
        type="url"
        label="Profile Picture"
        placeholder="Add a URL to your best glamour shot"
        onChange={handleChange}
      />
      <TextInput
        id="password"
        type="password"
        label="Password"
        placeholder="xxxxxxxx"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        error={errorMessages.password}
      />
      <Button value="Sign Up" onClick={handleSubmit} type="submit" />
    </div>
  )
}

export default SignUp
