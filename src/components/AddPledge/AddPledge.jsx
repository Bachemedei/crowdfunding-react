import React from "react";
import TextInput from "../TextInput/TextInput";
import TextArea from "../TextAreaInput/TextArea";
import "./AddPledge.css";

function AddPledge() {
  return (
    <div className="pledge-form">
      <TextInput id="amount" type="text" label="Amount" placeholder="$100" />
      <TextArea
        id="comment"
        type="text"
        label="Add a comment"
        placeholder="Wow that dog is so cool"
      />
    </div>
  );
}

export default AddPledge;
