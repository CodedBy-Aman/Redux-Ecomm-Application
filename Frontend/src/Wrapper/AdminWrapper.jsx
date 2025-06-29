import React, { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminWrapper = ({ children }) => {
  const isAdmin = useSelector(
    (state) => state.users?.currentUser?.isAdmin || false
  );
  if (!isAdmin) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default AdminWrapper;
