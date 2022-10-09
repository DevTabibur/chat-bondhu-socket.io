import { useState } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const RequireUser = () => {
  const [user] = useState(true);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireUser;
