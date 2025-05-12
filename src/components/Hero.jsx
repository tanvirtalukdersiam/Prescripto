import React from "react";
import groupPic from "../assets/group_profiles.png";
import arrowPic from "../assets/arrow_icon.svg";
import headerPic from "../assets/header_img.png";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* ------------left Site------------ */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 mx-auto md:py-[10vw] md:mb-[-30px]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight font-outfit">
          Quickly Book Appointment <br />
          With Trusted Medical Doctors
        </h1>
        <div className="flex  flex-col md:flex-row items-center gap-3.5 text-white text-sm font-light">
          <img className="w-28" src={groupPic} alt="" srcset="" />
          <p className="font-normal text-[18px] leading-[25px] tracking-normal">
            Explore our wide network of trusted doctors
            <br className="hidden sm:block" />
            and book your appointment with ease.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-base m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer mt-3"
        >
          Book appointment <img src={arrowPic} alt="" />
        </a>
      </div>
      {/* ------------right Site------------ */}
      <div className="md:w-1/2 relative ">
        <img
          className="w-full md:absolute  bottom-0 h-auto rounded-lg"
          src={headerPic}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
