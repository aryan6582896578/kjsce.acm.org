import React from 'react';

const teamSections = [
  { position: 'CORE', style: 'bg-indigo-900 z-20', size: 'md:h-[450px] h-[300px]' },
  { position: 'TECH', style: 'bg-red-500 md:top-6 md:left-[300px]', size: 'h-[300px]' },
  { position: 'CRT', style: 'bg-blue-500 md:top-6 md:right-[300px]', size: 'h-[300px]' },
  { position: 'MRT', style: 'bg-yellow-500 md:bottom-6 md:left-[150px]', size: 'h-[300px]' },
  { position: 'PR', style: 'bg-green-500 md:bottom-6 md:right-[150px]', size: 'h-[300px]' },
  { position: 'OPS', style: 'bg-blue-500', size: 'h-[300px]' },
];

function Team() {
  return (
    <div
      id="our-team"
      className="flex flex-col justify-center items-center p-8"
    >
      <div className="text-4xl uppercase font-black dark:text-white text-black px-8 pb-4 mb-4 md:mb-16 border-b-cyan-400 border-b-2">
        Our Team
      </div>
      <div className="relative w-full md:h-[450px] h-full flex md:flex-row flex-col justify-center items-center text-4xl mb-16 gap-4">
        {teamSections.map((section, index) => (
          <div
            key={index}
            className={`md:absolute ${section.style} text-white font-bold flex justify-center items-center md:w-1/3 w-full max-w-[450px] ${section.size} rounded-xl`}
          >
            {section.position}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
