import React from "react"
import { Link } from "react-router-dom"
import "./PledgeInfo.css"

function PledgeInfo({ pledge }) {
  return (
    <div className="pledge">
      {pledge.anonymous ? (
        <Link to={`/profile/${pledge.supporter}`}>
          <h4>
            ${pledge.amount} {pledge.supporter_name}
          </h4>
        </Link>
      ) : (
        <h4>${pledge.amount} from an anonymous hero</h4>
      )}

      <p>{pledge.comment}</p>
    </div>
  )
}

export default PledgeInfo
