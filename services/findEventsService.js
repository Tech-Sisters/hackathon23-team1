import React, { useState, useEffect } from "react";
import Image from "next/image";
import allEvents from "../public/eventsData";

// import bookclub from "/images/book-club.png";
// import lecture from "/images/lecture.png";

const FindEventsService = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [radius, setRadius] = useState("5");

  useEffect(() => {
    const placeholderEvents = allEvents;

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

  //set the radius state to selected radius value
  function handleSelectChange(event) {
    const selectedValue = event.target.value;
    setRadius(selectedValue);
    console.log(radius);
  }

  //   useEffect(() => {
  //     console.log("Effect triggered!");
  //   }, [handleSelectChange]);

  //Euclidean formula to calculate the distance between two pairs of coordinates
  const calculateDistance = (location1, location2) => {
    const latDiff = location1.lat - location2.lat;
    const lonDiff = location1.lon - location2.lon;
    const distanceInDegrees = Math.sqrt(latDiff * latDiff + lonDiff * lonDiff);

    const earthRadiusInKilometers = 111.319; // 1 degree of earth = 111.319 km
    const distanceInKilometers = distanceInDegrees * earthRadiusInKilometers;
    const distanceInMiles = distanceInKilometers * 0.621371;

    return distanceInMiles;
  };

  useEffect(() => {
    // filter events based on user location and radius
    if (userLocation) {
      const filtered = events.filter((event) => {
        const distance = calculateDistance(userLocation, event.location);
        return distance <= radius;
      });
      console.log("Filtered events:", filtered);
      setFilteredEvents(filtered);
    }
  }, [userLocation, events, radius]);

  const imagePaths = {
    bookclub: "/images/book-club.png",
    lecture: "/images/lecture.png",
    meetup: "/images/meetup.jpg",
    sunwaypyramidmall: "/images/sunwaypyramidmall.jpg",
    techworkshop: "/images/techworkshop.jpg",
    cycling: "/images/cycling.jpg",
    foodfestival: "/images/foodfestival.jpg",
    cycling: "/images/cycling.jpg",
    kidsmeetup: "/images/kidsmeetup.jpg",
  };

  return (
    <div className="container mx-auto px-[70px] py-[40px] font-montserrat">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Events within{" "}
          <select
            id="radiusSelect"
            onChange={handleSelectChange}
            value={radius}
            className="px-2 text-base bg-gray-100 border-black cursor-pointer"
          >
            <option value="5">5 </option>
            <option value="10">10 </option>
            <option value="15">15 </option>
            <option value="20">20 </option>
          </select>{" "}
          miles of you:
        </h2>
      </div>
      <div className="flex flex-wrap -mx-2  w-full ">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4 text-center"
          >
            <div className="bg-white p-4 m-2 border rounded-md cursor-pointer hover:shadow-lg border-slate-300 h-full">
              <h3 className="text-lg font-semibold mb-2 ">{event.name}</h3>

              <Image
                src={imagePaths[event.imageKey]}
                alt="event-image"
                width={300}
                height={300}
                className="w-[280px] h-[180px]"
              />
              <div className="details p-7 font-hind">
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
