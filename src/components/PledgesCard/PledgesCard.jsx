import React from "react";
import PledgeInfo from "../PledgeInfo/PledgeInfo";
import Button from "../Button/Button";
import "./PledgesCard.css";
import AddPledge from "../AddPledge/AddPledge";

function PledgesCard({ pledges }) {
  return (
    <div className="pledges-list">
      <h4>Supported by:</h4>
      {pledges.map((pledge, index) => {
        return <PledgeInfo pledge={pledge} key={index} />;
      })}
      <Button value="Support This Project!" />
      <AddPledge />
    </div>
  );
}

export default PledgesCard;
