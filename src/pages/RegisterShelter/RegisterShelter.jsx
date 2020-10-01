import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AnimalCategories from "../../components/AnimalCategories/AnimalCategories";
import Button from "../../components/Button/Button";
import TextArea from "../../components/TextAreaInput/TextArea";
import TextInput from "../../components/TextInput/TextInput";
import TitleText from "../../components/TitleText/TitleText";
import "./RegisterShelter.css";

function RegisterShelter() {
  // Variables
  const [shelterDetails, setShelterDetails] = useState({
    name: "",
    address: "",
    description: "",
    species: [],
    charityregister: "",
  });
  const history = useHistory();
  const token = window.localStorage.getItem("token");

  // Methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    setShelterDetails((prevShelterDetails) => ({
      ...prevShelterDetails,
      [id]: value,
    }));
  };

  // This triggers when an animal logo is clicked and adds or removes that animal to the petlike value of state
  const onAnimalClick = (animal, selected) => {
    if (selected) {
      setShelterDetails((shelterDetails) => ({
        ...shelterDetails,
        species: [...shelterDetails.species, animal],
      }));
    }
    if (!selected) {
      setShelterDetails((shelterDetails) => ({
        ...shelterDetails,
        species: shelterDetails.species.filter((critter) => critter !== animal),
      }));
    }
  };

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}shelters/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(shelterDetails),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
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
      <AnimalCategories
        label="Select Animals You Rescue"
        onAnimalClick={onAnimalClick}
      />
      <TextArea
        id="description"
        type="text"
        label="Shelter Bio"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button value="Register" onClick={handleSubmit} />
    </div>
  );
}

export default RegisterShelter;
