import React from "react";
import "./Button.css";

function Button({ value, ...props }) {
  return (
    <form className="btn-container">
      <input className="btn" type="submit" value={value} {...props} />
    </form>
  );
}

export default Button;
