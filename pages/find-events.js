import Layout from "@/components/ui/layout";
import FindEventsService from "../services/findEventsService";

export default function FindEvents() {
  return (
    <main className="flex h-screen flex-col items-center bg-yellow">
      <div className="layout">
        {" "}
        <Layout />
      </div>

      <section className="viewEvents bg-white justify-center flex flex-wrap mt-[105px] h-full w-full ">
        <div>
          <FindEventsService />
        </div>
      </section>
    </main>
  );
}

// "attend-button inline-flex items-center ml-auto  px-10 py-1 mx-4 mt-4 h-10 text-white font-hind font-bold bg-turquoise rounded-md hover:opacity-70 text-md"
