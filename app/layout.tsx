import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

// app/layout.tsx
export const metadata = {
  title: "Anusandhan 3.0 | IIT Mandi",
  description: "Anusandhan 3.0 is a premier research symposium organized by the Research Society of IIT Mandi, showcasing cutting-edge research and innovation.",
  icons: {
    icon: "/scrilogo.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#e9e5ff] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
