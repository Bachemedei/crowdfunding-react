import React, { useState } from "react"
import Modal from "react-modal"
import { useHistory, useParams } from "react-router-dom"
import Button from "../Button/Button"
import DeleteButton from "../DeleteButton/DeleteButton"
import "./DeleteProject.css"

function DeleteProject({ contentOwner }) {
  const token = window.localStorage.getItem("token")
  const history = useHistory()
  const { id } = useParams()
  const [modalIsOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      width: "50%",
      top: "100%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(50%, 100%)",
    },
  }

  Modal.setAppElement("#root")

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleDeleteClick = () => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((results) => {
        history.push("/")
        return results.text()
      })
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <div className="delete-project">
      <DeleteButton onClick={openModal} contentOwner={contentOwner} />
      <Modal
        className="delete-modal"
        style={customStyles}
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
      >
        <h2>Are you sure you want to delete this project?</h2>
        <div className="modal-btns">
          <Button onClick={handleDeleteClick} value="Delete" type="button" />
          <Button onClick={closeModal} value="Cancel" type="button" />
        </div>
      </Modal>
    </div>
  )
}

export default DeleteProject
