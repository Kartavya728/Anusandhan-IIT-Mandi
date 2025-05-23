"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import {
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie,
  FaBullhorn,
  FaBookOpen,
} from "react-icons/fa";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}
const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${className || ''}`}>
    {children}
  </span>
);

interface FooterLinkItem {
  icon?: React.ElementType;
  imageSrc?: string; // NEW: for image instead of icon
  text: string;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLinkItem[];
}

const footerData: FooterColumn[] = [
  {
    title: "Community",
    links: [
      { imageSrc: "/scri.png", text: "SCRI IIT Mandi", href: "https://scri-iitmandi.in" },
      { imageSrc: "/iit.png", text: "Gymkhana IIT Mandi", href: "" }, // Add actual link if available
    ],
  },
  {
    title: "Quick Contact",
    links: [
      { icon: FaPhoneAlt, text: "+91 12345 67890", href: "tel:+911234567890" },
      { icon: FaEnvelope, text: "info@anusandhan.events", href: "mailto:info@anusandhan.events" },
      { icon: FaMapMarkerAlt, text: "IIT Mandi, Kamand, HP", href: "#map-section" },
    ],
  },
  {
    title: "About",
    links: [
      { text: "IIT Mandi", href: "https://www.iitmandi.ac.in/" },
      { text: "SCRI", href: "#scri-about" },
      { text: "Anusandhan", href: "#anusandhan-about" },
    ],
  },
];

interface KeyContact {
  role: string;
  icon: React.ElementType;
  name: string;
  titles: string[];
  email: string;
  phone?: string;
  phones?: string[];
}

const keyContactsData: KeyContact[] = [
  {
    role: "Organising Secretary",
    icon: FaUserTie,
    name: "Jeet Bandhu Lahiri",
    titles: [
      "Organising Secretary Anusandhan 3.0",
      "SCRI Club Co-ordinator",
      "IIT Mandi, Mandi - 175005",
    ],
    email: "scri@students.iitmandi.ac.in",
  },
  {
    role: "Sponsorship Head",
    icon: FaBullhorn,
    name: "Jasmeet Singh",
    titles: [
      "Sponsorship Head, Anusandhan 3.0",
      "SCRI Club Co-ordinator",
      "IIT Mandi, Mandi - 175005",
    ],
    email: "scri@students.iitmandi.ac.in",
  },
];

const Footer = () => (
  <div className="w-full z-10 bg-slate-900 text-slate-300 shadow-lg p-6 md:p-10 relative">
    <div className="w-full max-w-screen-xl flex flex-col items-center justify-center mx-auto">
      {/* Key Contacts Section */}
      <div className="w-full mb-10 md:mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8 md:mb-10">
          <GradientText>Contact Details</GradientText>
        </h2>
        <div className={`grid grid-cols-1 ${keyContactsData.length > 1 ? 'md:grid-cols-2' : ''} gap-8`}>
          {keyContactsData.map((contact) => (
            <div key={contact.role} className="bg-slate-800 p-6 rounded-lg shadow-md flex flex-col items-start">
              <div className="flex items-center mb-3">
                <contact.icon className="text-3xl text-cyan-400 mr-3" />
                <h4 className="text-lg font-semibold text-slate-100">{contact.role}</h4>
              </div>
              <p className="text-md font-medium text-slate-200">{contact.name}</p>
              {contact.titles.map(title => (
                <p key={title} className="text-xs text-slate-400">{title}</p>
              ))}
              <div className="mt-3 space-y-1 w-full">
                <a href={`mailto:${contact.email}`} className="flex items-center text-sm text-purple-300 hover:text-purple-200 hover:underline">
                  <FaEnvelope className="mr-2" /> {contact.email}
                </a>
                {contact.phone && (
                  <a href={`tel:${contact.phone}`} className="flex items-center text-sm text-purple-300 hover:text-purple-200 hover:underline">
                    <FaPhoneAlt className="mr-2" /> {contact.phone}
                  </a>
                )}
                {contact.phones && contact.phones.map(phoneNum => (
                  <a key={phoneNum} href={`tel:${phoneNum}`} className="flex items-center text-sm text-purple-300 hover:text-purple-200 hover:underline">
                    <FaPhoneAlt className="mr-2" /> {phoneNum}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16 text-center sm:text-left border-t border-slate-700 pt-8 md:pt-10">
        {footerData.map((column) => (
          <div key={column.title} className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-lg mb-4">
              <GradientText>{column.title}</GradientText>
            </h3>
            {column.links.map((link) => (
              <a
                key={link.text}
                href={link.href || "#"}
                className="flex flex-row items-center my-1.5 cursor-pointer group hover:text-cyan-400 transition-colors duration-200"
                target={link.href?.startsWith("http") || link.href?.startsWith("mailto:") || link.href?.startsWith("tel:") ? "_blank" : "_self"}
                rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.imageSrc ? (
                  <Image src={link.imageSrc} alt={link.text} width={20} height={20} className="rounded-full object-cover group-hover:scale-110 transition-transform duration-200" />
                ) : link.icon ? (
                  <link.icon className="text-xl text-cyan-500 group-hover:text-purple-500 transition-colors duration-200" />
                ) : null}
                <span className={`text-sm ${link.icon || link.imageSrc ? "ml-2" : ""}`}>{link.text}</span>
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-sm text-center text-slate-400 border-t border-slate-700 pt-8">
        <p>© {new Date().getFullYear()} IIT Mandi. All rights reserved.</p>
        <p className="mt-1">Design and Developed by Kartavya Suryawanshi</p>
      </div>
    </div>
  </div>
);

export default Footer;
