import React from "react"
import ValidationError from "../ValidationError/ValidationError"
import "./TextInput.css"

function TextInput({ label, type, placeholder, value, error, ...props }) {
  return (
    <form>
      <label className="form-item">
        {label}:
        <input
          className="form-input"
          type={type}
          name={label}
          placeholder={placeholder}
          defaultValue={value}
          {...props}
          noValidate
        />
        <ValidationError error={error} />
      </label>
    </form>
  )
}

export default TextInput
