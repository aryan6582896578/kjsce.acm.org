import React from 'react';

const teamSections = [
  { position: 'CORE', style: 'bg-indigo-900 z-20', size: 'h-[450px]' },
  { position: 'TECH', style: 'bg-red-500 top-6 left-[300px]', size: 'h-[300px]' },
  { position: 'CRT', style: 'bg-blue-500 top-6 right-[300px]', size: 'h-[300px]' },
  { position: 'MRT', style: 'bg-yellow-500 bottom-6 left-[150px]', size: 'h-[300px]' },
  { position: 'PR', style: 'bg-green-500 bottom-6 right-[150px]', size: 'h-[300px]' },
  { position: 'OPS', style: 'bg-blue-500', size: 'h-[300px]' },
];

function Team() {
  return (
    <div
      id="our-team"
      className="flex flex-col justify-center items-center bg-gradient-to-b from-indigo-950 via-cyan-900 to-cyan-400 p-8"
    >
      <div className="text-4xl uppercase font-black dark:text-white text-black px-8 mb-4 md:mb-16 border-t-cyan-400 border-t-2">
        Our Team
      </div>
      <div className="relative w-full h-[450px] flex justify-center items-center text-4xl mb-16">
        {teamSections.map((section, index) => (
          <div
            key={index}
            className={`absolute ${section.style} text-white font-bold flex justify-center items-center w-1/3 max-w-[450px] ${section.size} rounded-xl`}
          >
            {section.position}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
