import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = () => {
    const token = window.localStorage.("userInfo")
  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default PrivateRouter;
