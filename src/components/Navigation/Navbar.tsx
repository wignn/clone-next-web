"use client"
import React from "react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavDesktop";
import { userInterface } from "../../../types/user";

const Navbar:React.FC<userInterface> = ({user}) => {
  return (
    <div className="w-full">
      <div className="hidden md:block overflow-hidden">
        <NavbarDesktop user={user}/>
      </div>
      <div className="md:hidden">
        <NavbarMobile user={user}/>
      </div>
    </div>
  );
};

export default Navbar;
