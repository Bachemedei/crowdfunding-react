import React from "react"
import EditButton from "../EditButton/EditButton"
import AnimalLogo from "../AnimalLogo/AnimalLogo"
import "./ShelterDetails.css"

function ShelterDetails({ shelterDetails, ...props }) {
  console.log(shelterDetails)
  return (
    <div className="shelter-details">
      <div className="edit-btn">
        <h3>Animals at {shelterDetails.name}: </h3>
        <EditButton contentOwner={shelterDetails.owner_id} {...props} />
      </div>
      <div className="shelter-pets">
        <div className="pet-likes">
          {shelterDetails.species.map((animal, index) => (
            <AnimalLogo species={animal} key={index} />
          ))}
        </div>
      </div>
      <div className="shelter-right">
        <div className="shelter-address">
          <h3>Address: </h3>
          <p>{shelterDetails.address}</p>
        </div>

        <div className="shelter-bio">
          <h3>About {shelterDetails.name}: </h3>
          <p>{shelterDetails.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ShelterDetails
