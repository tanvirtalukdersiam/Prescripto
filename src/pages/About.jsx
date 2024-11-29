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
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <p className="font-bold text-lg">Our Vision</p>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
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
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]">
          <b className="text-[#1F2937] text-lg font-semibold">Convenience:</b>
          <p className="text-[#454545] text-[17px]">
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]">
          <b className="text-[#1F2937] text-lg font-semibold">
            Personalization:
          </b>
          <p className="text-[#454545] text-[17px]">
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
