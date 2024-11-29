import React from "react";
import contactPic from "../assets/contact_image.png";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-3xl pt-10 text-gray-500">
        <h1>
          CONTACT <span className="text-gray-700 font-medium">Us</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center my-14">
        <img className="w-full max-w-[400px]" src={contactPic} alt="" />
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="text-2xl text-[#4B5563] font-semibold uppercase">
            Our OFFICE
          </p>
          <p className="text-lg text-[#4B5563] font-normal">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-lg text-[#4B5563] font-normal">
            Tel: (415) 555‑0132
          </p>
          <p className="text-lg text-[#4B5563] font-normal">
            Email: greatstackdev@gmail.com
          </p>
          <p className="text-2xl text-[#4B5563] font-semibold uppercase">
            Careers at PRESCRIPTO
          </p>
          <p className="text-lg text-[#4B5563] font-normal">
            Learn more about our teams and job openings.
          </p>
          <button className="border text-black border-black px-7 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300 scale-x-110">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
