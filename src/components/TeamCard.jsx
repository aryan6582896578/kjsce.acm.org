
import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const TeamCard = ({cardRef,team, imagesRef,index}) => {
    const [selectedMember, setSelectedMember] = useState(null);
  
  
    const handleMemberClick = (member) => {
      setSelectedMember(member);
  
      gsap.fromTo(
        cardRef.current[index],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
  
      setTimeout(() => {
        setSelectedMember(null);
      }, 5000);
    };
  
    return (
      <>
        <div className="box w-full h-96 bg-gray-800 flex items-center relative mt-5">
          <div
            className="bg-white h-full md:w-full flex justify-center items-center text-2xl p-4 text-center"
            ref={(el) => (cardRef.current[index] = el)}
          >
            {selectedMember !== null ? (
              <div>
                <h2 className="font-bold text-xl">{selectedMember.name}</h2>
                <p className="text-gray-700">{selectedMember.info}</p>
              </div>
            ) : (
              "Tech Team"
            )}
          </div>
  
          <div
            className="relative lg:absolute md:h-full md:right-0 md:w-1/2 h-1/2 bottom-0 flex flex-col items-center justify-center opacity-0"
            ref={(el) => (imagesRef.current[index] = el)}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
              {team.members.map((member, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer"
                  onClick={() => handleMemberClick(member)}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-full w-16 h-16 md:w-24 md:h-24"
                  />
                  <p className="text-white text-sm md:text-base mt-2">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

export default TeamCard