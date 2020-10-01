import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Nav.css";
// import FullPageLoader from "../FullPageLoader/FullPageLoader";

function Nav() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [loading, setLoading] = useState(true);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    token != null ? setLoggedIn(true) : setLoggedIn(false);
  }, [location]);

  const logOut = () => {
    window.localStorage.clear();
    history.push("/login");
  };

  return (
    <nav className="nav">
      <Link className="nav-link nav-home" to="/">
        Home
      </Link>
      {!loggedIn ? (
        <>
          <Link className="nav-link nav-login" to="/login">
            Log In
          </Link>
          <Link className="nav-link nav-signup" to="/signup">
            Sign Up
          </Link>
        </>
      ) : (
        <>
          <Link className="nav-link nav-profile" to="/profile">
            Profile
          </Link>
          <Link className="nav-link nav-shelter" to="/register-shelter">
            Register A Shelter
          </Link>
          <Link className="nav-link nav-logout" to="/login" onClick={logOut}>
            Log Out
          </Link>
        </>
      )}
    </nav>
  );
}

export default Nav;
