import React, { useState, useEffect } from "react";
import Image from "next/image";

// import bookclub from "/images/book-club.png";
// import lecture from "/images/lecture.png";

const FindEventsService = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const defaultRadius = 5;

  useEffect(() => {
    const placeholderEvents = [
      {
        id: 1,
        name: "Girls Book Club",
        location: { lat: 3.1107, lon: 101.6031 },
        radius: 3,
        imageKey: "bookclub",
        time: "12/12/2023, 17:00",
        place: "Hameediyah Library",
      },
      {
        id: 2,
        name: "Lecture",
        location: { lat: 3.1107, lon: 101.6031 },
        radius: 8,
        imageKey: "lecture",
        time: "20/12/2023, 08:00",
        place: "Midvalley Mega Mall, Convention Center",
      },
    ];

    console.log("Placeholder events:", placeholderEvents);

    //set events state to placeholderEvents
    setEvents(placeholderEvents);

    //get user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  useEffect(() => {
    // filter events based on user location and radius
    if (userLocation) {
      const filtered = events.filter((event) => {
        const distance = calculateDistance(userLocation, event.location);
        return distance <= event.radius;
      });
      console.log("Filtered events:", filteredEvents);
      setFilteredEvents(filtered);
    }
  }, [userLocation, events]);

  const calculateDistance = (location1, location2) => {
    const latDiff = location1.lat - location2.lat;
    const lonDiff = location1.lon - location2.lon;
    return Math.sqrt(latDiff * latDiff + lonDiff * lonDiff);
  };

  const imagePaths = {
    bookclub: "/images/book-club.png",
    lecture: "/images/lecture.png",
  };

  return (
    <div className="container mx-auto p-4 ">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Events within {defaultRadius} kilometers:
      </h2>
      <div className="flex flex-wrap -mx-2">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4 text-center"
          >
            <div className="bg-white p-4 border rounded-md cursor-pointer hover:shadow-lg h-[500px]">
              <h3 className="text-lg font-semibold mb-2 ">{event.name}</h3>

              <Image
                src={imagePaths[event.imageKey]}
                width={300}
                height={300}
                className="w-[300px] h-[300px]"
              />
              <div className="details p-7">
                <p className="text-gray-600">{`within ${event.radius} kilometers`}</p>
                <p className="text-gray-600">{`Time: ${event.time}`}</p>
                <p className="text-gray-600">{`Location: ${event.place}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindEventsService;
