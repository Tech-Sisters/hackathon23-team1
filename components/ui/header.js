"use client";
import React, { useState } from "react";
import Image from "next/image";
import TogetherAppLogo from "public/images/logo.png";
import Nav from "./nav.js";
import Link from "next/link";
import HamburgerIcon from "public/images/menu-icon.png";
import CloseIcon from "public/Images/clear-icon.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex flex-col mx-auto h-20 md:h-20 md:w-screen font-montserrat w-screen bg-gradient-to-r from-yellow to-pink">
      <div className="logo pt-2 w-[150px] md:w-[200px]">
        <Link href="/">
          <Image
            src={TogetherAppLogo}
            className="app-logo pl-[20px] py-4 pt-2 w-[200px]"
            alt="together-app_logo"
            width={200}
            height={200}
          />
        </Link>
        <Nav />
      </div>

      <div className="visible md:invisible">
        <button
          className="hamburger-menu bg-none absolute right-5 top-1 mt-5 md:invisible "
          onClick={() => setToggle(!toggle)}
        >
          <Image
            src={HamburgerIcon}
            className="hamburger-menu"
            alt="hamburger-menu_icon"
            height={10}
            width={25}
          />
        </button>
        {toggle && (
          <div className="menu-container ">
            <ul className="menu-group z-10 absolute flex flex-col items-left top-10 w-full ">
              <button
                className="close-btn absolute top-[48px] right-[7px] z-10"
                onClick={() => setToggle(!toggle)}
              >
                <Image
                  src={CloseIcon}
                  alt="close-icon"
                  className="close-icon h-[30px] w-[30px] opacity-[70%] hover:opacity-50"
                  height={15}
                  width={15}
                />
              </button>
              {toggle && (
                <ul className="menu-group  flex flex-col absolute top-8 left-0 b-0 mb-0 bg-pink w-screen text-sm items-left  font-700 px-3 z-100 text-white pb-4">
                  <Link href="/find-events">
                    <li className="menu-group_item pt-6 hover:text-yellow">
                      Find Events
                    </li>
                  </Link>
                  <Link href="/create-events">
                    <li className="menu-group_item border-t pt-3 hover:text-yellow">
                      Create Events
                    </li>
                  </Link>
                  <Link href="/help">
                    <li className="menu-group_item border-t pt-3 hover:text-yellow">
                      Help
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="menu-group_item border-t pb-2 pt-3 hover:text-yellow">
                      Log In
                    </li>
                  </Link>
                </ul>
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
