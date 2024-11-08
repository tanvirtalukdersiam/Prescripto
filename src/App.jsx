import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import All_Doctors from "./pages/All_Doctors";
import Login from "./pages/Login";
import My_Profile from "./pages/My_Profile";
import My_Appointment from "./pages/My_Appointment";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[8%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors/:speciality" element={<All_Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<My_Profile />} />
        <Route path="/my-appointment" element={<My_Appointment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
    </div>
  );
};

export default App;
