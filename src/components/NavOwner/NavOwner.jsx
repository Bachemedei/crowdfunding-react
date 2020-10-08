import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"

function NavOwner({ logOut }) {
  const history = useHistory()
  const [loading, setLoading] = useState(true)
  const [shelterIsApproved, setShelterApproved] = useState(null)
  const [shelterName, setName] = useState("")

  useEffect(() => {
    const userID = window.localStorage.getItem("userID")
    console.log(userID)
    let isMounted = true

    fetch(`${process.env.REACT_APP_API_URL}${userID}/shelter/`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        console.log(data.is_approved)
        if (isMounted) setShelterApproved(data.is_approved)
        if (isMounted) setLoading(false)
        if (isMounted) setName(data.name)
      })
    return () => {
      isMounted = false
    }
  }, [history])

  if (loading) {
    // return <FullPageLoader />
    return null
  }
  return (
    <nav className="nav">
      <Link className="nav-link nav-home" to="/">
        Home
      </Link>
      <Link className="nav-link nav-profile" to="/profile">
        Profile
      </Link>
      <Link className="nav-link shelter-profile" to="/shelter-profile">
        {shelterName}
      </Link>
      {shelterIsApproved ? (
        <Link className="nav-link nav-project" to="/create-project">
          Create A Project
        </Link>
      ) : (
        <></>
      )}
      <Link className="nav-link nav-logout" to="/login" onClick={logOut}>
        Log Out
      </Link>
    </nav>
  )
}

export default NavOwner
