import React, { useState } from "react"
import TextInput from "../TextInput/TextInput"
import TextArea from "../TextAreaInput/TextArea"
import Button from "../Button/Button"
import ToggleButton from "../ToggleButton/ToggleButton"
import "./AddPledge.css"

function AddPledge({ projectId }) {
  const user = window.localStorage.getItem("userID")
  const token = window.localStorage.getItem("token")
  const [pledge, setPledge] = useState({
    amount: undefined,
    comment: "",
    anonymous: false,
    supporter: user,
    project_id: projectId,
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setPledge((newPledge) => ({
      ...newPledge,
      [id]: value,
    }))
  }

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
    if (pledge.amount && pledge.comment) {
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
      />
      <TextArea
        id="comment"
        type="text"
        label="Add a comment"
        placeholder="Wow that dog is so cool"
        onChange={handleChange}
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
