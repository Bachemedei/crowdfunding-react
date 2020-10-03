import React from "react";
import { Link } from "react-router-dom";

function NavOwner({ logOut }) {
  return (
    <nav className="nav">
      <Link className="nav-link nav-home" to="/">
        Home
      </Link>
      <Link className="nav-link nav-profile" to="/profile">
        Profile
      </Link>
      <Link className="nav-link nav-project" to="/create-project">
        Create A Project
      </Link>
      <Link className="nav-link nav-logout" to="/login" onClick={logOut}>
        Log Out
      </Link>
    </nav>
  );
}

export default NavOwner;
