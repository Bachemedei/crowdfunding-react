import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav-link nav-home" to="/">Home</Link>
      <Link className="nav-link nav-projects" to="/project">Project</Link>
      <Link className="nav-link nav-login" to="/login">Log In</Link>
      <Link className="nav-link nav-signup" to="/signup">Sign Up</Link>
    </nav>
  );
}

export default Nav;
