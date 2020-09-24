import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserProfile.css";
import TitleText from "../../components/TitleText/TitleText";
import useFullPageLoader from "../../hooks/useFullPageLoader";
import AnimalLogo from "../../components/AnimalLogo/AnimalLogo";

function UserProfile() {
  const [userProfile, setUserProfile] = useState({});
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const { id } = useParams();

  useEffect(() => {
    showLoader();
    fetch(`${process.env.REACT_APP_API_URL}users/1/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserProfile(data);
        hideLoader();
      });
  }, [id]);
  //   console.log(userProfile)

  if (userProfile.petlikes !== undefined) {
    return (
      <div>
        <TitleText title="Profile" />
        <div className="profile-top">
          <img
            className="profile-pic"
            src={userProfile.profile_pic}
            alt="profile-pic"
          />
          <div className="profile-ctn">
            <div className="profile name">
              <h3>Name: </h3>
              <p>{userProfile.preferredname}</p>
            </div>
            <div className="profile email">
              <h3>Email Address: </h3>
              <p>{userProfile.email}</p>
            </div>
            <div className="profile pets">
          <h3>Favourite Pets: </h3>
          <div className="pet-likes">
            {userProfile.petlikes.map((animal, index) => (
              <AnimalLogo species={animal} key={index} />
            ))}
          </div>
        </div>
          </div>
        </div>
        <div className="profile bio">
          <h3>Biography: </h3>
          <p>{userProfile.bio}</p>
        </div>
      </div>
    );
  }
  return <>{loader}</>;
}

export default UserProfile;
