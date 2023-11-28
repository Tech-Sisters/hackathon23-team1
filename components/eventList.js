import React, { useState } from "react";
import Image from "next/image";
import allImagePaths from "@/public/imagePaths";

const EventList = ({ events, country }) => {
  const filterCountryEvents = events.filter(
    (event) => event.country === country
  );

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="flex flex-col w-full mb-28">
      <h2 className="text-2xl font-semibold text-black mt-8 text-center md:text-left mb-4">
        Events in {country}
      </h2>
      <div className="flex flex-wrap -mx-2 px-0 w-full h-min justify-center md:justify-start !important ">
        {filterCountryEvents.map((event) => (
          <div
            key={event.id}
            className="w-[300px] justify-center md:justify-left text-center mx-0 md:mx-1 px-0 "
            onClick={() => handleEventClick(event)}
          >
            <div className="bg-white m-2 my-4 border rounded-md cursor-pointer hover:shadow-lg border-slate-300 h-[330px] md:h-[300px] w-[300px] ">
              <Image
                src={allImagePaths[event.imageKey]}
                alt="event-image"
                width={300}
                height={300}
                className="w-[100%] h-[200px] md:w-[400px] md:h-[180px] rounded-t-sm"
              />
              <h3 className="text-lg font-bold  mt-3 text-pink text-left px-4">
                {event.name}
              </h3>
              <div className="details pt-2 px-4 font-hind font-semibold text-left">
                <p className="text-gray-800">{event.time}</p>
                <p className="text-gray-700">{event.place}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
