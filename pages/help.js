import React from "react";
import Layout from "@/components/ui/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Help = () => {
  return (
    <main className="flex h-screen flex-col items-center bg-yellow">
      <div className="layout">
        {" "}
        <Layout />
      </div>
      <section className="help bg-white flex flex-wrap mt-[105px] h-full w-full text-center">
        <div className="help_container  my-8 mx-40 w-screen ">
          <h1 className=" text-center et-center text-2xl mb-10 font-700 font-montserrat text-black mx-auto">
            FAQs
          </h1>
          <div className="accordion_container  justify-center m-10 text-left justify-left shadow-md border-r-white">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-hind font-bold text-xl bg- p-10 bg-orange opacity-[70%]">
                  How can I find events in my local area using the app?
                </AccordionTrigger>
                <AccordionContent className="font-hind font-semibold text-lg p-10 bg-gray-100">
                  You can easily find local events by selecting a distance
                  option and specifying the radius you're interested in. The app
                  will display events happening within that distance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-hind font-bold text-xl bg- p-10 bg-orange opacity-[70%]">
                  How do I create and submit an event on the platform?
                </AccordionTrigger>
                <AccordionContent className="font-hind font-semibold text-lg p-10 bg-gray-100">
                  To create an event, navigate to the "Create Events" page and
                  provide the specified details including the event name,
                  location, country, day and time and description in the
                  specified format. After filling in the required information,
                  click the submit button to share your event with the
                  community.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-hind font-bold text-xl bg- p-10 bg-orange opacity-[70%]">
                  Is it free to attend the events?
                </AccordionTrigger>
                <AccordionContent className="ffont-hind font-semibold text-lg p-10 bg-gray-100">
                  Yes, it is free to attend any event.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-hind font-bold text-xl bg- p-10 bg-orange opacity-[70%]">
                  What happens when I click "Attend" on an event?
                </AccordionTrigger>
                <AccordionContent className="font-hind font-semibold text-lg p-10 bg-gray-100">
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
