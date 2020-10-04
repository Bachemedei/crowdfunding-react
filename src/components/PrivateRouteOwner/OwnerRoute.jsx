import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import FullPageLoader from "../FullPageLoader/FullPageLoader"

function OwnerRoute({ path, ...props }) {
  const history = useHistory()

  const [loading, setLoading] = useState(true)
  const [shelterIsApproved, setShelterApproved] = useState(null)

  useEffect(() => {
    const userID = window.localStorage.getItem("userID")
    let isMounted = true

    if (userID == null) {
      if (isMounted) setShelterApproved(false)
      console.log("Not logged in --> /login")
      history.push("/login")
      return
    }

    fetch(`${process.env.REACT_APP_API_URL}${userID}/shelter/`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        if (isMounted) setShelterApproved(data.is_approved)
        if (isMounted) setLoading(false)
      })
    return () => {
      isMounted = false
    }
  }, [history])

  if (loading) {
    return <FullPageLoader />
  } else if (shelterIsApproved) {
    return props.children
  } else if (shelterIsApproved == null) {
    history.push("/register-shelter")
    console.log("Not approved --> /register-shelter")
    return null
  }
}

export default OwnerRoute
