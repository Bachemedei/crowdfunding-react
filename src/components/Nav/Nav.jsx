import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import NavOwner from "../NavOwner/NavOwner";
import NavSupporter from "../NavSupporter/NavSupporter";
import "./Nav.css";
// import FullPageLoader from "../FullPageLoader/FullPageLoader";

function Nav() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [ownerStatus, setOwnerStatus] = useState(false);
  // const [loading, setLoading] = useState(true);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const isOwner = window.localStorage.getItem("is_owner");
    token != null ? setLoggedIn(true) : setLoggedIn(false);
    isOwner === "true" ? setOwnerStatus(true) : setOwnerStatus(false);
  }, [location]);

  const logOut = () => {
    window.localStorage.clear();
    history.push("/login");
  };

  if (loggedIn === true) {
    if (ownerStatus === true) {
      return <NavOwner logOut={logOut} />;
    }
    return <NavSupporter logOut={logOut} />;
  } else {
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
}

//   return (
//     <nav className="nav">
//       <Link className="nav-link nav-home" to="/">
//         Home
//       </Link>

//           <Link className="nav-link nav-login" to="/login">
//             Log In
//           </Link>
//           <Link className="nav-link nav-signup" to="/signup">
//             Sign Up
//           </Link>
//         </>
//       ) : (
//         <>
//           <Link className="nav-link nav-profile" to="/profile">
//             Profile
//           </Link>
//           <Link className="nav-link nav-shelter" to="/register-shelter">
//             Register A Shelter
//           </Link>

//           <Link className="nav-link nav-logout" to="/login" onClick={logOut}>
//             Log Out
//           </Link>
//         </>
//       )}
//     </nav>
//   );
// }

export default Nav;
