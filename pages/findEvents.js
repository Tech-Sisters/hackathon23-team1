import Layout from "@/components/ui/layout";
import FindEventsService from "../services/findEventsService";

export default function FindEvents() {
  return (
    <main className="flex h-screen flex-col items-center bg-yellow">
      <div className="layout">
        {" "}
        <Layout />
      </div>
      <section className="viewEvents bg-white justify-center flex flex-row mt-[105px] h-full w-full ">
        <div>
          <FindEventsService />
        </div>
      </section>
    </main>
  );
}
