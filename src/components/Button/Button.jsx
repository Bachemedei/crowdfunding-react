import React from "react"
import "./Button.css"

function Button({ value, url, ...props }) {
  return (
    <form className="btn-container" action={url}>
      <input className="btn" value={value} {...props} />
    </form>
  )
}

export default Button
