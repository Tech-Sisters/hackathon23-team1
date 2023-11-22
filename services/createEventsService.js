import { React, useState } from "react";
import Image from "next/image";

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
    <div className="form-container flex flex-col my-20">
      <form className="events-form mx-auto max-w-md p-8 bg-white border-2 md:w-screen rounded shadow-md">
        <h1 className="text-center text-lg font-bold font-montserrat">
          Create An Event
        </h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-black font-bold mb-2">
            Event Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-white appearance-none border-2 border-orange rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-black font-bold mb-2">
            Event Location
          </label>
          <input
            type="text"
            id="location"
            className="bg-white appearance-none border-2 border-orange rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-black font-bold mb-2">
            Time
          </label>
          <input
            type="text"
            id="time"
            className="bg-white appearance-none border-2 border-orange rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
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
            className="bg-white appearance-none border-2 border-orange rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-turquoise hover:bg-yellow text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex">
        <Image
          src="/kidsmeetup.jpg"
          alt="event-image"
          width={300}
          height={300}
          className="rounded-t-sm"
        />
      </div>
    </div>
  );
};

export default EventsForm;
