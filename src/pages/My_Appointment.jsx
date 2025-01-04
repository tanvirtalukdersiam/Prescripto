import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
const My_Appointment = () => {
  const { doctors } = useContext(Appcontext);
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-500 border-b">
        My appointments
      </p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2.5 border-b"
            key={index}
          >
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-zinc-600 text-sm mt-1">{item.speciality}</p>
              <p className="font-medium">Address:</p>
              <p className="text-zinc-500">
                57th Cross, Richmond Circle,
                <br /> Church Road, London
              </p>
              <p>
                <span className="font-medium">Date & Time:</span>25, July, 2024
                | 8:30 PM
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-250">
                Pay Online
              </button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-250">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default My_Appointment;
