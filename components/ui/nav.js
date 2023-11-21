import React from "react";

// import "@/styles/nav.css";
import Link from "next/link";
// import "@/app/globals.css";

const Nav = () => {
  return (
    <nav className="flex nav-bar invisible md:visible ">
      <ul className="nav-list">
        <li>
          <a href="#find-events" className="find-events">
            Find Events
          </a>
        </li>
        <li>
          <a href="#create-event" className="create-event">
            Create Event
          </a>
        </li>
        <li>
          <a href="#help" className="help">
            Help
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
