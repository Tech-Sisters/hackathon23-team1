import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import allEvents from "../public/eventsData";
import SearchIcon from "public/Images/search-icon.png";
import UserIcon from "public/Images/user-icon.png";
import ClearIcon from "public/Images/clear-icon.png";
import EventList from "@/components/eventList";
import EventDetails from "@/components/eventDetails";
import LoadingSpinner from "@/components/ui/loadingspinner";
import NoResults from "@/components/noResults";
import allImagePaths from "@/public/imagePaths";

const FindEventsService = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [radius, setRadius] = useState("5");
  const [searchInput, setSearchInput] = useState("");
  const [filteredSearchResults, setFilteredSearchResults] = useState([]);
  const [isSearchSubmitted, setIsSearchSubmitted] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [locationError, setLocationError] = useState(null);

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
        setLocationError(
          "Error getting user location. Please allow location access to find events nearby."
        );
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

  //search button functionality
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearchSubmitted(true);

    const searchResults = events.filter((event) => {
      if (Object.values(event)) {
        return Object.values(event).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchInput.toLowerCase())
        );
      } else {
        return false;
      }
    });

    setFilteredSearchResults(searchResults);
    handleClearButtonUI(searchResults);

    if (searchResults.length === 0) {
      setShowClearButton(true); //
    } else {
      setShowClearButton(false);
    }
  };

  const handleClear = () => {
    setFilteredSearchResults([]);
    setIsSearchSubmitted(false);
    const clearButton = document.querySelector(".clear-button");
    clearButton.classList.add("invisible");
  };

  const handleClearButtonUI = (searchResults) => {
    const clearButton = document.querySelector(".clear-button");

    if (
      (searchResults && searchResults.length > 0) ||
      showClearButton ||
      searchResults.length === 0
    ) {
      clearButton.classList.remove("invisible");
    } else {
      clearButton.classList.add("invisible");
    }
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="container my-0 py-0 mx-auto px-5 md:px-[70px] font-montserrat">
      <div className="search-container absolute top-5 right-[62px] md:right-32 md:top-5 font-hind">
        <form
          className="search flex bg-gray-100 rounded-2xl text-left w-[150px] md:w-[400px] pl-2 h-8"
          onSubmit={handleSearchSubmit}
        >
          <Image
            src={SearchIcon}
            className="search-icon  inline-flex opacity-80 w-4 h-5 m-2 pb-1 "
            alt="search-icon"
            width={15}
            height={15}
          />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent inline-flex focus:outline-none pt-1 w-full"
            value={searchInput}
            id="search-button"
            onChange={handleSearchInputChange}
          ></input>
        </form>
      </div>
      <div className="search-container absolute right-20 top-5 font-hind">
        <Image
          src={UserIcon}
          className="user-icon  inline-flex w-[30px] md:visible invisible"
          alt="user-icon "
          width={25}
          height={25}
        />
      </div>

      <div className="search-results mb-[350px] mt-[50px] justify-left ">
        {filteredSearchResults.length > 0 && (
          <h2 className="text-2xl font-semibold ml-2 text-orange text-center md:text-left relative mb-0">
            Search Results
            <h2 className="inline-flex absolute left-[200px] top-[15px] h-1 rounded-sm opacity-10 md:visible invisible w-4/5 bg-orange border-orange" />
          </h2>
        )}
        <div className="flex flex-wrap -mx-2 relative mt-[50px] mb-[60px]">
          <button className="block absolute right-12 top-[-45px] md:right-5 md:top-[-80px] ">
            <Image
              src={ClearIcon}
              alt="clear-icon"
              className="clear-button inline-flex invisible opacity-30"
              width={30}
              height={30}
              onClick={handleClear}
            />
          </button>
          {isSearchSubmitted && filteredSearchResults.length === 0 && (
            <div className="w-full text-center font-bold text-pink font-hind text-lg mb-20">
              <NoResults />
              How about you create an event for your community? Visit{" "}
              <Link href="/create-events" className="text-turquoise">
                this page{" "}
              </Link>
              to get started!
            </div>
          )}
          {filteredSearchResults.map((event) => (
            <div
              key={event.id}
              className="w-[300px] md:w-[300px] md:justify-left text-center mx-auto md:mx-1 px-0 mb-4 "
            >
              <div className="bg-white  m-2 my-4 border rounded-md cursor-pointer hover:shadow-lg border-slate-300 h-[330px] md:h-[300px] w-[300px]">
                <Image
                  src={allImagePaths[event.imageKey]}
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
      <div className="mt-[-320px]">
        <div className="flex flex-wrap -mx-2 px-0 w-full h-min justify-center md:justify-start !important">
          <h2 className="text-xl md:text-2xl font-semibold mb-10 text-black py-0 h-3 text-left md:justify-left justify-left !important mx-5">
            Upcoming Events Within{" "}
            <select
              id="radiusSelect"
              onChange={handleSelectChange}
              value={radius}
              className="px-2 rounded text-base bg-gray-100 border-none cursor-pointer w-12"
            >
              <option
                value="5"
                className="px-2 rounded bg-white hover:bg-gray-100"
              >
                5{" "}
              </option>
              <option
                value="10"
                className="px-2 rounded bg-white hover:bg-gray-100"
              >
                10{" "}
              </option>
              <option
                value="15"
                className="px-2 rounded bg-white hover:bg-gray-100"
              >
                15{" "}
              </option>
              <option
                value="20"
                className="px-2 rounded bg-white hover:bg-gray-100"
              >
                20{" "}
              </option>
            </select>{" "}
            Miles:
          </h2>
        </div>
        {loading && (
          <div className="flex text-center m-4 mb-40 p-5">
            <LoadingSpinner />
          </div>
        )}
        <div className="flex justify-center md:justify-left flex-col w-full mb-28">
          <div className="flex flex-wrap -mx-2 px-1 w-full mb-28 md:justify-left justify-center ">
            {locationError ? (
              <div className="p-4 m-5 rounded-md font-bold text-xl text-gray-400 font-hind opacity-50">
                {locationError}{" "}
              </div>
            ) : (
              <>
                {filteredEvents ? (
                  filteredEvents.map((event) => (
                    <div
                      key={event.id}
                      className="w-[300px] md:w-[300px] justify-center md:justify-left text-center mx-1 px-0"
                      onClick={() => handleEventClick(event)}
                    >
                      <div className="bg-white  m-2 my-4 border rounded-md cursor-pointer hover:shadow-lg border-slate-300 h-[330px] md:h-[300px] w-[300px]">
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
                        <div className="details pt-2 px-4 font-hind font-semibold text-left ">
                          <p className="text-gray-800">{event.time}</p>
                          <p className="text-gray-700">{event.place}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <NoResults />
                )}
              </>
            )}
          </div>
          {selectedEvent && (
            <EventDetails event={selectedEvent} onClose={handleCloseDetails} />
          )}

          <EventList
            key="malaysia"
            events={events}
            imagePaths={allImagePaths}
            country="Malaysia"
            onEventClick={handleEventClick}
          />
          <EventList
            key="uk"
            events={events}
            allImagePaths={allImagePaths}
            country="United Kingdom"
            onEventClick={handleEventClick}
          />
          <EventList
            key="qatar"
            events={events}
            allImagePaths={allImagePaths}
            country="Qatar"
            onEventClick={handleEventClick}
          />
        </div>
      </div>
    </div>
  );
};

export default FindEventsService;
