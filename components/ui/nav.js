import React from "react";

// import "@/styles/nav.css";
import Link from "next/link";
// import "@/app/globals.css";

const Nav = () => {
  return (
    <nav className="flex nav-bar invisible md:visible w-full">
      <ul className="nav-list">
        <li>
          <Link href="/findEvents" className="find-events">
            Find Events
          </Link>
        </li>
        <li>
          <Link href="/createEvents" className="create-event">
            Create Event
          </Link>
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