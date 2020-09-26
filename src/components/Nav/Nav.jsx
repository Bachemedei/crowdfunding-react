import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";
import FullPageLoader from "../FullPageLoader/FullPageLoader";

function Nav() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const isAuthenticated = () => {
    const token = window.localStorage.getItem("token");
    if (token != null) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (isAuthenticated()) {
      setLoading(false);
      setLoggedIn(true);
    } else {
      setLoading(false);
    }
  }, []);

  const logOut = () => {
    console.log("logout");
    window.localStorage.clear();
    history.push("/");
  };

  if (loading) {
    return <FullPageLoader />;
  }

  if (loggedIn) {
    return (
      <nav className="nav">
        <Link className="nav-link nav-home" to="/">
          Home
        </Link>
        <Link className="nav-link nav-register-shelter" to="/profile">
          Profile
        </Link>
        <Link className="nav-link nav-register-shelter" to="/register-shelter">
          Register A Shelter
        </Link>
        <Link className="nav-link nav-logout" to="/logout" onClick={logOut}>
          Log Out
        </Link>
      </nav>
    );
  }
  return (
    <nav className="nav">
      <Link className="nav-link nav-home" to="/">
        Home
      </Link>
      <Link className="nav-link nav-login" to="/login">
        Log In
      </Link>
      <Link className="nav-link nav-signup" to="/signup">
        Sign Up
      </Link>
    </nav>
  );
}

export default Nav;
