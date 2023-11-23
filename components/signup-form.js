import React from "react";
import {useState} from "react";
import Input from "./input";

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
      <div className="w-full flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-12">
          <div className="flex gap-x-8">
            <Input
              placeholder="FullName"
              name="fullName"
              onChange={handleInputField}
              value={patientPayload.fullName}
            />
          </div>

          <div className="flex gap-x-8">
            <Input
              placeholder="Email"
              name="email"
              onChange={handleInputField}
              value={patientPayload.email}
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
      </div>
    </div>
  );
};

export default Signup;
