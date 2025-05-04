/*
  Footer.jsx
  React component with Tailwind CSS for the "Eye-Opening Presentations" layout, plus bottom footer.
*/
import React from "react";

function Footer() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Column */}
        <div className="w-1/2 flex items-start justify-center">
          <h1 className="text-7xl text-black uppercase leading-tight mt-16 font-bold font-['Founders-Grotesk'] transform -translate-x-35 tracking-tighter">
            Eye-
            <br />
            Openning
          </h1>
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex flex-col pt-16 pr-16 space-y-12">
          {/* Header */}
          <h2 className="text-6xl text-black uppercase leading-none font-bold font-['Founders-Grotesk-X-Condensed'] tracking-tighter">
            Presentations
          </h2>

          {/* Row 1: S elements only */}
          <div className="flex">
            <div className="flex flex-col space-y-1 text-black font-['Neue-Montreal']">
              <span className="font-bold uppercase">S:</span>
              <a href="#" className="underline">Instagram</a>
              <a href="#" className="underline">Behance</a>
              <a href="#" className="underline">Facebook</a>
              <a href="#" className="underline">LinkedIn</a>
            </div>
          </div>

          {/* Row 2: Locations and Menu */}
          <div className="flex justify-between text-black font-['Neue-Montreal']">
            {/* Locations */}
            <div className="flex flex-col space-y-1">
              <span className="font-bold uppercase">L:</span>
              <a href="#" className="underline">202-1965 W 4th Ave</a>
              <a href="#" className="underline">Vancouver, Canada</a>
              <a href="#" className="underline mt-2">30 Chukaryna St</a>
              <a href="#" className="underline">Lviv, Ukraine</a>
            </div>

            {/* Menu */}
            <div className="flex flex-col space-y-1 text-black font-['Neue-Montreal']">
              <span className="font-bold uppercase">M:</span>
              <a href="#" className="underline">Home</a>
              <a href="#" className="underline">Services</a>
              <a href="#" className="underline">Our work</a>
              <a href="#" className="underline">About us</a>
              <a href="#" className="underline">Insights</a>
              <a href="#" className="underline">Contact us</a>
            </div>
          </div>

          {/* Row 3: E element only */}
          <div className="flex -py-5" >
            <div className="flex flex-col space-y-1 text-black font-['Neue-Montreal']">
              <span className="font-bold uppercase">E:</span>
              <a href="mailto:hello@ochi.design" className="underline">hello@ochi.design</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex mt-8">
        {/* Left half: align logo under Eye-Opening column */}
        <div className="w-1/2 flex items-center justify-center py-4">
          <div className="text-4xl font-bold text-black font-[Neue-Montreal] -translate-x-65">
            ochi˙
          </div>
        </div>
        {/* Right half: legal under E and website under M */}
        <div className="w-1/2 flex justify-between items-center py-4 text-gray-500 font-[Neue-Montreal] text-sm">
          {/* Aligns under E: left side of right half */}
          <div>
            © ochi design 2025. <a href="#" className="underline">Legal Terms</a>
          </div>
          {/* Aligns under M: right side of right half */}
          <div>
            Website by Obys
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
