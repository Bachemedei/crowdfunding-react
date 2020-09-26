import React from "react";
import "./TextInput.css";

function TextInput({ label, type, placeholder, ...props }) {
  return (
    <form>
      <label className="form-item">
        {label}:
        <input
          className="form-input"
          type={type}
          name={label}
          placeholder={placeholder}
          {...props}
        />
      </label>
    </form>
  );
}

export default TextInput;
