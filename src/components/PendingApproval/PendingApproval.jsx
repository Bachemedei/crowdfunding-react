import React, { useState } from "react"
import "./PendingApproval.css"

function PendingApproval({ toolTipInfo }) {
  const [showToolTip, setToolTip] = useState(false)

  const handleMouseOver = (e) => {
    setToolTip(true)
  }

  const handleMouseOut = (e) => {
    setToolTip(false)
  }

  return (
    <div className="approval-container">
      <input
        className="approval-btn"
        type="button"
        value="Pending Approval"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onTouchStart={handleMouseOver}
        onTouchEnd={handleMouseOut}
      />
      {showToolTip ? (
        <div className="tooltip bottom">
          <div className="tooltip-arrow" />
          <div className="tooltip-label">{toolTipInfo}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default PendingApproval
