import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AnimalCategories from "../../components/AnimalCategories/AnimalCategories";
import Button from "../../components/Button/Button";
// import TextArea from "../../components/TextAreaInput/TextArea";
import TextInput from "../../components/TextInput/TextInput";
import TitleText from "../../components/TitleText/TitleText";
import "./RegisterShelter.css";

function RegisterShelter() {
  // Variables
  const [shelterDetails, setShelterDetails] = useState({
    name: "",
    address: "",
    description: "",
    charityregister: "",
  });
  const history = useHistory();

  // Methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    setShelterDetails((prevShelterDetails) => ({
      ...prevShelterDetails,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}shelters/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shelterDetails),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    console.log(shelterDetails);
    e.preventDefault();
    if (
      shelterDetails.name &&
      shelterDetails.address &&
      shelterDetails.charityregister &&
      shelterDetails.description
    ) {
      postData().then((response) => {
        console.log(response);
        history.push("/");
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
    <div className="register-shelter-form">
      <TitleText title="Register A Shelter" />
      <TextInput
        id="name"
        type="text"
        label="Shelter Name"
        onChange={handleChange}
      />
      <TextInput
        id="address"
        type="text"
        label="Shelter Address"
        onChange={handleChange}
      />
      <TextInput
        id="charityregister"
        type="text"
        label="Australian Charity Register Number"
        onChange={handleChange}
      />
      <AnimalCategories label="Select Animals You Rescue" />
      <TextInput
        id="description"
        label="Shelter Bio"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button value="Register" onClick={handleSubmit} />
    </div>
  );
}

export default RegisterShelter;
