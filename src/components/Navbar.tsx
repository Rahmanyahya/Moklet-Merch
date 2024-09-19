import React from 'react';
import logo from "../assets/MokletMerchLogo2.png"; 
import Image from 'next/image'

const Navbar: React.FC = () => {
  return (
    <div>
      <header className="flex justify-start gap-10 absolute z-20 w-full items-center p-4 bg-transparent text-white pt-0 ">
 
        <a href="/" className="flex items-center ml-20">
          <Image src={logo} alt="Moklet Merch Logo" className="h-[156px] w-[156px] mr-2 " />
          <span className="font-bold text-lg"></span>
        </a>
        
        <nav className="flex space-x-8 mr-20 text-2xl">
          <a href="/" className="hover:text-gray-300 ">Product</a>
          <a href="/" className="hover:text-gray-300">How To Order</a>
          <a href="/" className="hover:text-gray-300">Pre-release</a>
        </nav>

      </header>
    </div>
  );
};

export default Navbar;