import { React, useState } from "react";
import Image from "next/image";
import MeetupPhoto from "/public/images/meetup-photo.jpg";
import MuslimWomen from "/public/images/muslim-women.jpg";

const EventsForm = () => {
  const initialValues = {
    name: "",
    location: "",
    time: "",
    organisingcommittee: "",
  };

  const [eventFormValues, setEventFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setEventFormValues({ ...eventFormValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="create-events_container flex flex-wrap my-8 mx-40 w-screen ">
      <form
        className="events-form mx-auto p-7 py-20 border-r-white w-1/2 rounded-md shadow-md justify-left relative z-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-2xl mb-10 mt-[-60px] font-700 font-montserrat text-black ">
          Create An Event
        </h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-black font-bold mb-2">
            Event Name
          </label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            className="bg-orange appearance-none border-1 border-orange bg-opacity-[15%] rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-black font-bold mb-2">
            Event Location
          </label>
          <input
            type="text"
            id="location"
            onChange={handleChange}
            className="bg-orange appearance-none border-1 border-orange bg-opacity-[25%]  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-black font-bold mb-2">
            Time
          </label>
          <input
            type="text"
            id="time"
            onChange={handleChange}
            className="bg-orange appearance-none border-1 border-orange bg-opacity-[15%]  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="organising-committee"
            className="block text-black font-bold mb-2"
          >
            Organising Committee
          </label>
          <input
            type="text"
            id="organising-committee"
            onChange={handleChange}
            className="bg-orange appearance-none border-1 border-orange bg-opacity-[25%]  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-orange hover:bg-yellow text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>{" "}
        </div>
      </form>

      <div className="flex flex-col w-1/2 rounded-md shadow-md align-top justify-center bg-orange">
        <Image
          src={MuslimWomen}
          alt="muslim-women"
          width={6855}
          height={6855}
          className="w-[750px] h-[550px] rounded align-top "
        />
        <div className="text-center font-montserrat font-700  text-white text-2xl  align-bottom mt-5">
          Nurture a community
        </div>
        <p className="mb-2 text-md font-montserrat font-600 text-center text-white">
          Create a place for like-minded people
        </p>
      </div>
    </div>
  );
};

export default EventsForm;
