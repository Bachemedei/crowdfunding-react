import React from "react"
import AnimalLogo from "../../components/AnimalLogo/AnimalLogo"
import EditButton from "../../components/EditButton/EditButton"
import "./UserDetails.css"

function UserDetails({ userProfile, ...props }) {
  if (userProfile.petlikes !== undefined) {
    return (
      <div className="profile-details">
        <div className="profile-left">
          <img
            className="profile-pic"
            src={userProfile.profile_pic}
            alt="profile-pic"
          />
          <div className="profile-pets">
            <h3>Favourite Pets: </h3>
            <div className="pet-likes">
              {userProfile.petlikes.map((animal, index) => (
                <AnimalLogo species={animal} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="profile-right">
          <div className="name-and-button">
            <div className="profile-name">
              <h3>Name: </h3>
              <p>{userProfile.preferredname}</p>
            </div>
            <EditButton contentOwner={userProfile.id} {...props} />
          </div>
          <div className="profile-email">
            <h3>Email Address: </h3>
            <p>{userProfile.email}</p>
          </div>

          <div className="profile-bio">
            <h3>Biography: </h3>
            <p>{userProfile.bio}</p>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export default UserDetails
