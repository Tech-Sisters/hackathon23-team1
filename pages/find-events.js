import FindEventsService from "../services/findEventsService";
import Layout from "@/components/ui/layout";

export default function FindEvents() {
  return (
    <main className="flex h-20 flex-col items-center">
      <div className="layout">
        {" "}
        <Layout />
      </div>

      <section className="find-events bg-white justify-center flex flex-wrap mt-[50px] p-[0px] h-full w-full ">
        <FindEventsService />
      </section>
    </main>
  );
}

// "attend-button inline-flex items-center ml-auto  px-10 py-1 mx-4 mt-4 h-10 text-white font-hind font-bold bg-turquoise rounded-md hover:opacity-70 text-md"
