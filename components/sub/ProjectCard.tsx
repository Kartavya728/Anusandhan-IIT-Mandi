import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    // The outer container already has relative and overflow-hidden, which is helpful.
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">

      {/* 1. Create a wrapper div for the image */}
      {/* 2. Give it a fixed height (e.g., h-48 for 12rem/192px, adjust as needed) */}
      {/* 3. Ensure it's positioned relatively for the 'fill' prop on Image */}
      {/* 4. Ensure overflow is hidden (though the parent already does this, belt-and-suspenders) */}
      <div className="w-full h-48 relative overflow-hidden"> {/* <--- Adjust h-48 to your desired fixed height */}
        <Image
          src={src}
          alt={title}
          fill // Tells the image to fill its parent container
          className="object-cover" // Scales while preserving aspect ratio, cropping excess
                                   // to fill the container. This is the key for cropping.
          // No width/height props needed when using 'fill'
          // Optional: Add 'sizes' prop for optimization if needed, tells browser image size at different viewports
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content below the image */}
      <div className="relative p-4"> {/* Kept relative for potential future absolute elements inside */}
        <h1 className="text-2xl font-semibold text-black">{title}</h1>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
