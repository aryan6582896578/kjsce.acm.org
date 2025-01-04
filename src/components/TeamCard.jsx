import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import LinkedinIcon from "/assets/linkedin.svg";
import CodechefIcon from "/assets/cc.svg";
import CodeforcesIcon from "/assets/cfc.svg";
import LeetcodeIcon from "/assets/leetcode.svg";
import GithubIcon from "/assets/github.svg";

const TeamCard = ({ cardRef, team, imagesRef, index }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  const parseUsername = (url) => {
    if (!url) return "";
    const segments = url.split("/");
    return segments[segments.length - 1] || "";
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);

    gsap.fromTo(
      cardRef.current[index],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  };

  useEffect(() => {
    let timer1 = setTimeout(() => setSelectedMember(null), 5 * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [selectedMember]);

  return (
    <div className="md:px-16">
      <div className="box w-full h-[35rem] bg-gradient-to-b from-[#1F8DC2] to-[#B0E5FF] flex items-center relative mt-5 rounded-2xl z-4">
        <div
          className="bg-gradient-to-b from-[#197EB2] to-black opacity-100 text-white h-full md:w-full flex justify-center items-center text-2xl p-4 text-center rounded-l-2xl "
          ref={(el) => (cardRef.current[index] = el)}
        >
          {selectedMember !== null ? (
            <div>
              <h2 className="font-bold text-3xl">{`${selectedMember.firstName} ${selectedMember.lastName}`}</h2>
              <p className="text-white">{selectedMember.info.role}</p>
              <div className="flex flex-col justify-start items-start mt-4 gap-4 text-white text-sm">
                <p>
                  <a
                    href={`${selectedMember.info.github}`}
                    className="flex justify-center items-center sm:gap-4 gap-2"
                  >
                    <img
                      src={GithubIcon}
                      alt="GitHubIcon"
                      className="sm:h-12 h-4"
                    />{" "}
                    @{parseUsername(selectedMember.info.github)}
                  </a>
                </p>
                <p>
                  <a
                    href={`${selectedMember.info.codechef}`}
                    className="flex justify-center items-center sm:gap-4 gap-2"
                  >
                    <img
                      src={CodechefIcon}
                      alt="CodechefIcon"
                      className="sm:h-12 h-4"
                    />
                    @{parseUsername(selectedMember.info.codechef)}
                  </a>
                </p>
                <p>
                  <a
                    href={`${selectedMember.info.codeforces}`}
                    className="flex justify-center items-center sm:gap-4 gap-2"
                  >
                    <img
                      src={CodeforcesIcon}
                      alt="CodeForcesIcon"
                      className="sm:h-12 h-4"
                    />
                    @{parseUsername(selectedMember.info.codeforces)}
                  </a>
                </p>
                <p>
                  <a
                    href={`${selectedMember.info.leetcode}`}
                    className="flex justify-center items-center sm:gap-4 gap-2"
                  >
                    <img
                      src={LeetcodeIcon}
                      alt="LeetcodeIcon"
                      className="sm:h-12 h-4"
                    />
                    @{parseUsername(selectedMember.info.leetcode)}
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <div className="sm:text-4xl text-2xl font-bold">
              {team.teamName}
            </div>
          )}
        </div>

        <div
          className="relative lg:absolute md:h-full md:right-0 md:w-1/2 h-1/2 bottom-0 flex flex-col items-center justify-center opacity-0"
          ref={(el) => (imagesRef.current[index] = el)}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 ">
            {team.members.map((member, index) => (
              <div
                key={index}
                className="text-center cursor-pointer"
                onClick={() => handleMemberClick(member)}
              >
                <img
                  src={member.img}
                  alt={member.firstName}
                  className="rounded-full w-16 h-16 md:w-24 md:h-24 hover:scale-[1.2] transition-transform duration-300"
                />
                <p className="text-black text-sm md:text-base mt-2">
                  {member.firstName}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-0 bottom-0 p-4">
          <p className="text-xs">Click on picture for more info</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
