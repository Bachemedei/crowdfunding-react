import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LogIn.css";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import TitleText from "../../components/TitleText/TitleText";

function LogIn() {
  // Variables
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  // Methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("userID", response.user_id);
        window.localStorage.setItem("is_owner", response.is_owner);
        if (response.token != null) {
          history.push("/");
        }
      });
    }
  };

  const handleKeyPress = (e) => {
    // triggers if enter key is pressed
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  // Template
  return (
    <div className="login-form">
      <TitleText title="Log In" />
      <TextInput
        id="username"
        type="email"
        label="Email"
        placeholder="email@email.com"
        onChange={handleChange}
      />
      <TextInput
        id="password"
        type="password"
        label="Password"
        placeholder="password"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button value="Log in" onClick={handleSubmit} type="submit" />
    </div>
  );
}

export default LogIn;
