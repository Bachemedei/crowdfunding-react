import React from "react";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import "./SignUp.css";
import TitleText from "../../components/TitleText/TitleText";
import SelectInput from "../../components/SelectInput/SelectInput";

function SignUp() {
  return (
    <div className="signup-form">
      <TitleText title="Sign Up" />
      <TextInput type="text" label="Given Name" />
      <TextInput type="email" label="Email Address" />
      <SelectInput label="Select Your Favourite Pet" />
      <TextInput type="password" label="Password" />
      <Button value="Sign Up" />
    </div>
  );
}

export default SignUp;
