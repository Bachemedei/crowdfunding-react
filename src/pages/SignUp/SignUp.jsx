import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import TitleText from "../../components/TitleText/TitleText";
import AnimalCategories from "../../components/AnimalCategories/AnimalCategories";
import "./SignUp.css";
import TextArea from "../../components/TextAreaInput/TextArea";

function SignUp() {
  // Variables
  const [userDetails, setUserDetails] = useState({
    preferredname: "",
    email: "",
    petlikes: [],
    bio: "",
    profile_pic: "",
    password: "",
  });
  const history = useHistory();

  // Methods

  // This will trigger when any form field changes and will set the state
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }));
  };

  // This triggers when an animal logo is clicked and adds or removes that animal to the petlike value of state
  const onAnimalClick = (animal, selected) => {
    if (selected) {
      setUserDetails((userDetails) => ({
        ...userDetails,
        petlikes: [...userDetails.petlikes, animal],
      }));
    }
    if (!selected) {
      setUserDetails((userDetails) => ({
        ...userDetails,
        petlikes: userDetails.petlikes.filter((critter) => critter !== animal),
      }));
    }
  };

  const postData = async () => {
    console.log("post data function");
    const response = await fetch(`${process.env.REACT_APP_API_URL}users/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    console.log(userDetails);
    e.preventDefault();
    if (
      userDetails.preferredname &&
      userDetails.email &&
      userDetails.petlikes &&
      userDetails.bio &&
      userDetails.profile_pic &&
      userDetails.password
    ) {
      postData().then((response) => {
        console.log(response);
        history.push("/login");
      });
    }
  };

  const handleKeyPress = (e) => {
    // triggers if enter key is pressed
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="signup-form">
      <TitleText title="Sign Up" />
      <TextInput
        id="preferredname"
        type="text"
        label="Given Name"
        onChange={handleChange}
      />
      <TextInput
        id="email"
        type="email"
        label="Email Address"
        onChange={handleChange}
      />
      <AnimalCategories
        id="petlikes"
        label="Select Your Favourite Animals"
        onChange={handleChange}
        onAnimalClick={onAnimalClick}
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
        onChange={handleChange}
      />
      <TextInput
        id="password"
        type="password"
        label="Password"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button value="Sign Up" onClick={handleSubmit} type="submit" />
    </div>
  );
}

export default SignUp;
