import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamCard from "./TeamCard";
import teams from "../data/team";

gsap.registerPlugin(ScrollTrigger);

function Team2() {
  const cardRef = useRef([]);
  const imagesRef = useRef([]);

  

  useEffect(() => {
    teams.forEach((team, index) => {
      gsap.to(cardRef.current[index], {
        width: "50%",
        ease: "power1.out",
        duration: 2,
        scrollTrigger: {
          trigger: cardRef.current[index],
          start: "top-=10rem bottom",
          end: "top-=2rem center", 
          scrub: 0.02,
          markers: false,
        },
      });

      gsap.to(imagesRef.current[index], {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imagesRef.current[index],
          start: "top+=10rem center",
          scrub: 0.02,
          markers: false,
        },
      });
    });
  }, []);

  

  return (
    <>
      <div className="my-5 h-full flex flex-col">
        <div className="flex items-center w-full justify-center">
          <h1 className="text-4xl uppercase font-black dark:text-white text-black md:px-8 mb-4 pb-4 md:mb-8 border-b-cyan-400 border-b-2 title">
            Our Team
          </h1>
        </div>
        {teams.map((team, index) => (
          <TeamCard
            cardRef={cardRef}
            team={team}
            imagesRef={imagesRef}
            index={index}
          />
        ))}
        </div>
    </>
  );
}

export default Team2;

