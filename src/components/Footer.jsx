import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-14 ">
        {/* left sight */}
        <div>
          <h5 className="text-black font-semibold text-[32px] cursor-pointer">
            Docure <span className="text-primary">+</span>
          </h5>
          <p className="w-full md:w-2/3 leading-6 text-pcolor">
            Docure connects you with trusted doctors for secure, easy online
            appointments. Access expert medical care, book visits, and manage
            health records all in one place. Your health, our priority at
            Docure.
          </p>
        </div>
        {/* middle sight */}
        <div>
          <p className="text-[#4B5563] font-semibold mb-4 text-lg">COMPANY</p>
          <ul className="flex flex-col gap-1.5 text-pcolor">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              {" "}
              <Link to={"/about"}> About us</Link>
            </li>
            <li>
              {" "}
              <Link to={"/contact"}> Contact us</Link>
            </li>
            <li>
              {" "}
              <Link to={"/policy"}>Privacy policy</Link>
            </li>
          </ul>
        </div>
        {/* right sight */}
        <div>
          <p className="text-[#4B5563] font-semibold mb-4 text-lg">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1.5 text-pcolor">
            <li>+1 (416) 123-4567</li>
            <li>docure@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* bottom part */}
      <div>
        <hr className="text-pcolor border border-1" />
        <p className="text-center text-sm font-normal text-pcolor py-4 ">
          Copyright © 2025 Mujahid - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
