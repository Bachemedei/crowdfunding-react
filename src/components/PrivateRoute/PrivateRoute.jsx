import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

function PrivateRoute({ path, ...props }) {
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  const history = useHistory()

  const isAuthenticated = () => {
    const token = window.localStorage.getItem("token")
    if (token != null) {
      return true
    }
    return false
  }

  useEffect(() => {
    if (isAuthenticated()) {
      setLoading(false)
      setLoggedIn(true)
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return null
  }

  if (loggedIn) {
    return props.children
  } else {
    history.push("/login")
    return null
  }
}

export default PrivateRoute
