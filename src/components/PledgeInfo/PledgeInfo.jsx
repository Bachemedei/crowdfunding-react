import React from "react";
import "./PledgeInfo.css";

function PledgeInfo({ pledge }) {
  return (
    <div className="pledge">
      <h4>
        ${pledge.amount} from {pledge.supporter_name}
      </h4>
      <p>{pledge.comment}</p>
    </div>
  );
}

export default PledgeInfo;
