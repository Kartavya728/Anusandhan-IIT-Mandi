// components/main/RegistrationSection.tsx
"use client";

import React from 'react';
import RegistrationCardItem from './RegistrationCardItem'; // Adjust path
import { FiExternalLink, FiDownload, FiInfo } from 'react-icons/fi';

// Define the RegistrationItemData interface
interface RegistrationItemData {
  id: string;
  title: string;
  registrationLink: string;
  price: string;
}

const registrationData: RegistrationItemData[] = [
  { id: "student-external", title: "Student Participants (External)", registrationLink: "#", price: "₹3000" },
  { id: "faculty-external", title: "Faculty/Staff Participants (External)", registrationLink: "#", price: "₹5000" },
  { id: "student-internal", title: "Student Participants (Internal - IIT Mandi)", registrationLink: "#", price: "₹1000" },
  { id: "faculty-internal", title: "Faculty/Staff Participants (Internal - IIT Mandi)", registrationLink: "#", price: "₹3000" },
  { id: "accompanying-person", title: "Accompanying Person", registrationLink: "#", price: "₹2000" },
  { id: "industry-participants", title: "Participants from Industry", registrationLink: "#", price: "₹5000" },
  { id: "abroad-participants", title: "Participants from Abroad", registrationLink: "#", price: "$100" },
];

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}
const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span 
    className={`text-transparent bg-clip-text ${className || ''}`}
    style={{
      backgroundImage: 'linear-gradient(90.01deg, #e59cff 0.01%, #ba9cff 50.01%, #9cb2ff 100%)'
    }}
  >
    {children}
  </span>
);

interface LinkItemProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
  isDownload?: boolean;
}
const LinkItem: React.FC<LinkItemProps> = ({ href, text, icon, isDownload }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-purple-300 hover:text-purple-200 hover:underline transition-colors duration-200 group py-1"
  >
    {icon ? <span className="mr-2 group-hover:animate-pulse">{icon}</span> : <FiExternalLink className="mr-2 text-purple-400 group-hover:text-purple-300" />}
    {text}
  </a>
);


function RegistrationSection() {
  const gradientBorderStyle = {
    borderImageSource: 'linear-gradient(90.01deg, #e59cff 0.01%, #ba9cff 50.01%, #9cb2ff 100%)',
    borderImageSlice: 1,
    borderWidth: '2px',
    borderStyle: 'solid',
  };

  return (
    <section 
      className="w-full bg-slate-900 text-slate-200 py-10 md:py-16 px-4"
      id="registration"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold pt-6 pb-8 md:pb-12 text-center">
          <GradientText>Registration & Submission</GradientText>
        </h1>
        
        {/* Registration Fees Section */}
        <div className="mb-8"> {/* Reduced bottom margin to bring button closer */}
          <h2 className="text-2xl font-semibold text-slate-100 mb-3 text-center sm:text-left">Registration Fees For Participants</h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 text-center sm:text-left">
            At least one author of each accepted abstract/full-length paper must register for the submitted work to be presented in the proceedings.
            Information about accommodation and food would be provided after acceptance of papers during registration.
          </p>
          <ul className="space-y-3 sm:space-y-4">
            {registrationData.map((item, index) => (
              <RegistrationCardItem key={item.id} item={item} index={index} />
            ))}
          </ul>
        </div>

        {/* Register Now Button - Centered */}
        <div className="text-center mb-16"> {/* Wrapper div for centering the button */}
          <a
            href="#registration" // Should ideally link to an actual registration form/page
            className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </a>
        </div>

        {/* Accommodation Information Section */}
        <div 
          className="mb-16 p-6 bg-slate-800 rounded-xl shadow-xl"
          style={gradientBorderStyle} 
        >
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center">
            <FiInfo className="mr-3 text-purple-400 text-3xl" />
            Accommodation Details
          </h2>
          <p className="text-slate-300 leading-relaxed mb-3">
            Participants will be asked to submit their accommodation preferences while submitting their registration forms. Hostel accommodation is complementary to the registration fee (for all registrations).
          </p>
          <p className="text-slate-300 leading-relaxed mb-3">
            Guest house accommodation will be booked on a payment basis (if available) per the institute norms. As we have a limited number of guest rooms, only a few people can be accommodated on a first-come, first-serve basis.
          </p>
          <p className="text-slate-300 leading-relaxed mb-3">
            The tariff of the guest house room is <strong className="text-slate-100">₹1200/- per day per room</strong>. Participants may share their requirements for pre-booking on the registration form and pay the guest house charge directly at the guest house reception during check-in.
          </p>
          <LinkItem 
            href="https://guesthouse.iitmandi.ac.in/" 
            text="View Guest House Information" 
          />
        </div>

        {/* Submission Information Section */}
        <div 
          className="p-6 bg-slate-800 rounded-xl shadow-xl"
          style={gradientBorderStyle}
        >
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">Paper Submission</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Selected full-length papers will be published in reputed Conference proceedings. Please adhere to the guidelines and use the templates provided below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <h3 className="text-lg font-medium text-slate-200 mb-2">General Links:</h3>
              <ul className="space-y-2">
                <li><LinkItem href="https://forms.gle/pPRLQjurUwcSSnR29" text="Submission Link" /></li>
                <li><LinkItem href="https://drive.google.com/file/d/19PiJNwd58LMkGlLxgEEwYIykOpDy_o4Y/view?usp=drive_link" text="Guidelines for Submission" /></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-200 mb-2">Templates:</h3>
              <ul className="space-y-2">
                <li><LinkItem href="https://docs.google.com/document/d/1naFDBsO8BOC4juSsVAERddfKNLobxh5E/edit?usp=drive_link&ouid=112465932494882823032&rtpof=true&sd=true" text="Template for Abstract Submission" icon={<FiDownload className="text-purple-400 group-hover:text-purple-300"/>} isDownload={true} /></li>
                <li><LinkItem href="https://docs.google.com/document/d/1zL2EYqc8LyVAZp8OKkpiT5qThPR7_Lxz/edit?usp=drive_link&ouid=112465932494882823032&rtpof=true&sd=true" text="Template for Full-Length Paper" icon={<FiDownload className="text-purple-400 group-hover:text-purple-300"/>} isDownload={true} /></li>
                <li><LinkItem href="https://docs.google.com/presentation/d/1ufBjjm5jtJCF5y5Rgzzpi1oaXUlZ1mfX/edit?usp=drive_link&ouid=112465932494882823032&rtpof=true&sd=true" text="Template for ORAL Presentation" icon={<FiDownload className="text-purple-400 group-hover:text-purple-300"/>} isDownload={true} /></li>
                <li><LinkItem href="https://docs.google.com/presentation/d/1yak6bi1DAvoJU7jKWHPJ-3hjCMaGW5XX/edit?usp=drive_link&ouid=112465932494882823032&rtpof=true&sd=true" text="Template for POSTER Presentation" icon={<FiDownload className="text-purple-400 group-hover:text-purple-300"/>} isDownload={true} /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationSection;