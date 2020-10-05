import React, { useState } from "react"
import "./ToolTip.css"

function ToolTip({ toolTipInfo }) {
  const [showToolTip, setToolTip] = useState(false)

  const handleMouseOver = (e) => {
    setToolTip(true)
  }

  const handleMouseOut = (e) => {
    setToolTip(false)
  }

  return (
    <div className="tooltip-container">
      <button
        className="tooltip-icon"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        i
      </button>
      {showToolTip ? (
        <div className="tooltip right">
          <div className="tooltip-arrow" />
          <div className="tooltip-label">{toolTipInfo}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default ToolTip
