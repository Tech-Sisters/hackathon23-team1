import React, { useState, useEffect } from "react";
import Image from "next/image";
import allEvents from "../public/eventsData";
import SearchIcon from "public/Images/search-icon.png";
import UserIcon from "public/Images/user-icon.png";
import ClearIcon from "public/Images/clear-icon.png";
import EventList from "@/components/eventList";
import EventDetails from "@/components/eventDetails";
import LoadingSpinner from "@/components/ui/loadingspinner";

const FindEventsService = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [radius, setRadius] = useState("5");
  const [searchInput, setSearchInput] = useState("");
  const [filteredSearchResults, setFilteredSearchResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/events", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((eventsData) => {
        setEvents(eventsData);
      });

    //get user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        console.error("Error getting user location:", error);
        setLoading(false);
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
        const eventLocation = {
          lat: event.lat,
          lon: event.long,
        };
        const distance = calculateDistance(userLocation, eventLocation);
        return distance <= radius;
      });

      setFilteredEvents(filtered);
      //   filterByCountry(events);
    }
  }, [userLocation, events, radius]);

  //static image paths
  const imagePaths = {
    placeholder: "/images/muslim-women.jpg",
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
    const clearButton = document.querySelector(".clear-button");
    clearButton.classList.remove("invisible");

    //attains an array of all the property values of event object and checks if atleast one of the values includes the search input
    const searchResults = events.filter((event) =>
      Object.values(event).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setFilteredSearchResults(searchResults);
  };

  const handleClear = () => {
    setFilteredSearchResults([]);
    const clearButton = document.querySelector(".clear-button");
    console.log(clearButton);
    clearButton.classList.add("invisible");
  };

  return (
    <div className="container mx-auto px-[70px] py-[0px] font-montserrat">
      <div className="search-container absolute right-32 top-5 font-hind">
        <form
          className="search flex bg-gray-100 rounded-2xl text-left w-[400px] pl-2 h-8"
          onSubmit={handleSearchSubmit}
        >
          <Image
            src={SearchIcon}
            className="search-icon  inline-flex opacity-80 w-4 h-5 m-2 pb-1"
            alt="search-icon"
            width={15}
            height={15}
          />

          <input
            type="text"
            placeholder="Search events"
            className="bg-transparent inline-flex focus:outline-none pt-1 w-full"
            value={searchInput}
            id="clear-button"
            onChange={handleSearchInputChange}
          ></input>
        </form>
      </div>
      <div className="search-container absolute right-20 top-5 font-hind">
        <Image
          src={UserIcon}
          className="user-icon  inline-flex w-[30px]"
          alt="user-icon"
          width={25}
          height={25}
        />
      </div>

      <div className="search-results mt-5 mb-28 justify-left ">
        {filteredSearchResults.length > 0 && (
          <h2 className="text-2xl font-semibold ml-2 text-orange text-left relative mb-4">
            Search Results
            <h2 className="inline-flex absolute left-[200px] top-[15px] h-1 rounded-sm opacity-10 w-4/5 bg-orange border-orange" />
          </h2>
        )}
        <div className="flex flex-wrap -mx-2 relative">
          <button className="inline-flex absolute right-4 top-[-45px] ">
            <Image
              src={ClearIcon}
              alt="clear-icon"
              className="clear-button inline-flex invisible opacity-30"
              width={30}
              height={30}
              onClick={handleClear}
            />
          </button>
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
                  className="w-[310px] h-[180px] rounded-t-sm"
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

      <div className="flex items-center justify-left ">
        <h2 className="text-2xl font-semibold mb-10 text-black py-0 h-3 text-left justify-left">
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
          Miles:
        </h2>
      </div>
      {loading && (
        <div className="flex text-center m-4 mb-40 p-5">
          <LoadingSpinner />
        </div>
      )}
      <div className="flex justify-left flex-col w-full mb-28">
        <div className="flex flex-wrap -mx-2 px-0  w-full mb-28">
          {filteredEvents.map((event) => (
            <div key={event.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4  text-center">
              <div className="bg-white p-0 m-2 border rounded-md cursor-pointer hover:shadow-lg border-slate-300 h-[300px] ">
                <Image
                  src={imagePaths[event.imageKey]}
                  alt="event-image"
                  width={300}
                  height={300}
                  className="w-[300px] h-[180px] rounded-t-sm"
                />
                <h3 className="text-lg font-bold  mt-3 text-pink text-left px-4">{event.name}</h3>
                <div className="details pt-2 px-4 font-hind font-semibold text-left ">
                  <p className="text-gray-800">{event.time}</p>
                  <p className="text-gray-700">{event.place}</p>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
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
