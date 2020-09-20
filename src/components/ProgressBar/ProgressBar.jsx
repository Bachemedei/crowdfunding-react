import React from "react";
import "./ProgressBar.css";

function ProgressBar({ data }) {
    // Variables & State
    const pledges = data.pledges;

    // Helpers
    const amountFunded = (pledges) => {
      // Iterate through pledges array, add the amount of each pledge to total
      return pledges.reduce((total, current) => {
        total = total + current.amount;
        return total;
      }, 0);
    };
  
    const percentComplete = (data, pledges) => {
      let pledgeTotal = amountFunded(pledges)
      return Math.floor(pledgeTotal/data.goal * 100)
    };
    const progressStyle = {
      width: `${percentComplete(data, pledges)}%`,
    };

  return (
    <div>
      <div className="progress-bar">
        <div className="progress-complete" style={progressStyle}></div>
      </div>
      <span className="progress-label">{percentComplete(data, pledges)}% of ${data.goal} goal reached!</span>
    </div>
  );
}

export default ProgressBar;
