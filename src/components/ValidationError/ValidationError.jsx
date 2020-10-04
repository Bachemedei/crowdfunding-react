import React from "react"
import "./ValidationError.css"

function ValidationError({ error }) {
  return <span className="error-message">{error}</span>
}

export default ValidationError
