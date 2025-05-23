"use client";
import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, Variants as FramerVariants } from 'framer-motion';

declare global {
  interface Window {
    L: any; // Use 'any' or install @types/leaflet
  }
}

// IIT Mandi coordinates
const IIT_MANDI_LAT = 31.7754;
const IIT_MANDI_LNG = 76.9861;

// Gradient Text Component
interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${className || ''}`}>
    {children}
  </span>
);

// Animation Variants - Explicitly typed
const contentWrapperVariants: FramerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants: FramerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const mapContainerVariants: FramerVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textBlockVariants: FramerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function LeafletMapIITMandi(): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any | null>(null);
  const LRef = useRef<any | null>(null);

  useEffect(() => {
    // Leaflet setup (as before)
    if (!document.getElementById('leaflet-css')) {
      const leafletCSS = document.createElement('link');
      leafletCSS.id = 'leaflet-css';
      leafletCSS.rel = 'stylesheet';
      leafletCSS.href = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
      leafletCSS.integrity = 'sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=';
      leafletCSS.crossOrigin = '';
      document.head.appendChild(leafletCSS);
    }

    const loadLeafletJS = (): Promise<boolean> => {
      return new Promise((resolve) => {
        if (window.L) {
          LRef.current = window.L;
          resolve(true);
          return;
        }
        if (document.getElementById('leaflet-js')) {
          let attempts = 0;
          const intervalId = setInterval(() => {
            if (window.L) {
              LRef.current = window.L;
              clearInterval(intervalId);
              resolve(true);
            } else if (attempts > 20) {
              clearInterval(intervalId);
              console.error("Timeout waiting for Leaflet JS to load.");
              resolve(false);
            }
            attempts++;
          }, 100);
          return;
        }

        const script = document.createElement('script');
        script.id = 'leaflet-js';
        script.src = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js';
        script.integrity = 'sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=';
        script.crossOrigin = '';
        script.onload = () => {
          LRef.current = window.L;
          resolve(true);
        };
        script.onerror = () => {
          console.error("Failed to load Leaflet JS.");
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };

    let isMounted = true;

    const initializeMap = async () => {
      const leafletLoaded = await loadLeafletJS();
      if (!leafletLoaded || !LRef.current || !mapRef.current || !isMounted) {
        if (!leafletLoaded) console.warn("Leaflet script not loaded for map initialization.");
        return;
      }
      const L = LRef.current;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      try {
        // Ensure mapRef.current is not null before using it
        if (mapRef.current) {
            mapInstanceRef.current = L.map(mapRef.current, { preferCanvas: true }).setView([IIT_MANDI_LAT, IIT_MANDI_LNG], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapInstanceRef.current);
            L.marker([IIT_MANDI_LAT, IIT_MANDI_LNG])
            .addTo(mapInstanceRef.current)
            .bindPopup('<b>IIT Mandi</b><br>Kamand Campus')
            .openPopup();
        }
      } catch (error) {
        console.error("Error initializing Leaflet map:", error);
      }
    };

    initializeMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full py-10 px-4 rounded-lg relative z-10">  {/* Main container: Adding background and padding*/}
      <motion.div
        className="w-full max-w-4xl mx-auto" // Add max-width for better layout
        variants={contentWrapperVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-4 text-center" // Reduced mb
          variants={titleVariants}
        >
          <GradientText>IIT Mandi Location & Travel</GradientText>  {/* Changed Heading */}
        </motion.h2>
      {/* Added  Information Section */}
        <motion.div variants={textBlockVariants} className="mb-8">
          <p className="text-lg font-semibold text-black mb-2">Welcome to Anusandhan 2.O!</p>
          <p className="text-slate-800 mb-4">Anusandhan 2.O will be held at the Indian Institute of Technology Mandi (IIT Mandi) from 18th-19th June 2024. Mandi is very well connected through roads from Delhi and Chandigarh. Public transport of Himachal Pradesh, Rajasthan, Punjab and Haryana roadways ply their buses on this route. Private luxury buses are readily available to travel on this route through the road. Most of the buses operate during night and reach Mandi early in the morning. One may easily hire a car from Delhi & Chandigarh to reach Mandi. </p>

          <p className="text-lg font-semibold text-black mb-2">Distance & average journey time from major cities to Mandi via road:</p>
          <ul className="list-disc list-inside text-slate-800">
            <li>Delhi : 430 Km (8.5 hrs)</li>
            <li>Chandigarh : 185 Km (04 hrs)</li>
            <li>Ambala : 235 Km (05 hrs)</li>
            <li>Ropar : 140 Km (03 hrs)</li>
          </ul>

          <p className="text-lg font-semibold text-black mt-4 mb-2">Local/ City Transport:</p>
          <p className="text-slate-800">IIT Mandi North campus is approximately 23 Km from Mandi bus stand. It takes 40-45 minutes to reach IIT Mandi campus from Mandi bus stand Himachal roadways, private buses & cars on rent are available to travel from Mandi bus terminal to Kamand or Salgi village. The buses normally ply during day time on regular intervals. Cars on rent are available from outside of Mandi bus station round the clock. Normal cab charges from Mandi bus stand to campus is between 800 to 1000 Rs.</p>

          <p className="text-lg font-semibold text-black mt-4 mb-2">Institute Transport Service:</p>
          <p className="text-slate-800">Visitors/ Guests may request to book a car/cab from the institute. The service is subject to availability of vehicles</p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="w-full"
          variants={mapContainerVariants}
        >
          <div
            ref={mapRef}
            className="w-full h-96  max-w-16xl mx-auto rounded-2xl border-4 border-cyan-400 shadow-2xl overflow-hidden"
          />
        </motion.div>

        <motion.div className="mt-6 text-center" variants={textBlockVariants}> {/* Reduced mt */}
          <p className="text-lg font-semibold text-black">Indian Institute of Technology Mandi</p>
          <p className="text-slate-950">Kamand Campus, Himachal Pradesh 175005</p>
          <p className="text-slate-950 mt-2">Coordinates: {IIT_MANDI_LAT}, {IIT_MANDI_LNG}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}