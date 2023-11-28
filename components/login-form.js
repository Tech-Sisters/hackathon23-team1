"use client";
import { useState } from "react";
import Link from "next/link";
import Input from "./input";

const LoginForm = () => {
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setLoginPayload((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col justify-center items-center md:h-screen overflow-auto max-w-[85%] mx-auto scrollbar-hide bg-white ">
      
      <form className="w-full mt-12">
        <div className="w-full flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-12 mb-6 ">
            <Input
              label="Email address"
              placeholder="jannah@noor.com"
              name="email"
              onChange={handleInputField}
              value={loginPayload.email}
            />

            <Input
              type="password"
              label="Password"
              placeholder="* * * * * * * *"
              name="password"
              onChange={handleInputField}
              value={loginPayload.password}
            />
          </div>

          <button className="w-full h-10 border border-lightpink bg-lightpink rounded-[4rem] font-medium flex items-center justify-center gap-x-[0.3125rem] capaitalize hover:bg-lightyellow">
            Login
          </button>

          <div className="flex gap-3 justify-between items-center relative my-1">
            <span className="h-[2px] bg-gray-400 w-full"></span>
            <p className="text-lg text-gray-800">or</p>
            <span className="h-[2px] bg-gray-400 w-full"></span>
            
          </div>
          <Link href="/signup-form">
            <div className="border border-orange flex justify-center items-center p-3 rounded-[4rem] gap-x-1 cursor-pointer bg-orange mt-3">
              <span className="text-white font-medium">Sign up</span>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
