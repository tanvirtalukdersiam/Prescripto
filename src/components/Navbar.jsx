import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-sm py-4 mb-5  border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink>
          <li className="py-1">HOME</li>
          <hr />
        </NavLink>
        <NavLink>
          <li className="py-1">All Doctors</li>
          <hr />
        </NavLink>
        <NavLink>
          <li className="py-1">ABOUT</li>
          <hr />
        </NavLink>
        <NavLink>
          <li className="py-1">Contact</li>
          <hr />
        </NavLink>
      </ul>
      <div>
        <button>Create account</button>
      </div>
    </div>
  );
};

export default Navbar;
