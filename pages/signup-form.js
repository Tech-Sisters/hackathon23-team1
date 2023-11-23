import React from "react";
import { useState } from "react";
import Input from "../components/input";
import Header from "@/components/ui/header";

const Signup = () => {
  const [signPayload, setSignPayload] = useState({
    fullName: "",
    email: "",
    password: "",
    location: "",
  });
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setSignPayload((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header />
      <div className="w-full flex flex-row gap-y-2">
        <div className="flex flex-row gap-y-12">
          <div className="flex gap-x-8">
            <Input
              placeholder="FullName"
              name="fullName"
              onChange={handleInputField}
              value={signPayload.fullName}
            />
          </div>

          <div className="flex gap-x-8">
            <Input
              placeholder="Email"
              name="email"
              onChange={handleInputField}
              value={signPayload.email}
            />
          </div>

          <div className="flex gap-x-8 mb-6">
            <Input
              type="password"
              placeholder="PassWord"
              name="password"
              onChange={handleInputField}
              value={signPayload.password}
            />
          </div>
          <div className="flex gap-x-8 mb-6">
            <Input
              type="location"
              placeholder="Location"
              name="addresss"
              onChange={handleInputField}
              value={signPayload.location}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-turquoise hover:bg-yellow text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
