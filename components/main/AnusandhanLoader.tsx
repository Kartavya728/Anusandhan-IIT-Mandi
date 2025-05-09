// src/app/components/main/AnusandhanLoader.tsx
"use client"; // Not strictly necessary if no client hooks are used directly in THIS component, but good practice.

import React from "react";

const AnusandhanLoader: React.FC = () => {
  const text = "ANUSANDHAN";
  const letters = text.split('');

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900">
      <div className="text-center">
        <div className="flex justify-center items-end space-x-1 md:space-x-2">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white animate-letterPopIn"
              style={{
                animationDelay: `${index * 0.15}s`,
                // Optional: add a subtle glow effect using text-shadow that fades in
                // textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #cc00ff, 0 0 20px #cc00ff, 0 0 25px #cc00ff, 0 0 30px #cc00ff, 0 0 35px #cc00ff`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <p
          className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-gray-300 animate-fadeInSlow"
          style={{ animationDelay: `${letters.length * 0.15 + 0.5}s` }} // Start after letters finish
        >
          Embarking on a Journey of Discovery...
        </p>
      </div>
      {/* Optional: Add some subtle background elements or shapes animating */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/20 blur-2xl animate-pulseSlow"></div> */}
    </div>
  );
};

export default AnusandhanLoader;