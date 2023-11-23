import { React, useState } from "react";
import Image from "next/image";
import MeetupPhoto from "/public/images/meetup-photo.jpg";

const EventsForm = () => {
  const initialValues = {
    name: "",
    location: "",
    time: "",
    organisingcommittee: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <div className="create-events_container flex flex-wrap my-10 w-screen m-10">
      <form className="events-form mx-auto p-7 py-20 border-r-white w-1/2 rounded-md shadow-md justify-left ">
        <h1 className="text-center text-lg font-700 font-montserrat text-black ">
          Create An Event
        </h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-black font-bold mb-2">
            Event Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-orange appearance-none border-2 border-orange opacity-[15%] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-black font-bold mb-2">
            Event Location
          </label>
          <input
            type="text"
            id="location"
            className="bg-orange appearance-none border-2 border-orange opacity-30  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-black font-bold mb-2">
            Time
          </label>
          <input
            type="text"
            id="time"
            className="bg-orange appearance-none border-2 border-orange opacity-[15%]  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
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
            className="bg-orange appearance-none border-2 border-orange opacity-30  rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-orange hover:bg-yellow text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex flex-col w-1/2 rounded-md shadow-md align-top justify-center bg-orange">
        <Image
          src={MeetupPhoto}
          alt="event-image"
          width={6855}
          height={6855}
          className="w-[900px] h-[450px] py-0 mb-2 align-top "
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
