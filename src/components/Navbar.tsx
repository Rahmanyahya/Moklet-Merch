import React from "react";
import logo from "../assets/MokletMerchLogo2.png";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="flex gap-10 absolute z-20 w-full items-center p-4 bg-transparent text-white pt-0">
        <a href="/" className="flex items-center ml-20">
          <Image
            src={logo}
            alt="Moklet Merch Logo"
            className="h-[156px] w-[156px] mr-2 "
          />
          <span className="font-bold text-lg"></span>
        </a>

        {/* link */}
        <div className="flex justify-between items-center w-full mr-20 text-2xl">
          <div className="gap-x-[50px] flex">
            <a href="/" className="hover:text-gray-300 ">
              Product
            </a>
            <a href="/" className="hover:text-gray-300">
              How To Order
            </a>
            <a href="/" className="hover:text-gray-300">
              Pre-release
            </a>
          </div>
          {/* search */}
          <div>
            <input
              type="text"
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-2 focus:border-white"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
