import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/ui/layout";
import CreateEventsService from "../services/createEventsService";

const CreateEvents = () => {
  return (
    <main className="flex h-20 flex-col items-center bg-yellow">
      <div className="layout">
        {" "}
        <Layout />
      </div>
      <section className="create-events bg-white justify-center flex flex-wrap mt-[50px] h-full w-full ">
        <CreateEventsService />
      </section>
    </main>
  );
};

export default CreateEvents;
