import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuthenticated } from "../login/loginSlice";

import React from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const isAuth = useSelector(selectIsAuthenticated);
  return isAuth ? <Outlet /> : <Navigate to="/landingPage" />;
};

export default ProtectedRoute;
