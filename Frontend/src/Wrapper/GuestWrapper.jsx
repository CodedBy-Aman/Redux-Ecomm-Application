import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestWrapper = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.users?.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default GuestWrapper;
