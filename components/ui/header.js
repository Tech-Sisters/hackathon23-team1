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
    <header className="flex flex-col mx-auto h-10">
      <div className="logo p-[10px]">
        <Image
          src={TogetherAppLogo}
          className="app-logo pl-[20px] py-4 pt-2"
          alt="together-app_logo"
          width={200}
          height={200}
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
