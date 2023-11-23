import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex nav-bar invisible md:visible w-full">
      <ul className="nav-list font-semibold font-hind text-lg">
        <li>
          <Link href="/find-events" className="find-events">
            Find Events
          </Link>
        </li>
        <li>
          <Link href="/create-events" className="create-event">
            Create Events
          </Link>
        </li>
        <li>
          <Link href="/help" className="help">
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
