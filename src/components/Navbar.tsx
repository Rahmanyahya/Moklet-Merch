import React from "react";
import logo from "../assets/IMMORTAL CUP.png";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="flex gap-10 absolute mt-8 *:z-20 w-full items-center p-4 bg-transparent text-white pt-0">
        <a href="/" className="flex items-center ml-20">
          <Image
            src={logo}
            alt="Moklet Merch Logo"
            className="h-[40px] w-[200x] mr-2 "
          />
          <span className="font-bold text-lg"></span>
        </a>

        {/* link */}
        <div className="flex justify-between items-center w-full mr-20 text-2xl">
          <div className="gap-x-[50px] flex">
            <a href="../home" className="hover:text-gray-300 ">
              Home
            </a>
            <a href="../News" className="hover:text-gray-300">
              News
            </a>
            <a href="../Clasement" className="hover:text-gray-300">
              Clasement
            </a>
            <a href="./Footer" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
