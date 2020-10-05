import React, { useState } from "react"
import "./ToggleButton.css"

function ToggleButton({ onButtonClick, valueOne, valueTwo, label, ...props }) {
  let value = valueTwo
  const [activeButton, setActiveButton] = useState({ active: false })

  const handleClick = () => {
    const buttonClicked = { ...activeButton }
    buttonClicked.active = !buttonClicked.active
    setActiveButton(buttonClicked)
    onButtonClick(buttonClicked.active)
    return value
  }

  return (
    <form className="btn-toggle-container">
      <label>
        {label}:
        <input
          className={`btn-toggle ${
            activeButton.active ? `active` : `inactive`
          }`}
          type="button"
          onClick={handleClick}
          value={activeButton.active ? valueOne : valueTwo}
          {...props}
        />
      </label>
      {/* <input className="btn-toggle" type="button" value={valueTwo} {...props} /> */}
    </form>
  )
}

export default ToggleButton