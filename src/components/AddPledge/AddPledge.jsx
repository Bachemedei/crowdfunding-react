import React, { useEffect, useState } from "react"
import TextInput from "../TextInput/TextInput"
import TextArea from "../TextAreaInput/TextArea"
import Button from "../Button/Button"
import ToggleButton from "../ToggleButton/ToggleButton"
import "./AddPledge.css"

function AddPledge({ projectId }) {
  const user = window.localStorage.getItem("userID")
  const token = window.localStorage.getItem("token")
  const [pledge, setPledge] = useState({
    amount: "",
    comment: "",
    anonymous: false,
    supporter: user,
    project_id: projectId,
  })
  const [errorMessages, setErrors] = useState({
    amount: "",
    comment: "",
  })

  const validAmountRegex = RegExp(/[0-9]{1,}/)

  const validateInput = () => {
    let errors = { ...errorMessages }

    errors.amount = validAmountRegex.test(pledge.amount)
      ? ""
      : "Enter an amount valid whole number amount"

    errors.comment = pledge.comment.length < 1 ? "Please enter a comment" : ""

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
    setPledge((newPledge) => ({
      ...newPledge,
      [id]: value,
    }))
  }

  useEffect(() => {
    const match = validAmountRegex.exec(pledge.amount)
    if (match) pledge.amount = match[0]
  }, [pledge.amount, validAmountRegex])

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(pledge),
    })
    return response.json()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm(errorMessages)) {
      postData().then((response) => {
        window.location.reload()
      })
    }
  }

  const onButtonClick = (activeButton) => {
    setPledge((pledge) => ({
      ...pledge,
      anonymous: activeButton,
    }))
  }

  return (
    <div className="pledge-form">
      <TextInput
        id="amount"
        type="text"
        label="Amount"
        placeholder="$100"
        onChange={handleChange}
        error={errorMessages.amount}
      />
      <TextArea
        id="comment"
        type="text"
        label="Add a comment"
        placeholder="Wow that dog is so cool"
        onChange={handleChange}
        error={errorMessages.comment}
      />
      <ToggleButton
        valueOne="Yes please!"
        valueTwo="Nah, I'm good"
        label="Send pledge anonymously?"
        onButtonClick={onButtonClick}
      />
      <Button value="Send Support!" onClick={handleSubmit} type="button" />
    </div>
  )
}

export default AddPledge
