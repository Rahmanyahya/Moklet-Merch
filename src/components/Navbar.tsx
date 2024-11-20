import React from "react";
import Image from "next/image";
import logo from "../assets/IMMORTAL CUP.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent text-white mt-4">
      <div className="w-full flex items-center justify-between mx-4 sm:px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Uncomment the Image component if you want to use the logo */}
          {/* <Image src={logo} alt="IMMORTAL CUP Logo" className="h-10 w-auto mr-2" /> */}
          <h1 className="font-bold text-lg leading-tight">
            SportTechnology <br /> Moklet
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className="hidden md:flex items-center space-x-8"
          id="navbar-default"
        >
          <a
            href="../home"
            className="text-white rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500 px-3 py-2"
          >
            Home
          </a>
          <a
            href="../News"
            className="text-white rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500 px-3 py-2"
          >
            News
          </a>
          <a
            href="../TopPlayer"
            className="text-white rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500 px-3 py-2"
          >
            Top Player
          </a>
          <a
            href="#wa"
            className="text-white rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500 px-3 py-2"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
