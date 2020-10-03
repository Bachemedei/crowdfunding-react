import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import FullPageLoader from "../FullPageLoader/FullPageLoader"

function OwnerRoute({ path, ...props }) {
  const history = useHistory()

  const [loading, setLoading] = useState(true)
  const [shelterIsApproved, setShelterApproved] = useState(null)

  useEffect(() => {
    const userID = window.localStorage.getItem("userID")

    if (userID == null) {
      setShelterApproved(false)
      console.log("Not logged in --> /login")
      history.push("/login")
      return
    }

    fetch(`${process.env.REACT_APP_API_URL}${userID}/shelter/`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setLoading(false)
        setShelterApproved(data.is_approved)
      })
  }, [history])

  console.log({ shelterIsApproved })

  if (loading) {
    return <FullPageLoader />
  } else if (shelterIsApproved) {
    return props.children
  } else if (shelterIsApproved == null) {
    history.push("register-shelter")
    return null
  }
}

export default OwnerRoute
