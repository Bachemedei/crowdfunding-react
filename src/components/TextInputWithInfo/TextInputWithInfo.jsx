import React from "react"
import ValidationError from "../ValidationError/ValidationError"
import ToolTip from "../ToolTip/ToolTip"
import "./TextInputWithInfo.css"

function TextInputWithInfo({
  label,
  type,
  placeholder,
  value,
  error,
  toolTipInfo,
  ...props
}) {
  return (
    <div>
      <form>
        <label className="form-item">
          <div className="label-info">
            <p>{label}:</p>
            <ToolTip toolTipInfo={toolTipInfo} />
          </div>

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
    </div>
  )
}

export default TextInputWithInfo
