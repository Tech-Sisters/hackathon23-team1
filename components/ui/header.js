"use client";
import React, { use } from "react";
import Image from "next/image";
import TogetherAppLogo from "public/images/logo.png";
import Nav from "./nav.js";
// import Hamburgerbtn from "public/images/menu-icon.png";
// import { useState } from "react";

const Header = () => {
  //   const [toggle, setToggle] = useState(false);

  return (
    <header className="flex h-10 relative">
      <div className="logo">
        <Image
          src={TogetherAppLogo}
          className="app-logo"
          alt="together-app_logo"
          width={500}
          height={500}
        />
        <Nav />
      </div>

      {/* <div>
        <button className="hamburger-menu">
          <Image
            src={Hamburgerbtn}
            className="hamburger-menu"
            alt="hamburger-menu_icon"
            height={10}
            width={25}
          />
        </button>
      </div> */}
    </header>
  );
};

export default Header;
