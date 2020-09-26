import React from "react";
import "./TextArea.css";

function TextArea({ label, placeholder }) {
  return (
    <form>
      <label className="form-item">
        {label}:
        <textarea
          className="form-input  text-area"
          placeholder={placeholder}
        ></textarea>
      </label>
    </form>
  );
}

export default TextArea;
