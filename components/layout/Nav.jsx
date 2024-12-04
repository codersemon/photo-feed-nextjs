"use client";

// dependencies
import bdFlag from "@/public/bd.png";
import usaFlag from "@/public/usa.png";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  // language dropdown toggler state
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex gap-4 items-center">
      {/* Language Dropdown */}
      <div className="relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowDropdown((p) => !p)}
        >
          <Image className="max-w-8" src={bdFlag} alt="bangla" />
          Bangla
        </button>
        {/* dropdown */}
        {showDropdown && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
            <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
              <Image className="max-w-8" src={bdFlag} alt="bangla" />
              Bangla
            </li>
            <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
              <Image className="max-w-8" src={usaFlag} alt="bangla" />
              English
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
