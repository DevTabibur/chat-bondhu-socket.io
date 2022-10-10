import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import auth from "../Firebase/firebase.init";
import Loader from "../Shared/Loader/Loader";

const RequireUser = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireUser;
