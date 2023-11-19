import Layout from "@/components/ui/layout";

export default function FindEvents() {
  return (
    <main className="flex h-screen flex-col items-center bg-yellow">
      <div className="layout">
        {" "}
        <Layout />
      </div>
      <section className="viewEvents bg-white justify-center fixed top-[185px] h-full w-full">
        <h1 className="test font-montserrat">This is the event-viewing page</h1>
      </section>
    </main>
  );
}
