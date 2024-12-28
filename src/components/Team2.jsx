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
        duration: 3,
        scrollTrigger: {
          trigger: cardRef.current[index],
          start: "top+=10rem center",
          end: "top+=100rem center",
          scrub: 0.02,
          markers: false,
        },
      });
    });
  }, []);

  

  return (
    <>
      <div id = "our-team" className="my-5 h-full flex flex-col">
        <div className="flex flex-col items-center w-full justify-center">
          <h1 className="text-4xl uppercase font-black dark:text-white text-white md:px-8 mb-4 pb-4 md:mb-8 border-b-cyan-400 border-b-2 title">
            Our Team
          </h1>
          <div className="flex sm:flex-row flex-col items-center w-auto gap-4 justify-around mt-8 bg-gradient-to-b from-[#197EB2] to-black shadow-lg rounded-lg p-4">
              <img src="/assets/Faculty_Sponsor.jpg" alt="Faculty Sponsor" className="sm:w-auto w-1/2 sm:h-1/4 h-auto rounded-lg shadow-lg" />
              <div className="sm:text-2xl text-xl">
                <h2 className="font-bold mb-4 dark:text-white text-white">Faculty Sponsor</h2>
                <p className=" dark:text-gray-300 text-white">Dr. Prasanna Jaichand Shete</p>
                <p className=" dark:text-gray-300 text-white">Associate Professor at K J Somaiya School of Engineering</p>
                <p className=" dark:text-gray-300 text-white">Email: prasannashete@somaiya.edu</p>
              </div>
          </div>
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

