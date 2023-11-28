import React from "react";
import Layout from "@/components/ui/layout";
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,} from "@/components/ui/accordion";

const Help = () => {
  return (
    <main className="flex h-20 flex-col items-center bg-yellow">
      <div className="layout">
        {" "}
        <Layout />
      </div>
      <section className="help bg-white flex flex-wrap mt-[50px] h-full w-full text-center">
        <div className="help_container my-0 md:my-8 mx-auto w-full md:w-1/2 text-left">
          <h1 className="text-center text-2xl mb-10 font-700 font-montserrat text-black mx-auto">
            FAQs
          </h1>
          <div className="accordion_container mx-auto md:w-full w-2/3 shadow-md border-r-white">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-hind font-semibold text-lg md:text-xl bg- px-10  bg-[#fbf4e8] opacity-[70%]">
                  How can I find events in my local area using the app?
                </AccordionTrigger>
                <AccordionContent className="font-hind text-normal md:text-lg px-10 py-5 bg-cream">
                  You can easily find local events by selecting a distance
                  option and specifying the radius you're interested in. The app
                  will display events happening within that distance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-hind font-semibold text-lg md:text-xl bg- px-10 bg-[#fbf4e8] opacity-[70%]">
                  How do I create and submit an event on the platform?
                </AccordionTrigger>
                <AccordionContent className="font-hind text-normal md:text-lg px-10 py-5 bg-cream">
                  To create an event, navigate to the "Create Events" page and
                  provide the specified details including the event name,
                  location, country, day and time and description in the
                  specified format. After filling in the required information,
                  click the submit button to share your event with the
                  community.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-hind font-semibold text-lg md:text-xl bg- px-10 bg-[#fbf4e8] opacity-[70%]">
                  Is it free to attend the events?
                </AccordionTrigger>
                <AccordionContent className="ffont-hind text-normal md:text-lg px-10 py-5 bg-cream">
                  Yes, it is free to attend any event.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-hind font-semibold text-lg md:text-xl bg- px-10 bg-[#fbf4e8] opacity-[70%]">
                  What happens when I click "Attend" on an event?
                </AccordionTrigger>
                <AccordionContent className="font-hind text-normal md:text-lg px-10 py-5 bg-cream">
                  Clicking "Attend" indicates your interest in attending the
                  event. The app will update your status, and you'll be notified
                  of any event updates. It's a great way to show your
                  participation and connect with other attendees.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Help;
