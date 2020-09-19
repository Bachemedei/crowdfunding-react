import React from "react";
import "./ProgressBar.css"

function ProgressBar({ amountRemaining }) {
    console.log(amountRemaining)
    const progressStyle = {
        width: amountRemaining
    }

  return (
    <div className="progress-bar">
      <div className="progress-complete" style={progressStyle}>
        <span className="progress-label">{amountRemaining}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;
