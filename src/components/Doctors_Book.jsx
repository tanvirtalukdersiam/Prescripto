import React from "react";
import { doctors } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Doctors_Book = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h2 className="font-medium text-[40px] text-center">
        {" "}
        Top Doctors to Book
      </h2>
      <p className="font-normal  text-[18px] text-pcolor text-center">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 md:px-0">
        {doctors.slice(0, 7).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-400"
          >
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="h-2 w-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <h6>{item.name} </h6>
              <h6 className="text-pcolor text-sm">{item.speciality} </h6>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-blue-100 text-gray-600 px-12 py-3 rounded-full  mt-10 hover:scale-110 transition-all duration-400">
        More
      </button>
    </div>
  );
};

export default Doctors_Book;
