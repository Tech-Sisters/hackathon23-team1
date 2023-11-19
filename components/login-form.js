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
    <div className="flex flex-col justify-center items-center h-screen overflow-auto max-w-[85%] mx-auto scrollbar-hide">
      <form className="w-full mt-12">
        <div className="w-full flex flex-col gap-y-2">
          
          <div className="flex flex-col gap-y-12 mb-6">
            <Input
              label="Email address"
              placeholder="Enter your email address"
              name="email"
              onChange={handleInputField}
              value={loginPayload.email}
            />

            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              name="password"
              onChange={handleInputField}
              value={loginPayload.password}
            />
          </div>

          <button className="w-full h-10 bg-blue rounded-[0.3126rem] font-medium flex items-center justify-center gap-x-[0.3125rem] capaitalize"
          >Login</button>

          <Link href="#">
            <div className="flex justify-center items-center relative my-1">
              <span className=" h-8 grid place-content-center bg-white text-xl px-4 pb-1 z-10 text-[#666666]">
                or
              </span>
              <span className="absolute h-[0.1rem] w-full bg-[#6666663f] "></span>
            </div>
            <div className="border border-[#0075FA] flex justify-center items-center p-3 rounded-md gap-x-1 cursor-pointer">
              <span>Don't have an account?</span>
              <span className="text-[#0075FA]">Sign up</span>
            </div>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm








