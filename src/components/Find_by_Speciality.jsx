import React from "react";
import { SpecialtyData } from "../assets/assets";
import { Link } from "react-router-dom";
const Find_by_Speciality = () => {
  return (
    <div id="#speciality" className="flex flex-col items-center gap-4 py-16">
      <h2 className="font-medium text-[40px] text-center">
        {" "}
        Find_by_Speciality
      </h2>
      <p className="font-normal sm:w-1/3 text-[18px] text-pcolor text-center">
        Simply browse through our extensive list of trusted doctors, schedule{" "}
        {/* <br className="hidden md:block" /> */}
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-5 pt-8 w-full overflow-scroll">
        {SpecialtyData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-8px] transition-all duration-300"
            key={index}
            to={`doctors/${item.speciality}`}
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p className="text-pcolor text-[15px]">{item.speciality} </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Find_by_Speciality;
