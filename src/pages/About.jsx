import React from "react";
import aboutPic from "../assets/about_image.png";
const About = () => {
  return (
    <div>
      <div className="text-center text-3xl pt-10 text-gray-500">
        <h1>
          About <span className="text-gray-700 font-medium">Us</span>
        </h1>
      </div>
      <div className="my-12 flex items-center flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[400px] rounded-[2px]"
          src={aboutPic}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-base text-gray-600">
          <p>
            Welcome to Docure your reliable partner in managing healthcare with
            ease and confidence. At Docure, we simplify the way you book doctor
            appointments and access health records. We understand the everyday
            challenges of managing your well-being, and we’re here to make your
            healthcare journey smoother, smarter, and more convenient all in one
            secure platform.
          </p>
          <p>
            At Docure, we’re all about making healthcare easier for you. We’re
            always working to improve our platform with the latest technology so
            you can book appointments, manage your health, and get the care you
            need quickly and easily. Whether it’s your first visit or part of
            ongoing care, Docure is here to help, every step of the way.
          </p>
          <p className="font-bold text-lg">Our Vision</p>
          <p>
            At Docure, our vision is to make healthcare simple, connected, and
            accessible for everyone. We’re committed to bridging the gap between
            patients and healthcare providers, ensuring you get the care you
            need whenever and wherever you need it.
          </p>
        </div>
      </div>
      <div className="text-2xl my-4">
        <h2 className="text-gray-500">
          Why <span className="font-semibold text-gray-700">Choose Us</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]">
          <b className="text-[#1F2937] text-lg font-semibold">Efficiency:</b>
          <p className="text-[#454545] text-[17px]">
            Easy appointment booking that works with your busy schedule.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]">
          <b className="text-[#1F2937] text-lg font-semibold">Convenience:</b>
          <p className="text-[#454545] text-[17px]">
            Connect with trusted healthcare professionals near you, ready to
            provide the care you deserve.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]">
          <b className="text-[#1F2937] text-lg font-semibold">
            Personalization:
          </b>
          <p className="text-[#454545] text-[17px]">
            Personalized tips and reminders to help you keep track of your
            health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
