import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";

import vIcon from "../assets/verified_icon.svg";
import infoIcon from "../assets/info_icon.svg";
const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(Appcontext);
  const [docInfo, setDocinfo] = useState(null);
  const fatchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocinfo(docInfo);
    console.log(docInfo);
  };
  useEffect(() => {
    fatchDocInfo();
  }, [doctors, docInfo]);
  return (
    docInfo && (
      <div>
        {/* ---------- doctors details ------- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
              srcset=""
            />
          </div>
          <div className="flex-1 border border-gray-300 rounded-lg p-8 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <div>
              <p className="flex items-center gap-3 text-3xl font-medium">
                {docInfo.name} <img src={vIcon} alt="" />
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1 mb-1.5">
              <p className="text-base text-pcolor">
                {docInfo.degree}-{docInfo.speciality}
                <button className="bg-transparent border border-pColor rounded-full px-2 py-0.5 ml-3 text-sm">
                  {docInfo.exprience}
                </button>
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2">
                ABout <img src={infoIcon} alt="" />
              </p>
              <p className="text-base text-gray-500 max-w-[720px] mb-1">
                {docInfo.about}
              </p>
            </div>
            <div className="mt-1.5">
              <p className="text-lg text-pcolor">
                Appointment fee:{" "}
                <span className="text-black">{docInfo.fee}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
