import React from "react";
import { Link } from "react-router-dom";

function NavSupporter({ logOut }) {
  return (
    <nav className="nav">
      <Link className="nav-link nav-home" to="/">
        Home
      </Link>
      <Link className="nav-link nav-profile" to="/profile">
        Profile
      </Link>
      <Link className="nav-link nav-shelter" to="/register-shelter">
        Register A Shelter
      </Link>
      <Link className="nav-link nav-logout" to="/login" onClick={logOut}>
        Log Out
      </Link>
    </nav>
  );
}

export default NavSupporter;
