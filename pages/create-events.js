import React from "react";
import CreateEventsService from "../services/createEventsService";
import Layout from "@/components/ui/layout";

const CreateEvents = () => {
  return (
    <main className="flex h-20 flex-col items-center ">
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
