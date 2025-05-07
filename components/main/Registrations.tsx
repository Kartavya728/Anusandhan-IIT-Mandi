"use client";

import React from "react"; // useRef and useInView are no longer needed here directly
import { motion } from "framer-motion"; // Only motion is needed if you keep other motion elements

// If RegistrationCardItem is in the same file, it's already defined.
// If in a separate file, you'd import it:
// import { RegistrationCardItem } from './RegistrationCardItem'; // Adjust path as needed

// Original RegistrationItem interface - let's rename it slightly to avoid confusion with the new component's props
interface RegistrationItemData {
  id: string | number;
  title: string;
  registrationLink: string;
  price: string;
}

const registrationItems: RegistrationItemData[] = [
  {
    id: 1,
    title: "Student Participants (External)",
    registrationLink: "https://example.com/register/student-external",
    price: "₹3000",
  },
  {
    id: 2,
    title: "Faculty/Staff Participants (External)",
    registrationLink: "https://example.com/register/faculty-external",
    price: "₹5000",
  },
  {
    id: 3,
    title: "Student Participants (Internal - IIT Mandi)",
    registrationLink: "https://example.com/register/student-internal",
    price: "₹1000",
  },
  {
    id: 4,
    title: "Faculty/Staff Participants (Internal)",
    registrationLink: "https://example.com/register/faculty-internal",
    price: "₹3000",
  },
  {
    id: 5,
    title: "Accompanying Person",
    registrationLink: "https://example.com/register/accompanying",
    price: "₹2000",
  },
  {
    id: 6,
    title: "Participants from Industry",
    registrationLink: "https://example.com/register/industry",
    price: "₹5000",
  },
  {
    id: 7,
    title: "Participants from Abroad",
    registrationLink: "https://example.com/register/abroad",
    price: "$100",
  },
];

// (Definition of RegistrationCardItem component from above would go here if in the same file)
// --- Start of RegistrationCardItem (if in same file) ---
interface RegistrationCardItemProps {
  item: RegistrationItemData;
  index: number;
}

function RegistrationCardItem({ item, index }: RegistrationCardItemProps) {
  const ref = React.useRef(null); // Explicitly use React.useRef
  const { useInView } = require("framer-motion"); // If framer-motion is a CJS module in your setup, or import directly
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl border-2 z-40 shadow-lg overflow-hidden p-6 flex flex-col sm:flex-row justify-between items-center"
      style={{
        borderImage: "linear-gradient(to right, #7C3AED, #60A5FA) 1",
      }}
    >
      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
          {item.title}
        </h3>
        <p className="text-base font-medium text-red-600">{item.price}</p>
      </div>
      <motion.a
        href={item.registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 sm:mt-0 sm:ml-6 px-6 py-2 z-50 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-400 hover:from-purple-700 hover:to-blue-500 transition-all shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Register
      </motion.a>
    </motion.li>
  );
}
// --- End of RegistrationCardItem (if in same file) ---


export function RegistrationCards() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ul className="flex flex-col gap-6">
        {registrationItems.map((item, index) => (
          // Use the new component here
          // The key should be on the component rendered directly by map
          <RegistrationCardItem key={item.id} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default RegistrationCards;