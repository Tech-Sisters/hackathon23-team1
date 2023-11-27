import React from "react";
import { useState } from "react";
import Input from "../components/input";
import Layout from "@/components/ui/layout";

const Signup = () => {
  const [signPayload, setSignPayload] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setSignPayload((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main className="flex h-screen flex-col items-center bg-yellow">
      <Layout />
      <section className=" bg-white justify-center flex flex-wrap mt-[105px]  h-full w-full ">
        <form className="signup-form h-full items-center flex flex-col  m-auto p-7 border-r-white md:w-1/2 rounded-md shadow-md justify-center relative z-10 mt-20">
          <h1 className="text-center text-2xl mb-10 mt-[-60px] font-700 font-montserrat text-black ">
            Create An Account
          </h1>

          <div className="w-full flex flex-col gap-y-2 ">
            <div className="flex flex-col gap-y-12">
              <div className="flex gap-x-8">
                <Input
                  placeholder="Full Name"
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
                  placeholder="Password"
                  name="password"
                  onChange={handleInputField}
                  value={signPayload.password}
                />
              </div>
              <div className="flex gap-x-8 mb-6">
                <Input
                  type="location"
                  placeholder="Country of Residence"
                  name="addresss"
                  onChange={handleInputField}
                  value={signPayload.location}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-turquoise hover:bg-yellow text-white font-bold px-10 py-1 rounded-md mx-4 mt-4 h-10 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Signup;
