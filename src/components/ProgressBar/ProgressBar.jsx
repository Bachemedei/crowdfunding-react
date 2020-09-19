import React from "react";
import "./ProgressBar.css";

function ProgressBar({ percentComplete }) {
  console.log(percentComplete);
  const progressStyle = {
    width: `${percentComplete}%`,
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="progress-complete" style={progressStyle}></div>
      </div>
      <span className="progress-label">{percentComplete}% of goal reached!</span>
    </div>
  );
}

export default ProgressBar;
