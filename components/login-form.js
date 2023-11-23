"use client";
import {useState} from "react";
import  Link  from "next/link";
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
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-auto max-w-[85%] mx-auto scrollbar-hide bg-white ">
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

          <button className="w-full h-10 border border-lightpink bg-lightpink rounded-[4rem] font-medium flex items-center justify-center gap-x-[0.3125rem] capaitalize">
            Login
          </button>

          <div className="flex justify-center items-center relative my-1">
            <span className=" h-8 grid place-content-center bg-inherit text-xl px-4 pb-1 z-10 text-[#666666]">
              or
            </span>
            <span className="absolute h-[0.1rem] w-full bg-[#6666663f] "></span>
          </div>

          <div className="border border-orange flex justify-center items-center p-3 rounded-[4rem] gap-x-1 cursor-pointer bg-orange mt-3">
            <Link href="/signup-form">
              <span className="text-white font-medium">Sign up</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm








