import React, { useState } from "react";
import Image from "next/image";

const EventList = ({ events, imagePaths, country }) => {
  const filterCountryEvents = events.filter(
    (event) => event.country === country
  );

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="flex justify-left flex-col w-full mb-28">
      <h2 className="text-2xl font-semibold text-black mt-8 text-left mb-4">
        Events in {country}
      </h2>
      <div className="flex flex-wrap -mx-2 px-0 w-full h-min">
        {filterCountryEvents.map((event) => (
          <div
            key={event.id}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-2 text-center"
            onClick={() => handleEventClick(event)}
          >
            <div className="bg-white p-0 m-2 border rounded-md cursor-pointer hover:shadow-lg border-slate-300 h-[300px]">
              <Image
                src={imagePaths[event.imageKey]}
                alt="event-image"
                width={300}
                height={300}
                className="w-[300px] h-[180px] rounded-t-sm"
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
