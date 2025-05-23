import Image from "next/image";
import Link from "next/link"; // Import the Link component
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 left-0 z-50 bg-[#03001417] backdrop-blur-md shadow-md shadow-[#2A0E61]/50 px-6 md:px-10">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="#top" className="flex items-center gap-3"> {/* Changed <a> to <Link> */}
          <Image
            src="/iit.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-spin-slow"
          />
          <span className="font-bold text-lg text-black hidden md:block">
            Anusandha IIT Mandi
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 bg-[#0300145e] border border-[#7042f861] px-6 py-2 rounded-full text-sm text-gray-200 backdrop-blur-lg shadow-inner shadow-[#7042f850]">
          <Link href="#about-me" className="hover:text-purple-300 transition-all duration-200">About</Link> {/* Changed <a> to <Link> */}
          <Link href="#events" className="hover:text-purple-300 transition-all duration-200">Events</Link> {/* Changed <a> to <Link> */}
          <Link href="#speaker" className="hover:text-purple-300 transition-all duration-200">commitee</Link> {/* Changed <a> to <Link> */}
          <Link href="#registration" className="hover:text-purple-300 transition-all duration-200">Registration</Link> {/* Changed <a> to <Link> */}
          <Link href="#contact" className="hover:text-purple-300 transition-all duration-200">Contact</Link> {/* Changed <a> to <Link> */}
        </div>

        {/* Right Label - This is not a link, so it remains a div */}
<div className="flex items-center gap-1 text-purple-700 font-semibold text-sm md:text-base hover:scale-105 transition-transform duration-200">
  <Image
    src="/scri.png"
    alt="logo"
    width={40}
    height={40}
    className="cursor-pointer hover:animate-spin-slow"
  />
  <span>SCRI IIT Mandi</span>
</div>

      </div>
    </div>
  );
};

export default Navbar;