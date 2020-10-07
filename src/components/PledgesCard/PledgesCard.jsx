import React, { useState } from "react"
import PledgeInfo from "../PledgeInfo/PledgeInfo"
import Button from "../Button/Button"
import "./PledgesCard.css"
import AddPledge from "../AddPledge/AddPledge"
import { useHistory } from "react-router-dom"

function PledgesCard({ projectData }) {
  const history = useHistory()
  const [pledgeForm, setPledgeForm] = useState(false)

  const handleClick = () => {
    const userID = window.localStorage.getItem("userID")
    if (userID == null) {
      history.push("/login")
    } else {
      setPledgeForm(!pledgeForm)
    }
  }
  return (
    <div className="pledges-list">
      <h4>Supported by:</h4>
      {projectData.pledges.length === 0 ? (
        <p>
          Uh Oh...Looks like no one has supported this project yet. Maybe you
          should be the first?
        </p>
      ) : (
        projectData.pledges.map((pledge, index) => {
          return <PledgeInfo pledge={pledge} key={index} />
        })
      )}
      <Button
        value="Support This Project!"
        onClick={handleClick}
        type="button"
      />
      {pledgeForm ? <AddPledge projectId={projectData.id} /> : null}
    </div>
  )
}

export default PledgesCard
