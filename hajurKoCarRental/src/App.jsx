import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./Componets/Landing/Landing";
import Feed from "./Componets/Car/Feed";
import CarDetails from "./Componets/Car/Details";
import Booking from "./Componets/Car/Booking";
import Sidebar from "./Componets/Dashboard/Sidebar";
import Registration from "./Componets/Registration";
import Signin from "./Componets/Login";
import Khalti from "./Componets/Payment/KhaltiCOnfig";
import Addcar from "./Componets/Car/AddCar";
import ProtectedRoute from "./Componets/Landing/Protected";
import AddUser from "./Componets/Dashboard/AddUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/car" element={<Feed />} />
        <Route path="/details/:id" element={<CarDetails />} />
        <Route path="/side" element={<Sidebar />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/payment" element={<Khalti />} />
        <Route path="/addcar" element={<Addcar />} />
        <Route path="/addUser" element={<AddUser />} />

        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/booking" element={<Booking />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
