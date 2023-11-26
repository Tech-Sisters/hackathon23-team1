import React, { useState } from "react";
import Image from "next/image";
import ClearIcon from "public/Images/clear-icon.png";

const EventDetails = ({ event, onClose }) => {
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
  const [attending, setAttending] = useState(false);

  const handleLikeClick = () => {
    setAttending(!attending);

    const attendButton = document.querySelector(".attend-button");

    if (!attending) {
      attendButton.textContent = "Attending";
      attendButton.style.backgroundColor = "#E5707E";
      setAttending(true);
      localStorage.setItem("attending", JSON.stringify(attending));
    } else {
      attendButton.textContent = "Attend";
      attendButton.style.backgroundColor = "#A3DDCB";
      setAttending(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-10  w-[80%] h-[95%] rounded-lg shadow-md relative">
        <button className="absolute top-1 right-1" onClick={onClose}>
          <Image
            src={ClearIcon}
            alt="clear-icon"
            className="clear-button opacity-40 hover:opacity-20"
            width={30}
            height={30}
          />
        </button>

        <div className="flex-shrink-0 w-full h-[300px] relative mb-4 md:mb-0">
          <div className="absolute inset-0 bg-cream opacity-50 rounded-lg"></div>
          <img
            src={imagePaths[event.imageKey]}
            alt={event.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold my-4 font-montserrat">
              {event.name}
            </h2>
            <button
              className="attend-button inline-flex items-center ml-auto  px-10 py-1 mx-4 mt-4 h-10 text-white font-hind font-bold bg-turquoise rounded-md hover:opacity-70 text-md"
              onClick={handleLikeClick}
            >
              Attend
            </button>
          </div>
          <h3 className="text-md font-semibold mb-2 mt-4 font-montserrat text-pink">
            Details
          </h3>
          <p className="description text-gray-700 font-hind font-semibold">
            {event.description} Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <h3 className="text-md font-bold mb-2 mt-8 font-montserrat text-pink">
            Time
          </h3>
          <p className="text-gray-700 font-hind font-semibold">{event.time}</p>
          <h3 className="text-md font-bold mb-2 mt-8  font-montserrat text-pink">
            Location
          </h3>
          <p className="text-gray-700 font-hind font-semibold">
            {event.place}, {event.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
