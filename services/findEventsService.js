import React, { useState, useEffect } from "react";
import Image from "next/image";
import allEvents from "../public/eventsData";
// import SearchIcon from "public/images/search-icon.png";
// import UserIcon from "public/images/user-icon.png";
import EventList from "@/components/eventList";

const FindEventsService = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [radius, setRadius] = useState("5");
  const [searchInput, setSearchInput] = useState("");
  const [filteredSearchResults, setFilteredSearchResults] = useState([]);

  useEffect(() => {
    const placeholderEvents = allEvents;

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

      setFilteredEvents(filtered);
      //   filterByCountry(events);
    }
  }, [userLocation, events, radius]);

  //static image paths
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
    islamicbookclub: "/images/islamic-bookclub.jpg",
    londonfoodfestival: "/images/londonfoodfestival.jpg",
    quranstudy: "/images/quranstudy.jpg",
    islamicartexhibition: "/images/islamic-artexhibition.jpg",
  };

  //search button functionality
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const searchResults = events.filter((event) =>
      event.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(filteredSearchResults);
    setFilteredSearchResults(searchResults);
  };

  return (
    <div className="container mx-auto px-[70px] py-[40px] font-montserrat">
      <div className="search-container absolute right-32 top-5 font-hind">
        <form
          className="search flex bg-gray-100 rounded-2xl text-left w-[400px] pl-2 h-8"
          onSubmit={handleSearchSubmit}
        >
          {/* <Image
            src={SearchIcon}
            className="search-icon  inline-flex opacity-80 w-4 h-5 m-2 pb-1"
            alt="search-icon"
            width={15}
            height={15}
          /> */}

          <input
            type="text"
            placeholder="Search events"
            className="bg-transparent inline-flex focus:outline-none pt-1 w-full"
            value={searchInput}
            onChange={handleSearchInputChange}
          ></input>
        </form>
      </div>
      <div className="search-container absolute right-20 top-5 font-hind">
        {/* <Image
          src={UserIcon}
          className="user-icon  inline-flex w-[30px]"
          alt="user-icon"
          width={25}
          height={25}
        /> */}
      </div>
      <div className="search-results  mt-5 mx-16  mb-28 justify-left">
        {/* <h2 className="text-2xl font-semibold text-black text-left">
          Search Results
        </h2> */}
        <div className="flex flex-wrap -mx-2 ">
          {filteredSearchResults.map((event) => (
            <div
              key={event.id}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-2 "
            >
              <div className="bg-white p-0 m-2 border rounded-md cursor-pointer hover:shadow-lg border-slate-300 h-[300px] w-full">
                <Image
                  src={imagePaths[event.imageKey]}
                  alt="event-image"
                  width={300}
                  height={300}
                  className="w-[300px] h-[180px] rounded-t-sm"
                />
                <h3 className="text-lg font-bold mt-3 text-pink text-left px-4">
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

      <div className="flex items-center justify-center ">
        <h2 className="text-2xl font-semibold mb-8 text-black py-0 h-3 text-center ">
          Upcoming Events Within{" "}
          <select
            id="radiusSelect"
            onChange={handleSelectChange}
            value={radius}
            className="px-2 text-base bg-gray-100 border-black cursor-pointer w-12"
          >
            <option value="5">5 </option>
            <option value="10">10 </option>
            <option value="15">15 </option>
            <option value="20">20 </option>
          </select>{" "}
          Miles of You:
        </h2>
      </div>

      <div className="flex flex-wrap -mx-2 px-20  w-full">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4  text-center mb-28"
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
        <EventList events={events} imagePaths={imagePaths} country="Malaysia" />
        <EventList
          events={events}
          imagePaths={imagePaths}
          country="United Kingdom"
        />
        <EventList events={events} imagePaths={imagePaths} country="Qatar" />
      </div>
    </div>
  );
};

export default FindEventsService;
