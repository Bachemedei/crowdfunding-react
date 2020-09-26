import React from "react";
import "./TextInput.css";

function TextInput({ label, type, placeholder }) {
  return (
    <form>
      <label className="form-item">
        {label}:
        <input
          className="form-input"
          type={type}
          name={label}
          placeholder={placeholder}
        />
      </label>
    </form>
  );
}

export default TextInput;
