import React from "react";
import { Earth } from "./Earth";

function Hero() {
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-around flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center flex-col gap-0">
          <img
            src="/logo_withoutbg.png"
            alt="Logo"
            className="max-w-full max-h-[500px] w-full h-full object-cover rounded-lg"
          />
          
          <p className="text-2xl text-center text-white mt-4">
            KJSCE ACM Student Chapter
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center h-[80rem] md:h-[40rem]">
          <Earth />
        </div>
      </div>
    </>
  );
}

export default Hero;
