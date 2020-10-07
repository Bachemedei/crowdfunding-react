import React from "react"
import Button from "../Button/Button"
import "./DeleteButton.css"

function DeleteButton({ contentOwner, ...props }) {
  const userID = window.localStorage.getItem("userID")

  if (`${contentOwner}` === userID) {
    return (
      <div className="delete-button">
        <Button value="Delete" type="button" {...props} />
      </div>
    )
  }
  return null
}

export default DeleteButton
