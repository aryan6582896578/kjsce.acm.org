import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamCard from "./TeamCard";

gsap.registerPlugin(ScrollTrigger);

function Team2() {
  const cardRef = useRef([]);
  const imagesRef = useRef([]);

  const teams = [
    {
      teamName: "Tech Team",
      members: [
        {
          name: "Minav",
          img: "https://via.placeholder.com/150",
          info: "Full Stack",
        },
        {
          name: "Viraj",
          img: "https://via.placeholder.com/150",
          info: "Full Stack",
        },
        {
          name: "Om",
          img: "https://via.placeholder.com/150",
          info: "Full Stack",
        },
        {
          name: "Ashu",
          img: "https://via.placeholder.com/150",
          info: "Full Stack Developer",
        },
        {
          name: "Yash",
          img: "https://via.placeholder.com/150",
          info: "CP Boi",
        },
      ],
    },
    {
      teamName: "Creative Team",
      members: [
        {
          name: "Minav",
          img: "https://via.placeholder.com/150",
          info: "Full Stack",
        },
        {
          name: "Viraj",
          img: "https://via.placeholder.com/150",
          info: "Full Stack",
        },
        {
          name: "Om",
          img: "https://via.placeholder.com/150",
          info: "Full Stack",
        },
        {
          name: "Ashu",
          img: "https://via.placeholder.com/150",
          info: "Full Stack Developer",
        },
        {
          name: "Yash",
          img: "https://via.placeholder.com/150",
          info: "CP Boi",
        },
      ],
    },
    {
      teamName: "Marketing Team",
      members: [
        {
          name: "Minav",
          img: "https://via.placeholder.com/150",
          info: "Full Stack",
        },
        {
          name: "Viraj",
          img: "https://via.placeholder.com/150",
          info: "Full Stack",
        },
        {
          name: "Om",
          img: "https://via.placeholder.com/150",
          info: "Full Stack",
        },
        {
          name: "Ashu",
          img: "https://via.placeholder.com/150",
          info: "Full Stack Developer",
        },
        {
          name: "Yash",
          img: "https://via.placeholder.com/150",
          info: "CP Boi",
        },
      ],
    },
  ];

  useEffect(() => {
    // gsap.to(cardRef.current, {
    //   width: "50%",
    //   ease: "power1.out",
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: cardRef.current,
    //     start: "top-=200px center",
    //     end: "top-=150px top",
    //     scrub: 0.02,
    //     markers: true,
    //   },
    // });

    // gsap.to(imagesRef.current, {
    //   opacity: 1,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: cardRef.current,
    //     start: "top center",
    //     scrub: 0.02,
    //   },
    // });

    teams.forEach((team, index) => {
      gsap.to(cardRef.current[index], {
        width: "50%",
        ease: "power1.out",
        duration: 3,
        scrollTrigger: {
          trigger: cardRef.current[index],
          start: "top-=200px center",
          end: "top-=150px top",
          scrub: 0.02,
          markers: true,
        },
      });

      gsap.to(imagesRef.current[index], {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imagesRef.current[index],
          start: "top center",
          scrub: 0.02,
        },
      });
    });
  }, []);

  

  return (
    <>
      <div className="my-5 h-[200vh] flex flex-col">
        <div className="flex items-center w-[100%] justify-center">
          <h1 className="text-4xl uppercase font-black dark:text-white text-black md:px-8 mb-4 pb-4 md:mb-8 border-b-cyan-400 border-b-2 title">
            Our Team
          </h1>
        </div>
        {/* <TeamCard cardRef={cardRef} team={teams[0]} imagesRef={imagesRef} index={0}/> */}
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

