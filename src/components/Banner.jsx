import React from "react";
import bannerPic from "../assets/appointment_img.png";
const Banner = () => {
  return (
    <div className=" flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 ">
      {/* left sight */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold">
          <h4>Book Appointment</h4>
          <h4 className="mt-3">With 100+ Trusted Doctors</h4>
        </div>
        <button
          onClick={() => {
            navigate("/doctors");
            scrollTo(0, 0);
          }}
          className="bg-white text-gray-600 px-12 py-3 rounded-full  mt-6 hover:scale-110 transition-all duration-500"
        >
          Create account
        </button>
      </div>
      {/* right sight */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={bannerPic}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
