import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./Componets/Landing/Landing";
import Feed from "./Componets/Car/Feed";
import CarDetails from "./Componets/Car/Details";
import Booking from "./Componets/Car/Booking";
import Sidebar from "./Componets/Dashboard/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/car" element={<Feed />} />
        <Route path="/details" element={<CarDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/side" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
