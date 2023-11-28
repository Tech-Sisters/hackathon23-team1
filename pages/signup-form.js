import React from "react";
import { useState } from "react";
import Input from "../components/input";
import Layout from "@/components/ui/layout";

const Signup = () => {
  const [signPayload, setSignPayload] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
  });
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setSignPayload({
      ...signPayload,
      [name]: value,
    });
  };

  // change
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signPayload.email || !signPayload.email.includes("@") || !signPayload.password) {
      alert("Invalid email or password");
      return;
    }
    await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signPayload),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <main className="flex h-screen flex-col items-center bg-yellow">
      <Layout />
      <section className=" bg-white justify-center flex flex-wrap mt-[105px]  h-full w-full ">
        <form
          className="signup-form h-full items-center flex flex-col  m-auto p-7 border-r-white md:w-1/2 rounded-md shadow-md justify-center relative z-10 mt-20"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-2xl mb-10 mt-[-60px] font-700 font-montserrat text-black ">
            Create An Account
          </h1>

          <div className="w-full flex flex-col gap-y-2 ">
            <div className="flex flex-col gap-y-12">
              <div className="flex gap-x-8">
                <Input
                  placeholder="Full Name"
                  name="name"
                  onChange={handleInputField}
                  value={signPayload.name}
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
                  type="country"
                  placeholder="Country of Residence"
                  name="country"
                  onChange={handleInputField}
                  value={signPayload.country}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-turquoise hover:bg-yellow text-white font-bold px-10 py-1 rounded-md mx-4 mt-4 h-10 focus:outline-none focus:shadow-outline"
                type="submit"
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
