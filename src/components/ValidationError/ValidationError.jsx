import React from "react"
import "./ValidationError.css"

function ValidationError({ error }) {
  console.log("validation error", error)
  //   return (
  //     <>
  //       {error > 0 ? (
  //         <span className="show-error">{error}</span>
  //       ) : (
  //         <span className="hide-error">"Nothing to show here"</span>
  //       )}
  //     </>
  //   )
  return <span className="error-message">{error}</span>
}

export default ValidationError
