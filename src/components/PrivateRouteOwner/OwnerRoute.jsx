import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

function OwnerRoute({ path, ...props }) {
  const [ownerStatus, setOwnerStatus] = useState(false);

  const history = useHistory();

  const location = useLocation();

  useEffect(() => {
    const isOwner = window.localStorage.getItem("is_owner");
    isOwner === "true" ? setOwnerStatus(true) : setOwnerStatus(false);
  }, [location]);

  if (ownerStatus) {
    return props.children;
  } else {
    history.push("/login");
    return null;
  }
}

export default OwnerRoute;
