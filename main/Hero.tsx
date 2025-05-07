import React from "react";
import HeroContent from "../sub/HeroContent";
import Aboutiit from "../sub/AboutIIT";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <Aboutiit/>
      <HeroContent />
      
    </div>
  );
};

export default Hero;
