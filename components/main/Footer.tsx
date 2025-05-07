"use client"; // Add if any client-side interactions or hooks are used, though unlikely for a simple footer.

import React, { ReactNode } from "react"; // Import ReactNode
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo, // Not used in provided JSX, but kept import
  RxTwitterLogo,   // Not used
  RxLinkedinLogo,  // Not used
} from "react-icons/rx";
import { FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Added more relevant icons

// Gradient Text Component (define or import if not globally available)
interface GradientTextProps {
  children: ReactNode;
  className?: string;
}
const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${className || ''}`}>
    {children}
  </span>
);

// Interface for Footer Link Item
interface FooterLinkItem {
  icon?: React.ElementType; // Icon component
  text: string;
  href?: string; // Optional link
}

// Interface for Footer Column
interface FooterColumn {
  title: string;
  links: FooterLinkItem[];
}

const footerData: FooterColumn[] = [
  {
    title: "Community",
    links: [
      { icon: FaYoutube, text: "Youtube", href: "https://youtube.com" }, // Replace with actual links
      { icon: RxGithubLogo, text: "Github", href: "https://github.com" },
      { icon: RxDiscordLogo, text: "Discord", href: "https://discord.com" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { icon: FaPhoneAlt, text: "+91 12345 67890", href: "tel:+911234567890" },
      { icon: FaEnvelope, text: "scri@students.iitmandi.ac.in", href: "mailto:scri@students.iitmandi.ac.in" },
      { icon: FaMapMarkerAlt, text: "IIT Mandi, Kamand, HP", href: "#map-section" }, // Link to map section or Google Maps
    ],
  },
  {
    title: "About",
    links: [
      { text: "IIT Mandi", href: "https://www.iitmandi.ac.in/" },
      { text: "SCRI", href: "#scri-about" }, // Placeholder links
      { text: "Anusandhan", href: "#anusandhan-about" },
    ],
  },
];


const Footer = (): JSX.Element => {
  return (
    // Footer container: Changed background to dark slate, text to light base.
    <div className="w-full bg-slate-900 text-slate-300 shadow-lg p-6 md:p-10">
      <div className="w-full max-w-screen-xl flex flex-col items-center justify-center mx-auto">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12 text-center sm:text-left">
          {footerData.map((column) => (
            <div key={column.title} className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold text-lg mb-4">
                <GradientText>{column.title}</GradientText>
              </h3>
              {column.links.map((link) => (
                <a // Changed p to a for actual links
                  key={link.text}
                  href={link.href || "#"} // Default href if not provided
                  className="flex flex-row items-center my-2 cursor-pointer group hover:text-cyan-400 transition-colors duration-200"
                  target={link.href && link.href.startsWith('http') ? "_blank" : "_self"}
                  rel={link.href && link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                >
                  {link.icon && <link.icon className="text-xl text-cyan-500 group-hover:text-purple-500 transition-colors duration-200" />}
                  <span className={`text-sm ${link.icon ? 'ml-2' : ''}`}>{link.text}</span>
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-4 text-sm text-center text-slate-400">
          <p>© {new Date().getFullYear()} IIT Mandi. All rights reserved.</p>
          <p className="mt-1">
            Site by Kartavya Suryawanshi and Shivam Kumar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;