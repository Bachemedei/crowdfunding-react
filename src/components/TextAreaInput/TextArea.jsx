import React from "react";
import "./TextArea.css";

function TextArea({ label, placeholder, type, ...props }) {
  return (
    <form>
      <label className="form-item">
        {label}:
        <textarea
          className="form-input  text-area"
          placeholder={placeholder}
          type={type}
          name={label}
          {...props}
        />
      </label>
    </form>
  );
}

export default TextArea;
