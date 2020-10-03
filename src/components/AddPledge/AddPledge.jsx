import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import TextArea from "../TextAreaInput/TextArea";
import Button from "../Button/Button";
import "./AddPledge.css";
import { useHistory } from "react-router-dom";

function AddPledge({ projectId }) {
  const user = window.localStorage.getItem("userID");
  const history = useHistory();
  const token = window.localStorage.getItem("token");
  const [pledge, setPledge] = useState({
    amount: undefined,
    comment: "",
    anonymous: false,
    supporter: user,
    project_id: projectId,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPledge((newPledge) => ({
      ...newPledge,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(pledge),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pledge.amount && pledge.comment) {
      postData().then((response) => {
        // history.push(`/project/${projectId}`);
        window.location.reload();
      });
    }
  };

  return (
    <div className="pledge-form">
      <TextInput
        id="amount"
        type="text"
        label="Amount"
        placeholder="$100"
        onChange={handleChange}
      />
      <TextArea
        id="comment"
        type="text"
        label="Add a comment"
        placeholder="Wow that dog is so cool"
        onChange={handleChange}
      />
      <Button value="Send Support!" onClick={handleSubmit} type="button" />
    </div>
  );
}

export default AddPledge;
