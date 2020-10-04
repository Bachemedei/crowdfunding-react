import React from "react"
import "./TextArea.css"

function TextArea({ label, placeholder, type, value, ...props }) {
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
      </label>
    </form>
  )
}

export default TextArea
