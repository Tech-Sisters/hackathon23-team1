import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/ui/layout";

const Help = () => {
  return (
    <main className="flex h-screen flex-col items-center bg-yellow">
      <div className="layout">
        {" "}
        <Layout />
      </div>
      <section className="help bg-white justify-center flex flex-wrap mt-[105px] h-full w-full "></section>
    </main>
  );
};

export default Help;
