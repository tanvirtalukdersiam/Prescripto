import React, { useState } from "react";
import logo from "../assets/logo.svg";
import cross from "../assets/cross_icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import avater from "../assets/profile_pic.png";
import menuIcon from "../assets/menu_icon.svg";
import dropdownI from "../assets/dropdown_icon.svg";
const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex justify-between items-center text-sm py-4 mb-5  border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={logo}
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink className={""} to={"/"}>
          <li className="py-1 font-outfit font-normal">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/6 m-auto hidden" />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/6 m-auto hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/6 m-auto hidden" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/6 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-9 rounded-full" src={avater} alt="" />
            <img className="w-2.5" src={dropdownI} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointment")}
                  className="cursor-pointer hover:text-black"
                >
                  My Appointments{" "}
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 font-light hidden md:block rounded-full"
          >
            Create account
          </button>
        )}

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={menuIcon}
          alt=""
        />

        {/*  ------------mobile menu------------- */}
        <div
          className={` ${
            menu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 bottom-0 top-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={cross}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to={"/"}>
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/doctors"}>
              <p className="px-4 py-2 rounded inline-block"> All Doctors</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/about"}>
              <p className="px-4 py-2 rounded inline-block"> ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/contact"}>
              <p className="px-4 py-2 rounded inline-block"> Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
