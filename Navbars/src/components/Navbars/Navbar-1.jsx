"use client";

import { NavbarLinks } from "@/constants/Data";
import Link from "next/link";

import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { AlignJustify, X } from "lucide-react";

const FirstNavbar = () => {
  const sidebarRef = useRef();
  const [toggleIcon, setToggleIcon] = useState(true);

  const toggleSidebar = () => {
    sidebarRef.current.classList.toggle("active");
    setToggleIcon((prev) => !prev);
  };

  return (
    <div className="max-w-7xl mx-auto py-5 px-5 xl:px-0 flex justify-between items-center">
      <h1 className="text-xl font-bold">Logo.</h1>

      <ul className="hidden md:flex justify-center items-center gap-3">
        {NavbarLinks.map((link, id) => (
          <li key={id}>
            <Link href={link.path}>{link.name}.</Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-3">
        <Button>Learn More</Button>
        <Button variant="outline">Sign In</Button>
      </div>

      {/* mobile navbar */}
      <div className="flex md:hidden">
        {toggleIcon ? (
          <AlignJustify onClick={toggleSidebar} className="cursor-pointer" />
        ) : (
          <X onClick={toggleSidebar} className="cursor-pointer text-red-600" />
        )}

        <div className="sidebar-first-navbar" ref={sidebarRef}>
          <h1 className="font-bold text-xl">Logo.</h1>
          <ul className="flex flex-col gap-3">
            {NavbarLinks.map((link, id) => (
              <li key={id}>
                <Link href={link.path}>{link.name}.</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* mobile sidebar */}
    </div>
  );
};

export default FirstNavbar;
