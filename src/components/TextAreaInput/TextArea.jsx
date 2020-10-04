import React from "react"
import "./TextArea.css"
import ValidationError from "../ValidationError/ValidationError"

function TextArea({ label, placeholder, type, value, error, ...props }) {
  return (
    <form>
      <label className="form-item">
        {label}:
        <textarea
          className="form-input  text-area"
          placeholder={placeholder}
          type={type}
          name={label}
          defaultValue={value}
          {...props}
          noValidate
        />
        <ValidationError error={error} />
      </label>
    </form>
  )
}

export default TextArea
