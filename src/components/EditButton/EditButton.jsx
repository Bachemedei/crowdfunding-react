import React from "react"
import Button from "../Button/Button"
import "./EditButton.css"

function EditButton({ contentOwner, ...props }) {
  const userID = window.localStorage.getItem("userID")

  if (`${contentOwner}` === userID) {
    return (
      <div className="edit-button">
        <Button value="Edit" type="button" {...props} />
      </div>
    )
  }
  return null
}

export default EditButton
