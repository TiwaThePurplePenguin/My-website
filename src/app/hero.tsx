"use client"


import { useState, useEffect } from "react";
import TypewriterComponent from "typewriter-effect"


// below is where to change image path
const images = ["/ada.webp", "/the.jpeg", "/hi.jpeg"]; // Add your image paths
const Home = () => {
  const [currentImage, setCurrentImage] = useState
  (0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade in
      }, 500); // Match with the duration of transition
    }, 3000); // Change every 5s

    return () => clearInterval(interval);
},[]);
    return (
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background image fade transition */}
      <div className="absolute inset-0 transition-opacity duration-100000 ease-in-out">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            fade ? "opacity-100" : "opacity-30"
          }`}
          style={{ backgroundImage:` url(${images[currentImage]})` }}
        />
        <div className="absolute inset-0 bg-black/40" /> 
        
         {/* text on the image */}

         <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4 py-24 sm:py-32 md:py-36 space-y-6 sm:space-y-8 md:space-y-10">
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-300">
            Travel in Canada
          </h1>
          <div className="text-sm sm:text-base md:text-xl font-light text-zinc-200 max-w-2xl mx-auto">
          Anywhere in Canada
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
           <TypewriterComponent
              options={{
                strings: [
                  "Pei.",
                  "Quebec",
                  "New Brunswick",
                  "Nova Scotia",
                  "British Columbia",
                  "Ontario",
                  "Yukon",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        </div>
        </div>
        </div>
    );
  };

  export default Home