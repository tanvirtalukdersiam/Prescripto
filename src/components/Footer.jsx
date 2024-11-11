import React from "react";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-14 ">
        {/* left sight */}
        <div>
          <img className="w-40 mb-3.5" src={logo} alt="" srcset="" />
          <p className="w-full md:w-2/3 leading-6 text-pcolor">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* middle sight */}
        <div>
          <p className="text-[#4B5563] font-semibold mb-4 text-lg">COMPANY</p>
          <ul className="flex flex-col gap-1.5 text-pcolor">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right sight */}
        <div>
          <p className="text-[#4B5563] font-semibold mb-4 text-lg">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1.5 text-pcolor">
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* bottom part */}
      <div>
        <hr className="text-pcolor border border-1" />
        <p className="text-center text-sm font-normal text-pcolor py-4 ">
          Copyright © 2024 Tanvir Siam - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
