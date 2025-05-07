"use client";
import React, { useEffect, useRef, ReactNode } from 'react'; // Added ReactNode
import { motion, Variants as FramerVariants } from 'framer-motion'; // Added Variants as FramerVariants for clarity

// It's good practice to declare Leaflet types if you use them extensively.
// For this component, direct 'any' might be acceptable for window.L if not installing @types/leaflet
declare global {
  interface Window {
    L: any; // Use 'any' or install @types/leaflet for proper Leaflet types
  }
}

// IIT Mandi coordinates (constants are fine as they are)
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
  const mapRef = useRef<HTMLDivElement | null>(null); // Typed the ref for the map div
  const mapInstanceRef = useRef<any | null>(null); // Leaflet map instance, 'any' or specific Leaflet type
  const LRef = useRef<any | null>(null); // Leaflet 'L' object, 'any' or specific Leaflet type

  useEffect(() => {
    if (!document.getElementById('leaflet-css')) {
      const leafletCSS = document.createElement('link');
      leafletCSS.id = 'leaflet-css';
      leafletCSS.rel = 'stylesheet';
      leafletCSS.href = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
      leafletCSS.integrity = 'sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=';
      leafletCSS.crossOrigin = '';
      document.head.appendChild(leafletCSS);
    }

    const loadLeafletJS = (): Promise<boolean> => { // Typed the return Promise
      return new Promise((resolve) => {
        if (window.L) {
          LRef.current = window.L;
          resolve(true);
          return;
        }
        if (document.getElementById('leaflet-js')) {
          let attempts = 0;
          const intervalId = setInterval(() => { // Store intervalId to clear it
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
      const L = LRef.current; // L is now 'any' or your Leaflet type

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
  }, []); // Empty dependency array for mount/unmount effect

  return (
    <div className="flex flex-col items-center w-full py-10 px-4 bg-slate-900 rounded-lg shadow-xl relative z-10">
      <motion.div
        className="w-full"
        variants={contentWrapperVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          variants={titleVariants}
        >
          <GradientText>IIT Mandi Location</GradientText>
        </motion.h2>

        <motion.div
          className="w-full max-w-3xl mx-auto"
          variants={mapContainerVariants}
        >
<div
  ref={mapRef}
  className="w-full h-96  max-w-16xl mx-auto rounded-2xl border-4 border-cyan-400 shadow-2xl overflow-hidden"
/>

        </motion.div>

        <motion.div className="mt-8 text-center" variants={textBlockVariants}>
          <p className="text-lg font-semibold text-slate-100">Indian Institute of Technology Mandi</p>
          <p className="text-slate-300">Kamand Campus, Himachal Pradesh 175005</p>
          <p className="text-slate-400 mt-2">Coordinates: {IIT_MANDI_LAT}, {IIT_MANDI_LNG}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}