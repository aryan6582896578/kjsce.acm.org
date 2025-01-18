import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Sponsors() {
  const Sponsor = [
  "/sponsor/Beeceptor.png",
  "/sponsor/BlueSquirrel.png",
  "/sponsor/ConsoleGaming.jpg",
  "/sponsor/HouseOfDelicious.png", 
  "/sponsor/InterviewBuddy.png", 
  "/sponsor/Love&Latte.png",
  "/sponsor/MinistryOfGames.png",
  "/sponsor/Sip&Smile.jpg",
  "/sponsor/SnackRack.jpg",
  "/sponsor/Zapz.png"
  ];

  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollSpeed = 3;
    let animationFrameId;

    const loop = () => {
      if (!isHovered && slider) {
        slider.scrollLeft += scrollSpeed;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div id="sponsors" className="flex flex-col justify-center items-center p-8 md:mt-40 lg:mt-8 mt-[5rem]">
      <h1 className="text-4xl uppercase font-black dark:text-white text-white px-8 pb-4 mb-4 md:mb-8 border-b-cyan-400 border-b-2">
        Our Sponsors
      </h1>
      <div className="overflow-hidden mb-16 w-full h-auto">
        <div className="relative flex w-full"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}>
          <motion.div className="flex gap-4 overflow-hidden w-full" ref={sliderRef}>
            {[...Sponsor, ...Sponsor].map((imgSrc, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={imgSrc}
                  alt={`Slide ${index}`}
                  className="w-auto h-[120px] sm:h-[200px] object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
