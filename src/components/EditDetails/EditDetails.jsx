import React from "react"
import Button from "../Button/Button"
import "./EditDetails.css"

function EditDetails({ contentOwner, ...props }) {
  const userID = window.localStorage.getItem("userID")
  console.log("contentOwner", contentOwner)
  console.log("userID", userID)

  if (`${contentOwner}` === userID) {
    return (
      <div className="edit-button">
        <Button value="Edit" type="button" {...props} />
      </div>
    )
  }
  return null
}

export default EditDetails
