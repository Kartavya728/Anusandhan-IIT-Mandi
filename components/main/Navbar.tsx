import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 left-0 z-50 bg-[#03001417] backdrop-blur-md shadow-md shadow-[#2A0E61]/50 px-6 md:px-10">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-spin-slow"
          />
          <span className="font-bold text-lg text-black hidden md:block">
            Anusandha IIT Mandi
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 bg-[#0300145e] border border-[#7042f861] px-6 py-2 rounded-full text-sm text-gray-200 backdrop-blur-lg shadow-inner shadow-[#7042f850]">
          <a href="#about-me" className="hover:text-purple-300 transition-all duration-200">About</a>
          <a href="#events" className="hover:text-purple-300 transition-all duration-200">Events</a>
          <a href="#speaker" className="hover:text-purple-300 transition-all duration-200">Speakers</a>
          <a href="#registration" className="hover:text-purple-300 transition-all duration-200">Registration</a>
          <a href="#contact" className="hover:text-purple-300 transition-all duration-200">Contact</a>
        </div>

        {/* Right Label */}
        <div className="text-purple-700 font-semibold text-sm md:text-base hover:scale-105 transition-transform duration-200">
          SCRI IIT Mandi
        </div>
      </div>
    </div>
  );
};

export default Navbar;
