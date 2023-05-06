import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../../Componets/Login";

const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setIsLoggedIn(true);
  }, []);
  return isLoggedIn ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
