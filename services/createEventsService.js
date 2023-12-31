import { React, useState } from "react";
import Image from "next/image";
import MuslimWomen from "/public/Images/muslim-women.jpg";

const EventsForm = () => {
  const initialValues = {
    name: "",
    place: "",
    country: "",
    time: "",
    description: "",
  };

  const [eventFormValues, setEventFormValues] = useState(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventFormValues({ ...eventFormValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    console.log(eventFormValues);
    await fetch("http://localhost:3000/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventFormValues),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setIsSubmitted(false);

    // window.location.reload(false); // redirect to another page e.g. events page
  };

  return (
    <div className="create-events_container flex flex-wrap my-8 md:mx-40 w-screen">
      <form
        className="events-form mx-10 md:mx-auto p-7 py-20 border-r-white w-screen ] h-[600px] md:w-[500px] md:h-[90%] lg:w-1/2 lg:h-[640px] rounded-md shadow-md justify-left relative "
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-2xl mb-10 mt-[-60px] font-700 font-montserrat text-black">
          Create An Event
        </h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-black font-bold mb-2">
            Event Name
          </label>
          <input
            type="text"
            placeholder="Meetup"
            id="name"
            name="name"
            onChange={handleChange}
            className="bg-orange appearance-none border-1 border-orange bg-opacity-[15%] rounded-md w-full py-2 px-3 text-pink leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="place" className="block text-black font-bold mb-2">
            Event Location
          </label>
          <input
            type="text"
            placeholder="Central Park"
            id="place"
            name="place"
            onChange={handleChange}
            className="bg-orange appearance-none border-1 border-orange bg-opacity-[25%] rounded-md w-full py-2 px-3 text-pink leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-black font-bold mb-2">
            Country
          </label>
          <input
            type="text"
            placeholder="United Kingdom"
            id="country"
            name="country"
            onChange={handleChange}
            className="bg-orange appearance-none border-1 border-orange bg-opacity-[15%] rounded-md w-full py-2 px-3 text-pink leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-black font-bold mb-2">
            Day and Time
          </label>
          <input
            type="text"
            placeholder="Sun 1, 11:00 am"
            id="time"
            name="time"
            onChange={handleChange}
            className="bg-orange appearance-none border-1 border-orange bg-opacity-[25%] rounded-md w-full py-2 px-3 text-pink leading-tight focus:outline-none focus:border-pink"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-black font-bold mb-2"
          >
            Event Description
          </label>
          <input
            type="text"
            placeholder="A meetup organised by Tech Sisters"
            id="description"
            name="description"
            onChange={handleChange}
            className="bg-orange appearance-none border-1 border-orange bg-opacity-[15%] rounded-md w-full py-2 px-3 text-pink leading-tight focus:outline-none focus:border-pink"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-turquoise hover:bg-yellow text-white font-bold px-10 py-1 mx-4 mt-4 h-10 rounded-md focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>{" "}
        </div>
        {isSubmitted ? (
          <div className="w-full text-center font-bold text-turquoise font-hind text-lg mt-4">
            Submitted!
          </div>
        ) : null}
      </form>

      <div className="flex flex-col md:h-[90%] lg:w-1/2 rounded-md shadow-md align-top justify-center bg-orange xl:w-[550px] invisible lg:visible">
        <Image
          src={MuslimWomen}
          alt="muslim-women"
          width={6855}
          height={6855}
          className="w-[750px] h-[650px] xl:w-[550px] xl:h-[640px] xl:p-5 rounded align-top xxl:w-[700px]"
        />
        <div className="text-center font-montserrat font-700  text-white text-2xl align-bottom">
          Nurture a community
        </div>
        <p className="mb-2 xl:mb-5 text-md font-montserrat font-600 text-center text-white">
          Create a safe place for like-minded people
        </p>
      </div>
    </div>
  );
};

export default EventsForm;
