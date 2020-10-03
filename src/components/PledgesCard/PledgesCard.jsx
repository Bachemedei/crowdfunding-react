import React, { useState } from "react";
import PledgeInfo from "../PledgeInfo/PledgeInfo";
import Button from "../Button/Button";
import "./PledgesCard.css";
import AddPledge from "../AddPledge/AddPledge";

function PledgesCard({ projectData }) {
  const [pledgeForm, setPledgeForm] = useState(false);

  const handleClick = () => {
    setPledgeForm(!pledgeForm);
  };
  return (
    <div className="pledges-list">
      <h4>Supported by:</h4>
      {projectData.pledges.map((pledge, index) => {
        return <PledgeInfo pledge={pledge} key={index} />;
      })}
      <Button
        value="Support This Project!"
        onClick={handleClick}
        type="button"
      />
      {pledgeForm ? <AddPledge projectId={projectData.id} /> : null}
    </div>
  );
}

export default PledgesCard;
