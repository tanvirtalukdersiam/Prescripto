import React, { useContext, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import vIcon from "../assets/verified_icon.svg";
import infoIcon from "../assets/info_icon.svg";
import RelativeDoctors from "../components/RelativeDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(Appcontext);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [docInfo, setDocInfo] = useState(null);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(null);

  useEffect(() => {
    const fetchDocInfo = () => {
      const docInfo = doctors.find((doc) => doc._id === docId);
      setDocInfo(docInfo);
    };

    fetchDocInfo();
  }, [doctors, docId]);

  const docSlots = useMemo(() => {
    if (!docInfo) return [];
    const startHour = 10;
    const endHour = 21;
    const today = new Date();
    const allSlots = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(endHour, 0, 0, 0);

      currentDate.setHours(
        i === 0 ? Math.max(currentDate.getHours() + 1, startHour) : startHour
      );
      currentDate.setMinutes(i === 0 && currentDate.getMinutes() > 30 ? 30 : 0);

      const timeSlots = [];
      while (currentDate < endTime) {
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: currentDate.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      allSlots.push(timeSlots);
    }

    return allSlots;
  }, [docInfo]);

  if (!docInfo) {
    return <p>Loading doctor information...</p>;
  }

  return (
    <div>
      {/* Doctor details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          className="bg-primary w-full sm:max-w-72 rounded-lg"
          src={docInfo.image}
          alt={`Image of ${docInfo.name}`}
        />
        <div className="flex-1 border border-gray-300 rounded-lg p-8 bg-white mx-2 sm:mx-0">
          <p className="flex items-center gap-3 text-3xl font-medium">
            {docInfo.name} <img src={vIcon} alt="Verified icon" />
          </p>
          <p>
            {docInfo.degree} - {docInfo.speciality}
          </p>
          <div>
            <p className="flex items-center gap-3 mt-3">
              About <img src={infoIcon} alt="Info icon" />
            </p>
            <p className="text-base text-pcolor max-w-[760px] mt-2">
              {docInfo.about}
            </p>
          </div>
          <p className="mt-3">
            Appointment fee: <span>{docInfo.fee}</span>
          </p>
        </div>
      </div>
      {/* Booking Slots */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {docSlots.map((item, index) => (
            <div
              key={`day-${index}`}
              onClick={() => setSlotIndex(index)}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                slotIndex === index
                  ? "bg-primary text-white"
                  : "border border-gray-500"
              }`}
            >
              <p>{item[0] ? daysOfWeek[item[0].dateTime.getDay()] : "N/A"}</p>
              <p>{item[0] ? item[0].dateTime.getDate() : "-"}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-7">
          {docSlots[slotIndex]?.length > 0 ? (
            docSlots[slotIndex].map((item, index) => (
              <p
                key={`time-${index}`}
                className={`text-base font-light flex-shrink-0 px-5 py-1.5 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "bg-primary text-white"
                    : "text-gray-400 "
                }`}
                onClick={() => setSlotTime(item.time)}
              >
                {item.time?.toLowerCase() || ""}
              </p>
            ))
          ) : (
            <p className="text-gray-500">No slots available</p>
          )}
        </div>
        <button
          onClick={() => handleBooking()}
          disabled={!slotTime}
          className={`bg-primary text-sm font-light px-14 py-3.5 rounded-full text-white mt-7 ${
            !slotTime ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Book an appointment
        </button>
      </div>

      {/* Related doctors */}
      <RelativeDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;
